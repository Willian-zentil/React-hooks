import React from 'react';

function regrasHooks(){
    const general = {
        fontSize: "13px",
        fontWight: "inherit",
        margin: "20px auto",
        maxWidth: "600px",
        fontWeight: "100",
      };


    return(
        <div>
            <p style={general}>*para seguir as regras intuitivamente é utilizado o plugin ESLint</p>
            <p style={general}><strong>Use Hooks Apenas no Nível Superior</strong></p>
            <p style={general}>Não use Hooks dentro de loops, regras condicionais ou funções aninhadas, É isso que permite que o React preserve corretamente o estado dos Hooks quando são usadas várias chamadas a useState e useEffect na mesma função.</p>
            <p style={general}><strong>Use Hooks Apenas Dentro de Funções do React</strong></p>
            <p style={general}>Não use Hooks dentro de funções JavaScript comuns. Em vez disso, você pode: Chamar Hooks em componentes React e Chamar Hooks dentro de Hooks Customizados</p>
        </div>
    )
}

export default regrasHooks;