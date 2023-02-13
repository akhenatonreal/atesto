import { render } from '@testing-library/react';

import BarcodeScanner from './BarcodeScanner';

describe('BarcodeScanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BarcodeScanner />);
    expect(baseElement).toBeTruthy();
  });
});
