import * as React from 'react';

import { Images } from '../../assets';
import { Cards } from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { LocaleBr } from '../../locale';
import { Colors } from '../../styles/themes';

import { Container, Wrapper } from './styles';

const styles = {
  container: {
    marginLeft: 4,
    marginRight: 4,
    width: '337px',
    border: `2px solid ${Colors.neutral[100]}`,
    borderRadius: '12px',
  },
};

export function DataManagement() {
  const locale = LocaleBr;
  return (
    <Wrapper>
      <Header title={locale.dataManagement.menu} />
      <Container>
        <Cards
          title={locale.dataManagement.cardsTitle.consultation}
          text={locale.dataManagement.cardsText.consultation}
          img={Images.home.cards.IconCardConsultation}
          customStylesContainer={styles.container}
          path="/"
        />
        <Cards
          title={locale.dataManagement.cardsTitle.throwAttest}
          text={locale.dataManagement.cardsText.throwAttestEdit}
          img={Images.home.cards.IconCardThrowAttest}
          customStylesContainer={styles.container}
          path="/throw-attest"
        />
      </Container>
      <Footer />
    </Wrapper>
  );
}

export default DataManagement;
