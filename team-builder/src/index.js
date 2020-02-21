import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';




class Item extends useState {
    state = {
        teammembers: ['member 1', 'member  2', 'member 3']
    };


    render() {
        return (
            <React.Fragment>
                <ul className="member-group">
                    {this.state.teammembers.map(member => (
                        <li className="member-group-item member-group-item-primary">
                            {member}
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}
  


export default Item;



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
