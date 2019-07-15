import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SidebarContainer from './components/SidebarContainer'
import './bootstrap.min.css'

export default class App extends Component {
  
  state = {
    projects: [],
    about: {}
  }

  componentDidMount() {
    const projects = [{
      id: 1,
      visibleDescription: 'enlaces',
      title: 'Enlaces'
    }, {
      id: 2,
      visibleDescription: 'historias-anonimas',
      title: 'Historias anónimas'
    }, {
      id: 3,
      visibleDescription: 'roque-perez',
      title: 'Roque Perez'
    },{
      id: 4,
      visibleDescription: '80',
      title: '80%' 
    },{
      id: 5,
      visibleDescription: 'la-caja',
      title: 'La caja'
    }]

    const about = {
      name: 'Matias San Martin Acosta',
      email: 'msanmartinacosta@gmail.com',
      description: 'Photographer based in Argentina',
      longDescription: 'Born February 15, 1989. Working as a software developer'
    }

    this.setState({
      projects,
      about
    })
  }
  
  render() {
    return (
      <div className="container col-md-12 col-lg-12">
        
        <Header className="row"/>
        
        <div className="row">
          <SidebarContainer className="col-sm-4 col-md-4 col-lg-4"
            items={this.state.projects}
          />
          <div className="col-sm-8 col-md-8 col-lg-8"></div>
        </div>
        
        <Footer className="row"/>

      </div>
    )
  }
}
