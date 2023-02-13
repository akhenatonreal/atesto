import { render } from '@testing-library/react';

import NotesConsultation from './NoteConsultation';

describe('NotesConsultation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotesConsultation />);
    expect(baseElement).toBeTruthy();
  });
});
