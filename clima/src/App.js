import React, { Fragment, useState, Component } from 'react';
import Nav from './components/Nav';
import Busqueda from './components/Busqueda';
import Divclima from './components/Divclima';


class App extends React.Component {

  state = { clima: [] }

  async componentDidMount(results) {

    const clima = await fetch('http://localhost:5000/clima', { method: 'GET' }).then(result => result.json());
    this.setState({ clima })
    console.log(clima);
  }





  render() {


    return (
      <Fragment>

        <Nav />
        <Busqueda />
        <Divclima clima={this.state.clima} />




      </Fragment >


    );
  }
}

export default App;
