import styled from 'styled-components';

export const AboutMe = styled.section`
  padding-top: clamp(30px, 5vw, 100px);
  padding-bottom: clamp(30px, 5vw, 100px);

  * {
    color: var(--white);
  }

  .box-top {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 150px;

    & + * {
      margin-top: 100px;
    }

    .next-image {
      max-width: 300px;
    }

    .box-attributes {
      display: flex;
      flex-direction: column;
      gap: 30px;

      ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
    }
  }

  .box-middle {
    display: flex;
    flex-direction: column;
    gap: 20px;

    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
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
