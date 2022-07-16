import React, { useEffect, useState } from 'react';

function UseEffectCustom(){
  const [count, setCount] = useState(0);

  const general = {
    fontSize: "14px",
    fontWight: "inherit",
    margin: "20px auto",
    maxWidth: "600px",
  };


  //similar ao componentDidMount and componentDidUpdate
  useEffect(()=>{
    //atualiza titulo da página
    document.title = `você clicou ${count} vezes`
  });

  return(
      <div>
        <p>você clickou {count} vezes</p>

        <button onClick={()=> setCount(count + 1)}>
          clique aqui
        </button>

        <p style={general}>Esse trecho de código é baseado no exemplo de contador da página anterior, mas nós adicionamos uma nova funcionalidade a ele</p>
        <p style={general}>Buscar dados, configurar uma subscription, e mudar o DOM manualmente dentro dos componentes React são exemplos de efeitos colaterais.</p>
        <a href="https://pt-br.reactjs.org/docs/hooks-effect.html" target="blank">Link</a>
      </div>   
  )
}


export default UseEffectCustom;