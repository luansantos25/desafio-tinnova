import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default class Atv1 extends Component {
  constructor(props) {
    super(props);
    this.state = {fatorial: 0, value: ""};
  }

  getFatorial = () => {
    axios.get(`http://localhost:3333/fatorial?number=${this.state.value}`)
    .then((res) => {
      console.log(res.data);
      this.setState({...this.state, fatorial: res.data.fatorial});
    });
  }

  handleChange = (e) => {
    this.setState({...this.state, value: e.target.value});
  }

  render() {
    return (
      <div>
        <h1>Fatorial</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Número</Form.Label>
            <Form.Control type="number" placeholder="Digite um número para encontrar o valor fatorial" 
            value={this.state.value} onChange={this.handleChange}/>
          </Form.Group>

          <h2>{this.state.fatorial}</h2>

          <Button variant="primary" type="button" onClick={this.getFatorial}>
            Consultar
          </Button>
        </Form>
      </div>    
    )
  }
}