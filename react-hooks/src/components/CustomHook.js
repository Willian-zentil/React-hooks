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
            <p style={general}>*cc</p>
            <p style={general}><strong>Ubb</strong></p>
            <p style={general}>aa</p>
        </div>
    )
}

export default CustomHooks;