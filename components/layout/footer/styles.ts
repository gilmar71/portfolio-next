import styled from 'styled-components';

export const Footer = styled.footer`
  padding-top: clamp(30px, 5vw, 80px);
  padding-bottom: clamp(30px, 5vw, 80px);
  background-color: var(--black);

  * {
    color: var(--white);
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }

  @media only screen and (max-width: 1600px) {
  }
  @media only screen and (max-width: 1400px) {
  }
  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 1024px) {
  }
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 500px) {
  }
`;
