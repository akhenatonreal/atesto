import { Button, Stack } from '@mui/material';

import { Colors } from '../../styles/themes';

export interface ButtonProps {
  variant?: string;
  textButton?: string;
  onClick?: () => void;
  customStyles?: React.CSSProperties;
  children?: React.ReactNode;
}

const styles = {
  button: {
    height: '71px',
    width: '357px',
    fontFamily: 'Oswald-Regular',
    fontSize: '24px',
    borderRadius: '10px',
    color: `${Colors.neutral[100]}`,
    backgroundColor: `${Colors.brand.default}`,
  },
};

export function Buttons({
  variant,
  textButton,
  onClick,
  customStyles,
  children,
}: ButtonProps) {
  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={onClick}
        style={customStyles || styles.button}
        variant={'text' || variant}
      >
        {textButton}
        {children}
      </Button>
    </Stack>
  );
}

export default Buttons;
