import React from "react";
import Head from "../Head/Head";

import { Container, ContainerList, Img, ListItem, Titulo } from "./StyledHome";
import { Link } from "react-router-dom";

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
      <Head title="Ranek" description="Página Inicial" />
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
