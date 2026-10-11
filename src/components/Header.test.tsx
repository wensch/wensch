import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';
import i18n from '../i18n';
import { Header } from './Header';

describe('Header: idioma', () => {
  beforeEach(async () => {
    // Navegador de brasileiro: i18n.language vira "pt-BR", nunca "pt".
    await act(() => i18n.changeLanguage('pt-BR'));
  });

  it('mostra o CV em português para pt-BR e troca para inglês em um clique', async () => {
    render(<Header />);

    expect(i18n.language).toBe('pt-BR');
    expect(screen.getByRole('link', { name: 'Baixar CV' }).getAttribute('href')).toBe(
      '/files/mateus-wensch-cv-pt.pdf'
    );
    expect(document.documentElement.lang).toBe('pt');

    fireEvent.click(screen.getByRole('button', { name: 'Mudar idioma' }));

    expect(await screen.findByRole('link', { name: 'Download CV' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Download CV' }).getAttribute('href')).toBe(
      '/files/mateus-wensch-cv-en.pdf'
    );
    expect(document.documentElement.lang).toBe('en');
  });
});

describe('Header: seção ativa', () => {
  const ids = ['home', 'about', 'skills', 'projects', 'contact'];
  let sections: HTMLElement[] = [];

  const placeSections = (tops: number[]) =>
    sections.forEach((section, i) => {
      section.getBoundingClientRect = () => ({ top: tops[i] }) as DOMRect;
    });

  const scrollTo = (y: number) => {
    Object.defineProperty(window, 'scrollY', { value: y, configurable: true });
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
  };

  const activeLabel = () => document.querySelector('.nav-link.active')?.textContent;

  beforeEach(async () => {
    await act(() => i18n.changeLanguage('pt'));
    Object.defineProperty(window, 'innerHeight', { value: 900, configurable: true });
    Object.defineProperty(document.documentElement, 'scrollHeight', { value: 6000, configurable: true });
    sections = ids.map((id) => {
      const el = document.createElement('section');
      el.id = id;
      document.body.appendChild(el);
      return el;
    });
    placeSections([0, 900, 2800, 4700, 5550]);
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true });
  });

  afterEach(() => sections.forEach((s) => s.remove()));

  it('destaca "Projetos" mesmo quando a seção é bem mais alta que a tela', () => {
    render(<Header />);
    expect(activeLabel()).toBe('Início');

    // Projetos (1900px de altura, mais que 2x a tela) ocupa o meio da tela.
    placeSections([-3000, -2200, -1000, 100, 2500]);
    scrollTo(3800);
    expect(activeLabel()).toBe('Projetos');
  });

  it('destaca a última seção ao chegar no fim da página', () => {
    render(<Header />);
    placeSections([-5000, -4100, -2200, -300, 450]); // Contato só começa em 50% da tela
    scrollTo(5100); // 900 + 5100 = altura total
    expect(activeLabel()).toBe('Contato');
  });
});
