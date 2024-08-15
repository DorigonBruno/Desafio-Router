import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ContainerList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin-top: 10px;
  animation: ease animaLeft 0.5s;

  @keyframes animaLeft {
    from {
      transform: translate(-300px);
    }
    to {
      transform: initial;
    }
  }
`;

export const ListItem = styled.li`
  font-size: 1.2rem;
`;

export const Img = styled.img`
  display: block;
  max-width: 100%;
  object-fit: cover;
  width: 300px;
  border-radius: 10px;
  transition: ease 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Titulo = styled.h2`
  font-size: 1.4rem;
  text-decoration: none;
  color: #000;
  font-family: sans-serif;
`;