//import React from 'react'
import React, { Component } from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"

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

export const itemsTest = [{
    src: 'https://picsum.photos/id/599/200/200'
}, {
    src: 'https://picsum.photos/id/476/200/200'
}, {
    src: 'https://picsum.photos/id/476/200/200'
}, {
    src: 'https://picsum.photos/id/476/200/200'
}, {
    src: 'https://picsum.photos/id/476/200/200'
}, {
    src: 'https://picsum.photos/id/476/200/200'
}, {
    src: 'https://picsum.photos/id/476/200/200'
}, {
    src: 'https://picsum.photos/id/476/200/200'
}, {
    src: 'https://picsum.photos/id/476/200/200'
}]

const responsive = {
    0: {
        items: 1
    },
    1024: {
        items: 6
    }
}

export const projectsExpanded = [{
    id: 1,
    visibleDescription: 'enlaces',
    title: 'Enlaces',
    description: 'Fotolibro realizado para el curso de Desarrollo Creativo y Autoral de Motivarte, con la coordinación de Leticia Sahagun. Enlaces es un diccionario fotográfico.'
}, {
    id: 2,
    visibleDescription: 'historias-anonimas',
    title: 'Historias anónimas',
    description: 'Proyecto realizado durante la muestra de Cursos TFP en el marco del fin de curso de Lenguajes Combinados de Motivarte. Una máquina de escribir y fotos fueron puestos a disposición de quienes asisitieron, para poder libremente expresar lo que piensen de la/las fotos de la forma que quisieran.'
}, {
    id: 3,
    visibleDescription: 'roque-perez',
    title: 'Roque Perez',
    description: 'Fanzine de proceso creado durante el taller de desarrollo de proyecto.'
}, {
    id: 4,
    visibleDescription: '80',
    title: '80%',
    description: 'Basado en el hallazgo de una serie de retratos del estilo de foto-carnet en el album familiar'
}, {
    id: 5,
    visibleDescription: 'la-caja',
    title: 'La caja',
    description: 'Una caja escondida en un lavadero, una necesidad y una serie de impedimentos que moldearon y dieron forma a un homenaje al pasado de mi familia.'
}]

class ProjectContent extends Component {
    constructor(props) {
        super(props)
        this.state = {project: {}, itemsTest: itemsTest}
    }

    componentDidMount() {
        const {id} = this.props
        console.log(`Getting project with id ${id}`)
        
        const {title, description} = projectsExpanded.find( project => (project.id === id))

        this.setState({
            id,
            title,
            description
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
                <p className="lead"><small>{this.state.description}</small></p>
                <div class="col-md-12">
                    <AliceCarousel
                        responsive={responsive}
                        dotsDisabled={true}>
                        {this.state.itemsTest.map(item => (
                            <img src={item.src} />
                        ))}
                    </AliceCarousel>
                </div>
            </div>
        )
    }
}
export default ProjectContent
