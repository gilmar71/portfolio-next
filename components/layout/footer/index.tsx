import { ButtonComponent } from 'components/data/button';
import { Container } from 'components/data/container';
import { NextImage } from 'components/data/NextImage';
import Link from 'next/link';
import { SiteMap } from './data';

import * as S from './styles';

export function FooterComponent() {
  return (
    <S.Footer>
      <Container>
        <h2 className="txt-sz-6">Contact</h2>
        <ul>
          <li className="txt-sz-8">
            Adress: Rua Alfredo Battini, 568, Londrina-PR Brazil
          </li>
          <li className="txt-sz-8">Phone: 55 43 9 9900-8166</li>
          <li className="txt-sz-8">E-mail: gilmar_770@hotmail.com</li>

          <li className="txt-sz-8">
            <Link href="https://github.com/gilmar71" passHref>
              <a href="">https://github.com/gilmar71</a>
            </Link>
          </li>
        </ul>
      </Container>
    </S.Footer>
  );
}
