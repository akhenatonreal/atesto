import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NoteManagementProps {}

const StyledNoteManagement = styled.div`
  color: pink;
`;

export function NoteManagement(props: NoteManagementProps) {
  return (
    <StyledNoteManagement>
      <h1>Welcome to NoteManagement!</h1>
    </StyledNoteManagement>
  );
}

export default NoteManagement;
