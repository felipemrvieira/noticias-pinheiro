import React, { Component } from 'react';
import axios from 'axios'

import './Noticias.scss';
import Noticia from './Noticia';

const URL = 'http://testephp.itec.al.gov.br/api/v1/noticias'


class Noticias extends Component {
  constructor(props) {
    super(props)
    this.state = { list: [] }
    this.refresh()
  }

  refresh() {
    axios.get(`${URL}`)
      .then(resp => {
        this.setState({ ...this.state, list: resp.data })
      })
      .catch( err => console.log(err) )
  }

  render() {
    return (
      <div className="card" id="card-noticias">
        <div className="card-header">
          <h3 className="titulo-modulo">Notícias</h3>
        </div>
        <div className="card-body">
          <div className="noticias-container">

            <Noticia list={this.state.list} />

          </div>
        </div>
        <div className="card-footer text-muted">

          <a href="http://www.maceio.al.gov.br/" target="_blank" rel="noopener noreferrer">Confira aqui as notícias da
                prefeitura</a>
          <br />
          <a href="http://www.cprm.gov.br/publique/Gestao-Territorial/Prevencao-de-Desastres-Naturais/Acao-Emergencial-no-Bairro-Pinheiro-%28Maceio%2C-AL%29-5344.html"
            target="_blank" rel="noopener noreferrer">Confira aqui as notícias da CPRM</a>

        </div>
      </div>
    );
  }
}

export default Noticias;
