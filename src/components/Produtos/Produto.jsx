import React from "react";
import { useParams } from "react-router-dom";

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
    <div>
      {produto.fotos.map((img) => (
        <img key={img.titulo} src={img.src} />
      ))}
      <h2>{produto.nome}</h2>
      <p>{produto.preco}</p>
    </div>
  );
};

export default Produto;
