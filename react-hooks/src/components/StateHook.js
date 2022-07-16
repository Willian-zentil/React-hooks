import React, { useState } from 'react';

function UseStatetCustom(){
    //declarar uma variavel de state
    const [count, setCount] = useState(0); 
    const [status, setStatus] = useState('nao');

    function Pagamento(props){
      const pago = {
        backgroundColor: "green",
        padding: "5px",
        width: "10px",
        height: "10px",
        borderRadius: "20px",
        margin: "25px auto 5px"
      };

      const nopago = {
        backgroundColor: "red",
        padding: "5px",
        width: "10px",
        height: "10px",
        borderRadius: "20px",
        margin: "25px auto 5px"
      };

      if(props.status === 'nao'){
        return <div style={nopago}></div>
      }else {
        return <div style={pago}></div>
      }
    }

    return(
        <div>
            <fieldset>
              <legend>Willian Zentil - agendamento corte de cabelo</legend>

              <div>
                <input type="radio" id="naoPago" value="naoPago" name="pagamento" onClick={()=> setStatus('nao')}/>
                <label for="naoPago">Pagamento nao consta</label>
              </div>

              <div>
                <input type="radio" id="pago" value="pago" name="pagamento" onClick={()=> setStatus('sim')} />
                <label for="pago">Pagamento realizado</label>
              </div>

              <Pagamento status={status}/>
          </fieldset>


            <p>você clickou {count} vezes</p>
            <button onClick={()=> setCount(count + 1)}>Clicke aqui</button>
        </div>   
    )
}


export default UseStatetCustom;


/*abaixo um exemplo equivalente desse código porem com class 

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>Você clicou {this.state.count} vezes</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clique aqui
        </button>
      </div>
    );
  }
}

*/