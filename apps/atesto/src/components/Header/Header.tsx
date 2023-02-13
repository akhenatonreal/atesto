import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '@mui/material';

import { ReactComponent as IconArrow } from '../../assets/images/icons/icon_arrow_circle_left.svg';
import { ReactComponent as IconHome } from '../../assets/images/icons/icon_home.svg';
import { Colors } from '../../styles/themes';

export interface HeaderProps {
  title?: string;
}

export const HeaderContainer = styled.div`
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

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

export const Text = styled.h1`
  font-size: 1.8em;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

export function Header({ title }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <ButtonIconLeft>
        <Button onClick={() => navigate('/')}>
          <IconHome width={80} />
          <Text>INÍCIO</Text>
        </Button>
      </ButtonIconLeft>
      <HeaderTitle>
        <Title>{title}</Title>
      </HeaderTitle>
      <ButtonIconRight>
        <Button onClick={() => navigate(-1)}>
          <IconArrow width={80} />
          <Text>VOLTAR</Text>
        </Button>
      </ButtonIconRight>
    </HeaderContainer>
  );
}

export default Header;
