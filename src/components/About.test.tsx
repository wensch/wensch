import { beforeEach, describe, expect, it } from 'vitest';
import { act, render } from '@testing-library/react';
import i18n from '../i18n';
import { About } from './About';

describe('About', () => {
  beforeEach(async () => {
    await act(() => i18n.changeLanguage('pt'));
  });

  it('renderiza <b>..</b> das traduções como negrito, sem mostrar as tags', () => {
    const { container } = render(<About />);

    expect(container.textContent).not.toContain('<b>');
    expect(container.textContent).not.toContain('</b>');
    const bold = [...container.querySelectorAll('strong')].map((e) => e.textContent);
    expect(bold).toContain('Desenvolvimento e Arquitetura:');
  });
});
