import { Nav, NavUl, NavUlLi, StyledLink } from './NavBarStyled';

const NavBar = () => {
  return (
    <Nav>
      <NavUl>
        <NavUlLi>
          <StyledLink to='/'>Home</StyledLink>
        </NavUlLi>
        <NavUlLi>
          <StyledLink to='/pokedex'>Pokedex</StyledLink>
        </NavUlLi>
      </NavUl>
    </Nav>
  );
};

export default NavBar;
