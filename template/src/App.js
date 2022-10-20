import { Garagem } from "./componentes/Garagem/Garagem.js";
import GlobalStyle from "./GlobalStyled/GlobalStyle.js";

export default function App() {
  const nome = "Labenu";

  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <>
    <GlobalStyle />
    <div className="App">
      <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
    </div>
    </>
  );
}