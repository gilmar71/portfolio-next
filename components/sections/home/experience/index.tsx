/* Components */
import { Container } from 'components/data/container';
import { NextImage } from 'components/data/NextImage';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

/* Styles */
import * as S from './styles';

export function Experience() {
  return (
    <S.Experience>
      <Container>
        <h2 className="txt-sz-3">Experiences</h2>

        <div className="formation-box">
          <span className="txt-sz-6">Front End developer</span>
          <span className="txt-sz-7">Codie Digital</span>
          <span className="txt-sz-7">April 2022 - Current Employment</span>
        </div>
      </Container>
    </S.Experience>
  );
}
