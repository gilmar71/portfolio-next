/* Components */
import { Container } from 'components/data/container';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

/* Styles */
import * as S from './styles';

export function Banner() {
  return (
    <S.Banner>
      <div className="bg">
        <Container>
          <h1 className="txt-sz-1">Resume teste</h1>
          <h2 className="txt-sz-2">Gilmar Bregano Filho</h2>
          <h3 className="txt-sz-3">Front end System Developer</h3>
          <p className="txt-sz-4">
            React | Next.js | Javascript | Typescript | Flutter | HTML5 | CSS
          </p>

          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              width="60"
              height="60"
              fill="#fff"
            >
              <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </span>
        </Container>
      </div>
    </S.Banner>
  );
}
