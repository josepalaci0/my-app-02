import React,{ useState } from "react";
import frases from './frases.json';
import Frase from './Frase';
import '../App.css';

const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F96800"
];

function Frases() {
    const [frase, setFrase] = useState(frases[getNumber(frases.length)]);
    const background = colors[getNumber(colors.length)];

    const handleUser = () => {
        const index = getNumber(frases.length);
        setFrase(frases[index]);
    };
    document.body.style = `background: ${background}`;

    return (
        <div className='app'>
            <Frase
                quote={frase.quote}
                author={frase.author}
                changeUser={handleUser}
                background={background}
            />
        </div>
    )
}
const getNumber = (max) => Math.floor(Math.random() * max);

export default Frases
