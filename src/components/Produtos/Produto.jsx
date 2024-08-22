import React from "react";
import Head from "../Head/Head";

import { useParams } from "react-router-dom";
import {
  Container,
  ContainerImg,
  Imagem,
  ContainerConteudo,
  ConteudoTitulo,
  ConteudoButton,
  ConteudoDescricao,
  Loading,
} from "./StyledProdutos";

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const { id } = useParams();

  React.useEffect(() => {
    async function getFecth(url) {
      setLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        console.log(erro);
      } finally {
        setLoading(false);
      }
    }

    getFecth(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading)
    return (
      <Container>
        <Loading></Loading>
      </Container>
    );
  if (produto === null) return null;
  return (
    <Container>
      <Head title={`Ranek | ${produto.nome}`} />
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
