import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #616161;
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: flex-end;
  padding: 10px 20px;
`;

const NavUlLi = styled.li`
  margin: 10px;
`;

const StyledLink = styled(Link)`
  background-color: #bfad58;
  padding: 5px 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  text-decoration: none;
  color: #fff;
`;

export { Nav, NavUl, NavUlLi, StyledLink };
