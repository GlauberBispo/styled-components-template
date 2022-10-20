import React from "react";
import { ContainerCarro, ListaCarro, Ul } from "./Styled";

export function Carro(props) {
  return (
    <ContainerCarro>
      <ListaCarro>
        <h2>Meu carro</h2>
        <Ul>
          <li>Cor: {props.cor}</li>
          <li>Ano: {props.ano}</li>
          <li>Flex: {props.flex ? "true" : "false"}</li>
          <li>Adicionado: {props.adicionadoPor}</li>
        </Ul>
      </ListaCarro>
    </ContainerCarro>
  );
}
