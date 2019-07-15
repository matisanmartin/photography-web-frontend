import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="fixed-bottom text-center"><p><small>Todos los derechos reservados - </small>{new Date().getFullYear()}</p></div>
        )
    }
}
