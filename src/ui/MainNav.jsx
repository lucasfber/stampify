import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiCog6Tooth, HiOutlineHome, HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineCampaign } from "react-icons/md";
import { PiCardsDuotone } from "react-icons/pi";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem 1.2rem 0;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

export default function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to={"/"}>
            <HiOutlineHome />
            <span>Início</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={"/promocoes"}>
            <MdOutlineCampaign />
            <span>Promoções</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={"/cartoes"}>
            <PiCardsDuotone />
            <span>Cartões</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={"/clientes"}>
            <HiOutlineUsers />
            <span>Clientes</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={"/configuracoes"}>
            <HiCog6Tooth />
            <span>Configurações</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}
