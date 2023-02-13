import { useLocation } from 'react-router-dom';

import { CardMedia } from '@mui/material';

import { Images } from '../../assets';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import Sidebar from '../../components/Sidebar/Sidebar';
import ThrowCheck from '../../components/ThrowCheck/ThrowCheck';
import { LocaleBr } from '../../locale';

import { BoxAttest, Container, Wrapper } from './styles';

/* eslint-disable-next-line */
export interface ThrowAttestProps {}

const styles = {
  containerImageAttest: {
    width: '600px',
  },
};

export function ThrowAttest(props: ThrowAttestProps) {
  const location = useLocation();

  const locale = LocaleBr;
  const LogoAttest = Images.throwAttest.image.ImageThrowAttest;

  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <Header title={locale.throwAttest.menu} />
        {!location.state && (
          <BoxAttest>
            <CardMedia
              sx={styles.containerImageAttest}
              component="img"
              image={LogoAttest}
            />
            <Modal
              title={locale.throwAttest.modalTitle}
              textButton={locale.throwAttest.textButton}
            />
          </BoxAttest>
        )}
        {location.state && <ThrowCheck />}
      </Container>
    </Wrapper>
  );
}

export default ThrowAttest;
