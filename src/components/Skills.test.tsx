import { describe, expect, it } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import i18n from '../i18n';
import { Skills } from './Skills';

describe('Skills', () => {
  it('traduz o título e as categorias', async () => {
    await act(() => i18n.changeLanguage('pt'));
    const { unmount } = render(<Skills />);
    expect(screen.getByRole('heading', { name: 'Habilidades' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Metodologias Ágeis' })).toBeTruthy();
    unmount();

    await act(() => i18n.changeLanguage('en'));
    render(<Skills />);
    expect(screen.getByRole('heading', { name: 'Skills' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Agile Methodologies' })).toBeTruthy();
  });

  it('lista cada tecnologia em uma única categoria', async () => {
    await act(() => i18n.changeLanguage('pt'));
    const { container } = render(<Skills />);
    const names = [...container.querySelectorAll('span.relative.z-10')].map((e) => e.textContent);
    const dupes = names.filter((n, i) => names.indexOf(n) !== i);
    expect(dupes).toEqual([]);
  });
});
