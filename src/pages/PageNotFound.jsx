import styled from "styled-components";
import Heading from "../ui/Heading";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);

  padding: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  background-color: var(--color-grey-0);

  border: 1px solid var(--color-grey-100);
  border: 1px solid #ccc;
  border-radius: var(--border-radius-md);

  padding: 8.8rem;
  text-align: center;

  flex: 0 1 96rem;
`;

export default function PageNotFound() {
  return (
    <StyledPageNotFound>
      <Box>
        <h2>404</h2>
        <Heading as="h1">Ops! Página não encontrada</Heading>
      </Box>
    </StyledPageNotFound>
  );
}
