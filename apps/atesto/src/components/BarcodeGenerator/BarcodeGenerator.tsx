import { SetStateAction, useState } from 'react';
import Barcode from 'react-barcode';

import { TextField } from '@mui/material';

import { Colors } from '../../styles/themes';

export interface BarcodeGeneratorProps {
  inputRef?: string;
  bar?: string;
}

const styles = {
  inputArea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  input: {
    width: 400,
  },
  barcode: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  barcodeTextContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 50,
    marginLeft: 12,
  },
  barcodeTextArea: {
    fontSize: 18,
    width: 250,
    height: 50,
  },
  buttonFab: {
    height: 20,
  },
};

export function BarcodeGenerator({
  bar = 'Digite o codigo de barras',
}: BarcodeGeneratorProps) {
  const [barcode, setBarcode] = useState(`${bar}`);

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setBarcode(event.target.value ? event.target.value : '');
  };

  return (
    <div>
      <div style={styles.inputArea}>
        <TextField
          onChange={handleChange}
          style={styles.input}
          value={barcode}
          placeholder={bar}
          inputProps={{ maxLength: 80 }}
          label="Código de barras"
          size="medium"
          variant="outlined"
          color="secondary"
        />
      </div>

      <div style={styles.barcode}>
        {barcode && (
          <Barcode background={`${Colors.neutral[280]}`} value={barcode} />
        )}
      </div>
    </div>
  );
}

export default BarcodeGenerator;
