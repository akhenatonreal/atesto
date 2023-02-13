import { Box } from '@mui/material';

import { Colors } from './styles/themes';

export default function ErrorPage() {
  return (
    <Box sx={styles.box}>
      <div id="error-page">
        <h1>Oops!</h1>
        <p style={styles.root}>Desculpe, ocorreu um erro inesperado.</p>
        <p>
          <i style={styles.root}>PAGINA NÃO ENCONTRADA </i>
          <span role="img" aria-label="Alert">
            🚧
          </span>
        </p>
      </div>
    </Box>
  );
}

const styles = {
  root: {
    fontFamily: 'Oswald-Regular',
    color: Colors.neutral[100],
  },
  box: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
