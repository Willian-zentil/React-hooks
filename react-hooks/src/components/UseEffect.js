import React, { useEffect, useState } from 'react';
import printInterval from '../assets/setinterval.png'
import printIntervalDois from '../assets/setInterval-2.png'

function UseEffectCustom(){
  const [count, setCount] = useState(0);

  const general = {
    fontSize: "13px",
    fontWight: "inherit",
    margin: "20px auto",
    maxWidth: "600px",
    fontWeight: "100",
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

        <p style={general}>O useEffect executa após cada renderização, e este diz ao React que o componente precisa fazer algo apenas depois da renderização, ele é uma combinação do componentDidMount, componentDidUpdate e componentWillUnmount.</p>

        <h3>Efeito com limpeza / sem limpeza (ciclo de vida  )</h3>
        <p style={general}>seguindo ordem de ciclo de vida será executado:</p>
        <p style={general}>useState(initialState) > corpo component(Render) > useEffect(Rerender)</p>
        <p style={general}>*exemplo de situção que precisa de limpeza, setInterval ou subscription, caso eu acione o useEffect varias vezes ele criaria um setInterval cada vez que eu clicasse, sem limpar o anterior</p>
        <img src={printInterval} alt="print"/>

        <p style={general}>esse tipo de função se torna problematica por adicionar uma serie de listeners, encavalados, para resolver isso utilizamos definimos ele como const e o return do hook para desmontar ele:</p>
        <img src={printIntervalDois} alt="print 2"/>

      </div>   
  )
}


export default UseEffectCustom;