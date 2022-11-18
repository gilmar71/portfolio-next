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
        <h2 className="txt-sz-3">Experiences with technology</h2>

        <div className="formation-box">
          <span className="txt-sz-6">Front End developer</span>
          <span className="txt-sz-7">Codie Digital</span>
          <span className="txt-sz-7">April 2022 - Current Employment</span>
        </div>

        <h3 className="txt-sz-3">Experiences with Physical Therapy</h3>

        <div className="formation-box">
          <span className="txt-sz-6">Physical therapist</span>
          <span className="txt-sz-7">Reabilitar</span>
          <span className="txt-sz-7">2015 - 2016</span>
        </div>

        <div className="formation-box">
          <span className="txt-sz-6">Physical therapist</span>
          <span className="txt-sz-7">Uniorte</span>
          <span className="txt-sz-7">2016 - 2017</span>
        </div>

        <div className="formation-box">
          <span className="txt-sz-6">Physical therapist</span>
          <span className="txt-sz-7">Physis - my own busines</span>
          <span className="txt-sz-7">2017 - 2019</span>
        </div>

        <div className="formation-box">
          <span className="txt-sz-6">Physical therapist</span>
          <span className="txt-sz-7">CT ifestyle - my own busines</span>
          <span className="txt-sz-7">2019 - 2022</span>
        </div>
      </Container>
    </S.Experience>
  );
}
