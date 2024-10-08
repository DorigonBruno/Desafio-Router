import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 930px;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: 10px;
  gap: 60px;
  animation: animaLeft 0.5s forwards;

  @keyframes animaLeft {
    from {
      transform: translate(-300px);
    }
    to {
      transform: initial;
    }
  }

  @media (max-width: 950px) {
    flex-direction: column-reverse;
    align-items: center;
    margin: 0 auto;
    gap: 20px;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Imagem = styled.img`
  display: block;
  flex-direction: column;
  max-width: 100%;
  object-fit: cover;
  width: 400px;
  border-radius: 10px;
`;

export const ContainerConteudo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ConteudoTitulo = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const ConteudoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border: none;
  background: #87f954;
  color: #317910;
  padding: 14px 20px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  width: 140px;
`;

export const ConteudoDescricao = styled.p`
  font-size: 1.4rem;
  max-width: 400px;
  margin-bottom: 10px;
  font-weight: 500;
`;

export const Loading = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 10px solid #ccc;
  border-right-color: transparent;
  animation: loadingFrame 1s infinite;

  @keyframes loadingFrame {
    to {
      transform: rotate(360deg);
    }
  }
`;
