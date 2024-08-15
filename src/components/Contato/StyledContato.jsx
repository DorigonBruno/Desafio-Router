import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 930px;
  margin: 0 auto;
  justify-content: start;
  flex-wrap: wrap;
  padding: 10px;
  animation: animaLeft 0.5s forwards;

  @keyframes animaLeft {
    from {
      transform: translate(-300px);
    }
    to {
      transform: initial;
    }
  }

  @media (max-width: 780px) {
    flex-direction: column-reverse;
    align-items: center;
    margin: 0 auto;
  }
`;

export const Imagem = styled.img`
  max-width: 100%;
  display: block;
  object-fit: cover;
  width: 400px;
  border-radius: 10px;
`;

export const ListaContato = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  gap: 20px;
`;

export const ListaItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1rem;
  gap: 14px;

  &::before {
    content: "";
    width: 20px;
    height: 4px;
    background: #eee;
  }
`;

export const Listatitulo = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const ListaLink = styled.a`
  text-decoration: none;
  display: block;
  color: #000;
`;
