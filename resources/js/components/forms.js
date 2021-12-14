import React from 'react';
import ReactDOM from 'react-dom';

function Formularios() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Agenda de horas</div>

                        <div className="card-body">Agenda de horas</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('formulario')) {
    ReactDOM.render(<Example />, document.getElementById('formulario'));
}
