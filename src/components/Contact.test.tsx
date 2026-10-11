import { describe, expect, it } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import i18n from '../i18n';
import { Contact } from './Contact';

const whatsappMessage = () => {
  const href = screen.getByRole('link', { name: 'WhatsApp' }).getAttribute('href') ?? '';
  return decodeURIComponent(href.split('text=')[1]);
};

describe('Contact', () => {
  it('manda a mensagem do WhatsApp no idioma da página', async () => {
    await act(() => i18n.changeLanguage('pt'));
    const { unmount } = render(<Contact />);
    expect(whatsappMessage()).toBe('Olá, vim através do seu portfólio e gostaria de conversar.');
    unmount();

    await act(() => i18n.changeLanguage('en'));
    render(<Contact />);
    expect(whatsappMessage()).toBe('Hi, I came through your portfolio and would like to talk.');
  });
});
