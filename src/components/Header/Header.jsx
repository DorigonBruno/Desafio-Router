// import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  max-width: 930px;
  margin: 0 auto;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px 0 0 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
  padding: 10px 0;
  font-size: 1.4rem;
`;

const ButtonHeader = styled.button`
  background: #eee;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 4px;
  font-weight: 400;
  cursor: pointer;
`;

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
