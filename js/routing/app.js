/**
 * Created by dp-ptcstd-34 on 10/3/2016.
 */

import { Router, Route, Link, hashHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import GridComponent from './../grid/gridComponentNew';
import UserDetailsComponent from './../user-details';

class App extends React.Component {

    render(){
        return (
            <div>
                <h1>Our awesome app</h1>
                <ul role="nav">
                    <li><Link activeClassName="class" activeStyle={{color: 'red'}} to="/grid">Grid</Link></li>
                    <li><Link to="/details">Details</Link></li>
                </ul>
                {this.props.children} {/*GridComponent или UserDetail*/}
            </div>
        )
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="grid" component={GridComponent}/>
            <Route path="details" component={UserDetailsComponent}>
                <Route path="/details/:id" component={UserDetailsComponent}/> {/*:id - попадет в UserDetailsComponent.this.props.params.id*/}
            </Route>
        </Route>
    </Router>,
    document.getElementById('app')
);
