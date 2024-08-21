import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 930px;
  margin: 0 auto;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px 0 0 0;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  padding: 10px 0;
  font-size: 1.4rem;

  & a.active button{
    background: #ddd;
  }
`;

export const ButtonHeader = styled.button`
  background: #eee;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 4px;
  font-weight: 400;
  cursor: pointer;
`;
