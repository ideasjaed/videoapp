import React from 'react';
import '../../assets/styles/App.scss';

const HolaMundo = () => {
    const Hello = 'Hola mundoi !!';
    const isTrue = true;
    return (
        <div className="holamundo">
            <h1>{Hello}</h1>
            <h2>Curso de react</h2>
            {isTrue ? <h4>Esto es verdad</h4> : <h5>Esto no es verdad</h5>}

        </div>
    );
}

export default HolaMundo;