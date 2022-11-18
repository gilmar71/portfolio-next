/* Components */
import { Container } from 'components/data/container';
import { NextImage } from 'components/data/NextImage';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

/* Styles */
import * as S from './styles';

export function AboutMe() {
  return (
    <S.AboutMe>
      <Container>
        <div className="box-top">
          <NextImage src="/images/foto-1.jpeg" alt="myself" layout="fill" />
          <div className="box-attributes">
            <h2 className="txt-sz-3">Attributes</h2>
            <p className="txt-sz-5">Determined / Analytic / Planner</p>
            <h3 className="txt-sz-5">Primary Skills</h3>
            <ul>
              <li className="txt-sz-7">Hardworking</li>
              <li className="txt-sz-7">Thorough</li>
              <li className="txt-sz-7">Troubleshooting</li>
              <li className="txt-sz-7">Organized</li>
              <li className="txt-sz-7">Communication</li>
              <li className="txt-sz-7">Execution</li>
            </ul>
          </div>
        </div>
        <div className="box-middle">
          <h3 className="txt-sz-4">About me...</h3>
          <p className="txt-sz-7">
            I am a 29-year-old guy that very early got interested in tech,
            computers, and the possibilities of the internet.
          </p>
          <ul>
            <li className="txt-sz-7">
              I'm a country guy from who dreams of working with technology.
            </li>
            <li className="txt-sz-7">
              I'm always striving to learn new programming languages ​​and
              improve the ones I already know.
            </li>
            <li className="txt-sz-7">
              I currently work with development in React.js, Next.js,
              Javascript, HTML, CSS and Flutter.
            </li>
            <li className="txt-sz-7">
              I have good communication skills, I am assertive and I know how to
              position myself well and express my opinion.
            </li>
            <li className="txt-sz-7">My english level is Intermediate.</li>
          </ul>
        </div>
      </Container>
    </S.AboutMe>
  );
}
