import styled from 'styled-components';

import { CardMedia } from '@mui/material';

import { Images } from '../../assets';
import { Colors } from '../../styles/themes';

/* eslint-disable-next-line */
export interface FooterProps {}

export const FooterContainer = styled.div`
  height: 20vh;
  display: flex;
  justify-content: space-between;
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

const styles = {
  cardMedia: {
    marginLeft: 10,
    marginRight: 10,
    width: '160px',
  },
};

export function Footer() {
  const LogoSeed = Images.logos.LogoSeed;
  const LogoGovPr = '../../assets/images/logos/logo_govpr.svg';
  return (
    <FooterContainer>
      <FooterLogoLeft>
        <CardMedia sx={styles.cardMedia} component="img" image={LogoGovPr} />
      </FooterLogoLeft>
      <FooterLogoRight>
        <CardMedia sx={styles.cardMedia} component="img" image={LogoSeed} />
      </FooterLogoRight>
    </FooterContainer>
  );
}

export default Footer;
