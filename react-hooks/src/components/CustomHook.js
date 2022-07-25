import React from 'react';

function CustomHooks(){
    const general = {
        fontSize: "13px",
        fontWight: "inherit",
        margin: "20px auto",
        maxWidth: "600px",
        fontWeight: "100",
      };


    return(
        <div>
            <p style={general}>Quando queremos compartilhar lógica entre duas funções JavaScript, extraímos ela para uma terceira função. Ambos componentes e Hooks são funções, então isso funciona para eles também!</p>
            <p style={general}>Um Hook customizado é uma função JavaScript cujo nome começa com ”use” e que pode utilizar outros Hooks. Diferente de um componente React, um Hook customizado não precisa ter uma assinatura específica. Podemos decidir o que ele recebe como argumentos e o que ele retorna, caso necessário. Em outras palavras, é como uma função normal. Seu nome deve sempre começar com use para que você possa ver de forma fácil que as regras dos Hooks se aplicam a ele.</p>
        </div>
    )
}

export default CustomHooks;