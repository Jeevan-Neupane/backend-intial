import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { WrapperContainer } from '../../style/Container';


export const NavbarContainer = styled(WrapperContainer)`
  background-color: ${props => props.theme.background};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  `;

export const NavbarMainContainer = styled.div`
border-bottom:1px solid ${props => props.theme.border};

`

export const Logo = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  font-size:3rem;
`;

export const NavItems = styled.div`
  display: flex;
  gap: 2rem;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size:1.6rem;

  &.active {
    color: teal; 
  }
`;