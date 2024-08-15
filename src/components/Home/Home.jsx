import React from "react";
import { Link } from "react-router-dom";
import { Container, ContainerList, Img, ListItem, Titulo } from "./StyledHome";

const Home = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((json) => setProduto(json));
  }, []);

  if (produto === null) return null;
  return (
    <Container>
      {produto.map((item) => (
        <ContainerList key={item.id}>
          <ListItem>
            <Link style={{ textDecoration: "none" }}>
              <Img src={item.fotos[0].src} alt={item.fotos[0].titulo} />
              <Titulo>{item.nome}</Titulo>
            </Link>
          </ListItem>
        </ContainerList>
      ))}
    </Container>
  );
};

export default Home;
