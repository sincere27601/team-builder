import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


class App extends useState {
    state = {
        listitems: [
            {
                id: 0,
                Name: "James",
                Location: "Florida" 
            },
            {
                id: 1,
                Name: "Robert",
                Location: "New York"
            },
            {
                id: 2,
                Name: "Edgar",
                Location: "Chicago"
            },
            {
                id: 3,
                Name: "Susan",
                Location: "Atlanta"
            },
            {
                id: 4,
                Name: "Mark",
                Location: "Seattle"
            }
        ]
    };

    render() {
        return (
                <ul className="App">
                    {this.state.listitems.map(listitem => (
                        <li key={listitem.id} className={listitem.modifier}>
                            {listitem.context}
                        </li>
                    ))}
                </ul>
            
        );
    }
}

export default Item;



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
