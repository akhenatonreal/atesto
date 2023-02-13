import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AddContractsProps {}

const StyledAddContracts = styled.div`
  color: pink;
`;

export function AddContracts(props: AddContractsProps) {
  return (
    <StyledAddContracts>
      <h1>Welcome to AddContracts!</h1>
    </StyledAddContracts>
  );
}

export default AddContracts;
