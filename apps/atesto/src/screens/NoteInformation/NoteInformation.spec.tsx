import { render } from '@testing-library/react';

import NoteInformation from './NoteInformation';

describe('NoteInformation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NoteInformation />);
    expect(baseElement).toBeTruthy();
  });
});
