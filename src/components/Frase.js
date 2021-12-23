import React from 'react'

const Frase = ({
                   quote,
                   author,
                   changeUser,
                   background
              }) => {
    return (
        <div className="frase">
           <div>
            <p style={{ color: background }}>{quote} </p>
            <h3 style={{ color: background }}>{ author}</h3>
           </div>
            <div>
                <button style={{ color: background }} onClick={changeUser}>
                    <i className="fas fa-chevron-circle-right"></i>
                </button>
            </div>
        </div>






    );
};



export default Frase