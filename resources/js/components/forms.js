import React from 'react';
import ReactDOM from 'react-dom';

//----------------------------
export default class FormulariosConsultora extends React.Component {
  constructor(props) {
    super(props);
    //Donde se almacenara el valor del Formulario
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this); //"Objetos" donde apuntaran eventos de los formularios
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>
                            <form onSubmit={this.handleSubmit}>
                              <label>
                              Name:
                              <input type="text" value={this.state.value} onChange={this.handleChange} />
                              </label>
                              <input type="submit" value="Submit" />
                            </form>
                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
     
    );
  }
}
ReactDOM.render(
  document.getElementById('root')
);