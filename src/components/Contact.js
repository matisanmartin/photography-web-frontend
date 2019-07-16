import React, { Component } from 'react'
import uuid from 'uuid'

const initState = {
    contact: {
        email: '',
        message: ''
    },
    error: false
}

export default class Contact extends Component {
    
    state = {
        ...initState
    }

    handleChange = e => {
        console.log(`${e.target.name}: ${e.target.value}`)
        this.setState({
            contact: {
                ...this.state.contact,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        
        const {email, message} = this.state.contact

        if(email === '' || message === '') {
            this.setState({
                error: true
            })

            return
        }

        const newMessage = {...this.state.contact}
        newMessage.id = uuid()

        console.log(newMessage)

        this.setState({
            ...initState
        })
    }

    render() {
        return (
            <div>
                <form 
                    onSubmit={this.handleSubmit}
                >
                        <h3>Contact</h3>
                        <div className="form-group row col-md-3">
                            <input 
                                type="email"
                                name="email" 
                                className="form-control" 
                                placeholder="Email"
                                value={this.state.contact.email}
                                onChange = {this.handleChange}
                            />
                        </div>  

                        <div className="form-group row col-md-5">
                            <textarea 
                                className="form-control"
                                name="message"
                                rows="6"
                                placeholder="Message"
                                value={this.state.contact.message}
                                onChange = {this.handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Enviar</button>
                </form>
            </div>
        )
    }
}