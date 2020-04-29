/*jshint ignore: start*/
import React, { useState } from "react";
import Form from Form.js;



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Jimmy',
            email: 'jimmy@gmail.com',
            role: 'Frontend Engineer',
        }
    }

    render() {
        return (
            <div className="App">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <textarea className="form-control" rows="5" value={this.state.role} onChange={this.onRoleChange.bind(this)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onRoleChange(event) {
        this.setState({ message: event.target.value })
    }

    handleSubmit(event) {
    }
}

export default App;


