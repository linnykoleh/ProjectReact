/**
 * Created by dp-ptcstd-34 on 9/29/2016.
 */

ReactDOM.render(
    React.createElement('h1', null, 'Hello, world!'),  /* что рендерить */
    document.getElementById('app')                     /* куда рендерить */
);

var app = React.createElement('div', {},
    React.createElement('h1', {}, "Hi, I'm header inside div"),
    React.createElement('ul', {},
        React.createElement('li', {},
            React.createElement('h2', {}, "Hi, I'm list item inside list inside div")
        ),
        React.createElement('li', {},
            React.createElement('h2', {}, "Hi, I'm list item inside list inside div")
        )
    )
);

ReactDOM.render(app, document.getElementById('app'));

var app2 = React.createElement("div", {},
    React.createElement("h1", {}, "I'm page header"),
    React.createElement("div", {},
        React.createElement("p", {}, "I'm staying at the .."),
        React.createElement("div", {},
            React.createElement("span", {}, "I'm user logo  .."),
            React.createElement("span", {}, "I'm user name..")
        ),
        React.createElement("h1", {}, "I'm next section ..."),
        React.createElement("section", {},
            React.createElement("article", {}, "I'm awesome  ..."),
            React.createElement("ul", {},
                React.createElement("li", {}, "I'm article  ..."),
                React.createElement("li", {}, "I'm article item with ...",
                    React.createElement("b", {}, "bold element"))
            )
        )
    )
);

ReactDOM.render(app2, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';

var JsxApp = React.createClass({

    render: function(){
        return (
            <div>
                <div>Hi, I'm div</div>
                <h1>Hi, I'm header inside div</h1>
                <ul>
                    <li>Hi, I'm list item inside list inside div</li>
                    <li>Hi, I'm list item inside list inside div</li>
                </ul>
            </div>
        )
    }

});

ReactDOM.render(
    <JsxApp></JsxApp>,
    document.getElementById('app')
);

