import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { ParticleBackground } from './ParticleBackground';

describe('ParticleBackground', () => {
  const ctx = {
    fillRect: vi.fn(),
    beginPath: vi.fn(),
    arc: vi.fn(),
    fill: vi.fn(),
    fillStyle: '',
  };
  let frames: FrameRequestCallback[] = [];
  let nextId = 1;
  let cancel: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    Object.values(ctx).forEach((fn) => typeof fn === 'function' && fn.mockClear());
    frames = [];
    nextId = 1;
    cancel = vi.fn();
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      ctx as unknown as CanvasRenderingContext2D
    );
    vi.stubGlobal(
      'requestAnimationFrame',
      vi.fn((cb: FrameRequestCallback) => {
        frames.push(cb);
        return nextId++;
      })
    );
    vi.stubGlobal('cancelAnimationFrame', cancel);
    // Todas as partículas nascem perto do canto superior esquerdo, movendo-se (-0.98, -0.98).
    vi.spyOn(Math, 'random').mockReturnValue(0.01);
  });

  it('cancela o próximo quadro ao desmontar (sem loop de animação vazando)', () => {
    const { unmount } = render(<ParticleBackground />);
    frames[0](0); // agenda mais um quadro
    unmount();
    expect(cancel).toHaveBeenCalledWith(nextId - 1);
  });

  it('não atrai partículas ao canto superior esquerdo quando o mouse nunca se moveu (toque)', () => {
    render(<ParticleBackground />);
    const [x, y] = ctx.arc.mock.calls[0];
    // só o deslocamento próprio: 0.01 * largura/altura da janela - 0.98
    expect(x).toBeCloseTo(0.01 * window.innerWidth - 0.98, 5);
    expect(y).toBeCloseTo(0.01 * window.innerHeight - 0.98, 5);
  });

  it('não gera NaN quando o mouse está exatamente sobre uma partícula', () => {
    render(<ParticleBackground />);
    const [x, y] = ctx.arc.mock.calls[0];
    window.dispatchEvent(new MouseEvent('mousemove', { clientX: x, clientY: y }));
    ctx.arc.mockClear();

    frames[0](16);

    expect(ctx.arc).toHaveBeenCalled();
    for (const [px, py] of ctx.arc.mock.calls) {
      expect(Number.isFinite(px)).toBe(true);
      expect(Number.isFinite(py)).toBe(true);
    }
  });
});
