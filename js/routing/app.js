/**
 * Created by dp-ptcstd-34 on 10/3/2016.
 */

import { Router, Route, Link, hashHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    render(){
        return (
            <div>
                <h1>Our awesome app</h1>
                <ul role="nav">
                    <li><Link activeClassName="class" activeStyle={{color: 'red'}} to="/grid">Grid</Link></li>
                    <li><Link to="/details">Details</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            {/*
            Другие роуты

            <Route path="grid" component={GridComponent}/>
            <Route path="details" component={UserDetail}/>
            */}
        </Route>
    </Router>,
    document.getElementById('app')
);
