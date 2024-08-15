import foto from "../../img/contato.jpg";
import {
  Container,
  Imagem,
  ListaContato,
  Listatitulo,
  ListaItem,
  ListaLink,
} from "./StyledContato";

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
