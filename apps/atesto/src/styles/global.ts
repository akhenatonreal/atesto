import { createGlobalStyle, withTheme } from 'styled-components';

import { ThemeProps } from './themes';
const InterLightTTF = '../assets/fonts/Inter-Light.ttf';
const InterBoldTTF = '../assets/fonts/Inter-Bold.ttf';
const OswaldRegularTTF = '../assets/fonts/Oswald-Regular.ttf';
const OswaldSemiBoldTTF = '../assets/fonts/Oswald-SemiBold.ttf';
const OswaldBoldTTF = '../assets/fonts/Oswald-Bold.ttf';
const OswaldLightTTF = '../assets/fonts/Oswald-Light.ttf';
const OswaldExtraLightTTF = '../assets/fonts/Oswald-ExtraLight.ttf';
const OswaldMediumTTF = '../assets/fonts/Oswald-Medium.ttf';
const RobotoRegularTTF = '../assets/fonts/Roboto-Regular.ttf';
type GlobalThemeProps = {
  theme: ThemeProps;
};

const globalStyle = createGlobalStyle`
@font-face {
  font-family: 'Inter-Bold';
  src: url(${InterBoldTTF}) format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: 'Inter-Light';
  src: url(${InterLightTTF}) format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: 'Oswald-Regular';
  src: url(${OswaldRegularTTF}) format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: auto;
}

  @font-face {
    font-family: 'Oswald-SemiBold';
    src: url(${OswaldSemiBoldTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Oswald-Bold';
    src: url(${OswaldBoldTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Oswald-Light';
    src: url(${OswaldLightTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Oswald-ExtraLight';
    src: url(${OswaldExtraLightTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Oswald-Medium';
    src: url(${OswaldMediumTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Roboto-Regular';
    src: url(${RobotoRegularTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

  :root {
    //dark-mode
    --dark-background: #233D4D;
    --dark-text: #F5F5F7;

    //light-mode
    --light-background: #f2f2f2;
    --light-text: #233D4D;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body  {
    -webkit-font-smoothing: antialiased;
    margin: 0 auto;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
  }

  h1 {
    font-size: 3.375rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
    font-family: 'Oswald-Regular'
  }

`;

export default withTheme(globalStyle);
