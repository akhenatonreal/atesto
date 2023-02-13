import React, { useState } from 'react';

import BarcodeGenerator from '../BarcodeGenerator/BarcodeGenerator';
import Box from '@mui/material/Box';
import Buttons from '../../components/Buttons/Buttons';
import { Colors } from '../../styles/themes';
import { LocaleBr } from '../../locale';
import { Modal as Modals } from '@mui/material';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export interface ModalProps {
  title?: string;
  text?: string;
  textButton?: string;
  steps?: number;
}

export const Title = styled.h1`
  font-size: 1.2em;
  text-align: center;
  color: ${({ theme }) => theme.background};
`;

export const Text = styled.h1`
  font-size: 1em;
  text-align: center;
  color: ${({ theme }) => theme.background};
`;

const style = {
  minWidth: '600px',
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontFamily: 'Oswald-Regular',
  fontSize: '24px',

  bgcolor: 'background.paper',
  border: `2px solid ${Colors.neutral[900]}`,
  boxShadow: 24,
  backgroundColor: `${Colors.neutral[280]}`,
  p: 4,
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    height: '90%',
  },
  button: {
    height: '58px',
    width: '250px',
    borderRadius: '10px',
    fontFamily: 'Oswald-Regular',
    fontSize: '18px',
    color: `${Colors.neutral[100]}`,
    backgroundColor: `${Colors.brand.default}`,
  },
};

export default function Modal({
  title,
  text,
  textButton,
  steps = 1,
}: ModalProps) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleConfirm = () => {
    navigate('/Throw-Attest', { state: steps });
  };
  const locale = LocaleBr;

  return (
    <div>
      <Buttons
        onClick={() => handleOpen()}
        variant="contained"
        textButton={textButton}
      />
      <Modals open={open} onClose={handleClose}>
        <Box sx={style}>
          <Title>{title}</Title>
          <Text>{text}</Text>
          <BarcodeGenerator />
          <Box sx={style.buttonContainer}>
            <Buttons
              onClick={() => handleConfirm()}
              variant="contained"
              textButton={locale.component.modal.btnConfirm}
              customStyles={style.button}
            />
            <Buttons
              onClick={() => handleClose()}
              variant="contained"
              textButton={locale.component.modal.btnCancel}
              customStyles={style.button}
            />
          </Box>
        </Box>
      </Modals>
    </div>
  );
}
