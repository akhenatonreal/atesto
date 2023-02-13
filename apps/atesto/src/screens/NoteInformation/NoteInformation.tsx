import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NoteInformationProps {}

const StyledNoteInformation = styled.div`
  color: pink;
`;

export function NoteInformation(props: NoteInformationProps) {
  return (
    <StyledNoteInformation>
      <h1>Welcome to NoteInformation!</h1>
    </StyledNoteInformation>
  );
}

export default NoteInformation;
