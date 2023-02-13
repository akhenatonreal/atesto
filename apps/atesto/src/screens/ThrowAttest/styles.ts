import styled from 'styled-components';

import { Colors } from '../../styles/themes';

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  background: ${({ theme }) => theme.background};
  border-left: 2px solid ${Colors.border.default};
`;

export const Container = styled.div`
  display: flex;
  margin-left: 15%;
  flex-direction: column;
`;

export const BoxAttest = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${Colors.neutral[280]};
`;

export const Img = styled.image``;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

export const Text = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;
