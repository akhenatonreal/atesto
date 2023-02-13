import styled from 'styled-components';

import { Colors } from '../../styles/themes';

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  width: 100vw;
  background: ${({ theme }) => theme.background};
`;

export const Header = styled.div`
  height: 20vh;
  display: flex;
  justfy-content: space-between;
  border-bottom: 2px solid ${Colors.border.default};
`;

export const ButtonIconLeft = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonIconRight = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  height: 20vh;
  display: flex;
  justfy-content: space-between;
  border-top: 2px solid ${Colors.border.default};
`;

export const Img = styled.image``;

export const FooterLogoLeft = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const FooterLogoRight = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

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
