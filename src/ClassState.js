// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

class ClassState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            loading: false,
            password: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        
        // Simulate API call
        setTimeout(() => {
            if (this.state.password !== '123') {
                this.setState({ 
                    error: true,
                    loading: false 
                });
                // Clear error after 3 seconds
                setTimeout(() => {
                    this.setState({ error: false });
                }, 5000);
            } else {
                this.setState({ 
                    error: false,
                    loading: false 
                });
                window.history.pushState({}, '', '/success');
            }
        }, 2000);
    }

    render() {
        return (
            <div>
                <h2>Eliminar ClassState</h2>
                <p>Por favor escribe el codigo de seguridad</p>
                {this.state.error && <p>Error: El codigo es incorrecto</p>}
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="password" 
                        placeholder="Codigo de seguridad" 
                        value={this.state.password}
                        onChange={(e) => {
                            this.setState({ 
                                password: e.target.value,
                                error: false 
                            });
                        }}
                        autoComplete="current-password"
                        required
                    />
                    <button type="submit" disabled={this.state.loading}>
                        {this.state.loading ? 'Comprobando...' : 'Comprobar'}
                    </button>
                </form>
                {this.state.loading && <p>Cargando...</p>}
            </div>
        );
    }
}

export default ClassState;