import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
`;

const ContainerList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
`;

const Img = styled.img`
  display: block;
  max-width: 100%;
  object-fit: cover;
  width: 300px;
  border-radius: 10px;
`;

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
            <Link>
              <Img src={item.fotos[0].src} alt={item.fotos[0].titulo} />
              <h2>{item.nome}</h2>
            </Link>
          </ListItem>
        </ContainerList>
      ))}
    </Container>
  );
};

export default Home;
