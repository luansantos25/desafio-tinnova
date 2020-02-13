import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import axios from 'axios';

export default class Atv1 extends Component {
  constructor(props) {
    super(props);
    this.state = {result: {}};
  }

  componentDidMount() {
    axios.get('http://localhost:3333/result')
    .then((res) => {
      console.log(res.data);
      this.setState({...this.state, result: res.data});
    });
  }

  render() {
    return (
      <div>
        <h1>Eleição</h1>
        <ListGroup className="my-4">
          <ListGroup.Item>Total de votos: {this.state.result.totalVoters} </ListGroup.Item>
          <ListGroup.Item>Votos em brancos: {this.state.result.whiteVotes} </ListGroup.Item>
          <ListGroup.Item>Votos nulos: {this.state.result.nullVotes} </ListGroup.Item>
        </ListGroup>  

        <ListGroup className="my-4">
          <ListGroup.Item>Porcentagem válida: {this.state.result.validPercent}% </ListGroup.Item>
          <ListGroup.Item>Porcentagem em votos brancos: {this.state.result.whitePercent}% </ListGroup.Item>
          <ListGroup.Item>Porcentagem em votos nulos: {this.state.result.nullPercent}% </ListGroup.Item>
        </ListGroup>         
      </div>    
    )
  }
}