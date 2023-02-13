import { render } from '@testing-library/react';

import AddContracts from './AttestRequest';

describe('AddContracts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddContracts />);
    expect(baseElement).toBeTruthy();
  });
});
