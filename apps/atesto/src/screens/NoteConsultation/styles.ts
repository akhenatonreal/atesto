import styled from 'styled-components';

import { Colors } from '../../styles/themes';

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.background};
  border-left: 2px solid ${Colors.border.default};
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  width: 85%;
  margin-left: 15%;
  flex-direction: column;
`;

export const BoxConsultation = styled.div`
  height: 80vh;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${Colors.neutral[280]};
`;

export const Toolbar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  height: 60px;
  width: 210px;
  margin-right: 15px;
  padding: 4px 6px;
  font-size: 20px;
  font-family: 'Oswald-Medium';
  color: ${Colors.neutral[100]};
  background-color: ${Colors.brand.default};
`;

export const ButtonIcon = styled.button`
  height: 60px;
  width: 60px;
  margin-right: 15px;
  padding: 4px 6px;
  font-size: 20px;
  font-family: 'Oswald-Medium';
  color: ${Colors.neutral[100]};
  background-color: ${Colors.neutral[280]};
  border: none;
`;

export const CardsConsultationArea = styled.div`
  width: 100%;
  margin-top: 35px;
  overflow: auto;
`;

export const CardsConsultation = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 102px;
  padding: 0 20px;
  margin-bottom: 20px;
  text-align: left;
  font-size: 19px;
  font-family: 'Oswald-Regular';
  color: ${Colors.neutral[100]};
  background-color: ${Colors.brand.default};
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
