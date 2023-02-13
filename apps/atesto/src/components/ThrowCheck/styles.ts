import styled from 'styled-components';

import { Colors } from '../../styles/themes';

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  background-color: ${Colors.neutral[280]};
`;

export const Container = styled.div`
  height: 80vh;
  width: 100%;
  padding-top: 2%;
  padding-left: 2%;
  padding-right: 2%;
  margin-bottom: 4%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
`;

export const BoxAttest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${Colors.neutral[280]};
`;

export const Img = styled.image``;

export const Title = styled.h1`
  font-family: 'Oswald-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5em;
  text-align: flex-start;
  color: ${Colors.neutral[900]};
`;

export const Text = styled.text`
  font-family: 'Oswald-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5em;
  text-align: center;
  text-decoration: underline;
  color: ${Colors.neutral[900]};
`;
