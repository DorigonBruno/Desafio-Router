import React from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  ContainerImg,
  Imagem,
  ContainerConteudo,
  ConteudoTitulo,
  ConteudoButton,
  ConteudoDescricao,
} from "./StyledProdutos";

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function getFecth(url) {
      const response = await fetch(url);
      const json = await response.json();

      return setProduto(json);
    }

    getFecth(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (produto === null) return null;
  return (
    <Container>
      <ContainerImg>
        {produto.fotos.map((img) => (
          <Imagem key={img.titulo} src={img.src} />
        ))}
      </ContainerImg>
      <ContainerConteudo>
        <ConteudoTitulo>{produto.nome}</ConteudoTitulo>
        <ConteudoButton>R$ {produto.preco}</ConteudoButton>
        <ConteudoDescricao>{produto.descricao}</ConteudoDescricao>
      </ContainerConteudo>
    </Container>
  );
};

export default Produto;
