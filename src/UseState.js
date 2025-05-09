import React from 'react';

function UseState() {
    const [error, setError] = React.useState(false);

    return (
        <div>
            <h2>Eliminar UseState</h2>
            <p>Por favor escribe el codigo de seguridad</p>
            {error && <p>Error: El codigo es incorrecto</p>}
            <input type="password" placeholder="Codigo de seguridad" />
            <button onClick={() => setError(!error)}>Comprobar</button>
        </div>
    );
}

export default UseState;
