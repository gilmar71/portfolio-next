/* Components */
import { Container } from 'components/data/container';
import { NextImage } from 'components/data/NextImage';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

/* Styles */
import * as S from './styles';

export function Education() {
  return (
    <S.Education>
      <Container>
        <h2 className="txt-sz-3">Education</h2>
        <div className="formation-box">
          <span className="txt-sz-6">Physical Therapy</span>
          <span className="txt-sz-7">Bachelor's degree</span>
          <span className="txt-sz-7">State University of Londina</span>
          <span className="txt-sz-7">2011-2015</span>
        </div>

        <div className="formation-box">
          <span className="txt-sz-6">Systems Analysis and Development</span>
          <span className="txt-sz-7">Bachelor's degree</span>
          <span className="txt-sz-7">Positivo Londrina</span>
          <span className="txt-sz-7">2022-2024</span>
        </div>

        <div className="formation-box">
          <span className="txt-sz-6">HTML and CSS for begginers</span>
          <span className="txt-sz-7">Bootcamp</span>
          <span className="txt-sz-7">Origamid</span>
          <span className="txt-sz-7">2022</span>
        </div>

        <div className="formation-box">
          <span className="txt-sz-6">Javascript</span>
          <span className="txt-sz-7">Bootcamp</span>
          <span className="txt-sz-7">Origamid</span>
          <span className="txt-sz-7">2022</span>
        </div>

        <div className="formation-box">
          <span className="txt-sz-6">React</span>
          <span className="txt-sz-7">Bootcamp</span>
          <span className="txt-sz-7">Origamid</span>
          <span className="txt-sz-7">2022</span>
        </div>
      </Container>
    </S.Education>
  );
}
