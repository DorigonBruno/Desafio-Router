import { NavLink } from "react-router-dom";
import { Container, Nav, ButtonHeader } from "./Styled";

const Header = () => {
  return (
    <Container>
      <Nav>
        <NavLink to="/" end>
          <ButtonHeader>Produto</ButtonHeader>
        </NavLink>
        <NavLink to="/contato">
          <ButtonHeader>Contato</ButtonHeader>
        </NavLink>
      </Nav>
    </Container>
  );
};

export default Header;
