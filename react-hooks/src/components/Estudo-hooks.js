import './Estudo-hooks.css';
import UseStatetCustom from'./StateHook';
import UseEffectCustom from'./UseEffect';

function EstHooks() {

  const general = {
    fontSize: "14px",
    fontWight: "inherit",
    margin: "20px auto",
    maxWidth: "600px",
  };

  const title = {
    margin: "40px 0 15px",
    position: "relative",
    backgroundColor: "#282c34",
    padding: "0 5px",
  };

  const divider = {
    borderBottom: "1px solid white",
    width: "100%",
    position: "relative",
    bottom: "-60px"
  };


  return (
    <div className="est">
        <p>Código para estudo de react hooks</p>

        <div style={divider}></div>
        <h3 style={title}>State Hooks</h3>
        <UseStatetCustom />
        <p style={general}>o hook useState é chamado dentro de um componente funcional para adicionar alguns states locais, React irá preservar este state entre re-renderizações useState retorna um par: o valor do state atual e uma função que permite atualizá-lo. É parecido com this.setState em uma classe, exceto que não mescla o antigo state com o novo</p>

        <div style={divider}></div>
        <h3 style={title}>Use effect</h3>
        <UseEffectCustom />
        <p style={general}>Você provavelmente já realizou obtenção de dados (data fetching), subscrições (subscriptions) ou mudanças manuais no DOM através de componentes React antes. Nós chamamos essas operações de “efeitos colaterais” (side effects ou apenas effects) porque eles podem afetar outros componentes e não podem ser feitos durante a renderização. O Hook de Efeito, `useEffect`, adiciona a funcionalidade de executar efeitos colaterais através de um componente funcional.</p>


        <div style={divider}></div>
        <h3 style={title}>Regras dos Hooks</h3>

        
        <div style={divider}></div>
        <h3 style={title}>Criando seu proprio Hook</h3>


    </div>
  );
}

export default EstHooks;