import {
  Logo,
  NavItem,
  NavItems,
  NavbarContainer,
  NavbarMainContainer,
} from "./style";

const Navbar = () => {
  return (
    <NavbarMainContainer>
      <NavbarContainer>
        <Logo>Contact Keeper</Logo>
        <NavItems>
          <NavItem
            to='/'
           
          >
            Home
          </NavItem>
          <NavItem to='/contacts'>Contacts</NavItem>
          <NavItem to='/signup'>Sign Up</NavItem>
          <NavItem to='/login'>Login</NavItem>
        </NavItems>
      </NavbarContainer>
    </NavbarMainContainer>
  );
};

export default Navbar;
