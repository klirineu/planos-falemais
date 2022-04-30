import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 960px;
  flex-direction: column;
`;