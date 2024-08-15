import styled from "styled-components";
import foto from "../../img/contato.jpg";

const Container = styled.div`
  display: flex;
  max-width: 930px;
  margin: 0 auto;
  justify-content: start;
  flex-wrap: wrap;
  padding: 10px;

  @media (max-width: 780px) {
    flex-direction: column-reverse;
    align-items: center;
    margin: 0 auto;
  }
`;

const Imagem = styled.img`
  max-width: 100%;
  display: block;
  object-fit: cover;
  width: 400px;
  border-radius: 10px;
`;

const ListaContato = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  gap: 20px;
`;

const ListaItem = styled.li`
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

const Listatitulo = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ListaLink = styled.a`
  text-decoration: none;
  display: block;
  color: #000;
`;

const Contato = () => {
  return (
    <Container>
      <Imagem src={foto} />
      <ListaContato>
        <Listatitulo>Entre em Contato</Listatitulo>
        <ListaItem>
          <ListaLink href="mailto:bdorigon@gmail.com">
            bdorigon@gmail.com
          </ListaLink>
        </ListaItem>
        <ListaItem>
          <ListaLink href="tel:+5519998309308">19 998309308</ListaLink>
        </ListaItem>
        <ListaItem>Rua Ali Perto, 999, São Paulo - SP</ListaItem>
      </ListaContato>
    </Container>
  );
};

export default Contato;
