import { render } from '@testing-library/react';

import NoteManagement from './NoteManagement';

describe('NoteManagement', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NoteManagement />);
    expect(baseElement).toBeTruthy();
  });
});
