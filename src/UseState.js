import React from 'react';

function UseState() {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [password, setPassword] = React.useState('');

    const clearError = () => {
        setTimeout(() => {
            setError(false);
        }, 3000);
        if (loading) {
            setLoading(false);
        }
    };

    const handleLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLoading();
        
        if (password !== '123') {
            setError(true);
            clearError();
        } else {
            setError(false);
            // Simulate successful submission
            setTimeout(() => {
                setLoading(false);
                window.history.pushState({}, '', '/success');
            }, 3000);
        }
    }

    return (
        <div>
            <h2>Eliminar UseState</h2>
            <p>Por favor escribe el codigo de seguridad</p>
            {error && <p>Error: El codigo es incorrecto</p>}
            <form onSubmit={handleSubmit}>
                <input 
                    type="password" 
                    placeholder="Codigo de seguridad" 
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setError(false);
                    }}
                    autoComplete="current-password"
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Comprobando...' : 'Comprobar'}
                </button>
            </form>
            {loading && <p>Cargando...</p>}
        </div>
    );
}

export default UseState;
