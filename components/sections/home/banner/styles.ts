import styled from 'styled-components';

export const Banner = styled.section`
  .bg {
    background-image: url('/images/bg-banner.jpg');
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
  }

  .container {
    padding-top: 300px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    h1 + * {
      margin-top: 100px;
    }

    p + * {
      margin-top: 200px;
    }

    * {
      color: var(--white);
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
