// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

class ClassState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
        };
    }
    render() {
        return (
            <div>
                <h2>Eliminar ClassState</h2>
                <p>Por favor escribe el codigo de seguridad</p>
                {this.state.error && <p>Error: El codigo es incorrecto</p>}
                <input type="password" placeholder="Codigo de seguridad" />

                <button onClick={() => this.setState({ error: !this.state.error })}>Comprobar</button>
            </div>
        );
    }
}

export default ClassState;