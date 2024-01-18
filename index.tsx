import React from 'react';
import { createRoot } from 'react-dom/client';
import { Deck, DefaultTemplate, MarkdownSlideSet } from 'spectacle';
import mdContent from './slides.md';

const theme = {
    colors: {
        primary: '#fff',
        secondary: '#1F2022',
        tertiary: '#03A9FC',
        quaternary: '#CECECE',
    },
    fonts: {
        header: '"Montserrat", sans-serif',
        text: '"Montserrat", sans-serif',
    },
    fontSizes: {
        h1: '4.5rem',
        h2: '3.5rem',
        h3: '2.5rem',
        text: '2rem',
        monospace: '1rem',
    },
    space: [0, 5, 10, 15, 20, 25, 30, 35, 40],
}

const Presentation = () => (
  <Deck theme={theme} template={() => <DefaultTemplate />}>
    <MarkdownSlideSet>{mdContent}</MarkdownSlideSet>
  </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation />);