//import React from 'react'
import React, { Component } from 'react'

export const projects = [{
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
}, {
    id: 4,
    visibleDescription: '80',
    title: '80%'
}, {
    id: 5,
    visibleDescription: 'la-caja',
    title: 'La caja'
}]

class ProjectContent extends Component {
    constructor(props) {
        super(props)
        this.state = {project: {}}
    }

    componentDidMount() {
        const {id, title} = this.props
        console.log(`Getting project with id ${id}`)
        this.setState({
            id,
            title
        })
    }

    render() {
        return (
            <h3>
                {this.state.title}
            </h3>
        )
    }
}
export default ProjectContent
