import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import ProjectContent, {projects} from './components/ProjectContent'
import './bootstrap.min.css'

const about = {
	id: '0',
	visibleDescription: 'about',
	title: 'About',
	email: 'msanmartinacosta@gmail.com',
	description: 'Photographer based in Buenos Aires, Argentina',
	longDescription: 'Born February 15, 1989. Working as a software developer',
	courses: JSON.parse('[{"school":"Santa Talleres","name":"Gracias por tanto, Photoshop","professors":"Julieta Pestarino","year":2019},{"school":"Santa Talleres","name":"Creadores de Imágenes","professors":"Julia Sbriller","year":"2019-act."},{"school":"Santa Talleres","name":"Colorimetría en Camera RAW","professors":"Ignacio Steinsleger","year":2019},{"school":"Santa Talleres","name":"Mirar, Editar, Contar","professors":"Iara Kremer","year":2019},{"school":"Santa Talleres","name":"Fotografía Analógica","professors":"Iara Kremer","year":2018},{"school":"","name":"Taller de desarrollo de proyecto","professors":"Leticia Sahagun","year":"2018-act."},{"school":"Motivarte","name":"Lenguajes Combinados","professors":"Leticia Sahagun","year":2018},{"school":"Motivarte","name":"Taller de Desarrollo Creativo y Autoral","professors":"Leticia Sahagun","year":2017},{"school":"Motivarte","name":"Iluminación","professors":"Anabella Reggiani & Martín Mercado","year":2017},{"school":"Motivarte","name":"Taller de Entrenamiento Visual","professors":"Laura Passoti & Sergio Otaño","year":2016},{"school":"Motivarte","name":"Curso Básico Integral","professors":"Sol Mendoza","year":2016}]'),
	mentions: JSON.parse('[{"year": "2017", "event": "Muestra Cursos TFP 1°C 2017","description": "Ganador de media beca por muestra final de Curso de Iluminación"}, {"year": "2017", "event": "Muestra Cursos TFP 2°C 2017","description": "Ganador de media beca por muestra final de Curso de Desarrollo Creativo y Autoral"}]')
}

export default class App extends Component {

	state = {
		projects: [],
		about: {}
	}

	componentDidMount() {
		this.setState({
			projects,
			about
		})
	}

	render() {
		return (
			<div className="container col-lg-12">
				<Header/>

				<div className="row">
					<Router className="row">
						<div className="list-group col-md-2"> {/* begin sidebar */}
							{this.state.projects.map(item => (
								<Link key={item.id} to={item.visibleDescription} className="list-group-item list-group-item-action border-0">{item.title}</Link>
							))}

							<Link key={about.id} to={about.visibleDescription} className="list-group-item list-group-item-action border-0">{about.title}</Link>
						</div> {/* end sidebar */}

						<div className="col-md-10"> {/* begin content */}
							{this.state.projects.map(item => (
								<Route
									key={item.id}
									path={`/${item.visibleDescription}`}
									exact
									render={(routeProps) => <ProjectContent {...routeProps} {...item} />}
								/>
							))}

							<Route
								key={about.id}
								path={`/${about.visibleDescription}`}
								exact
								render={() => <About about={about} />}
							/>

							<Footer/>
						</div> {/* content */}

					</Router>
				</div>
			</div>
		)
	}
}
