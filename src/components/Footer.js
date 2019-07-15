import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                Todos los derechos reservados - {new Date().getFullYear()}
            </div>
        )
    }
}
