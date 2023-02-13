import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BarcodeScannerProps {}

const StyledBarcodeScanner = styled.div`
  color: pink;
`;

export function BarcodeScanner(props: BarcodeScannerProps) {
  return (
    <StyledBarcodeScanner>
      <h1>Welcome to BarcodeScanner!</h1>
    </StyledBarcodeScanner>
  );
}

export default BarcodeScanner;
