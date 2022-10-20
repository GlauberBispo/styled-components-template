import styled from "styled-components"

export const BotaoGaragem = styled.button `


background-color: green;
padding: 10px;
border: 2px solid black;
border-radius: 10%;

`

export const ContainerGaragem = styled.main `
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


`

export const Estacionamento = styled.section `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    background-color: grey;

`