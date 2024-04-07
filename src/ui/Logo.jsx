import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 5.2rem;
  width: auto;
`;

export default function Logo() {
  return (
    <StyledLogo>
      <Img src="/logo.svg" alt="Logo" />
    </StyledLogo>
  );
}
