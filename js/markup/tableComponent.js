/**
 * Created by dp-ptcstd-34 on 9/30/2016.
 */

require("bootstrap/dist/css/bootstrap.css");

import React from 'react';
import CheckButtonComponent from './checkButtonComponent';
import RadioButtonComponent from './radioButtonComponent';

export default class TableComponent extends React.Component{

    render(){
        return (
            <table className="table table-condensed">
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th colSpan="2">Active</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3 <CheckButtonComponent/>
                    </td>
                </tr>
                <tr>
                    <td>Cell 4</td>
                    <td>Cell 5</td>
                    <td>Cell 6  <CheckButtonComponent/></td>
                </tr>
                <tr>
                    <td>Cell 7</td>
                    <td>Cell 8</td>
                    <td>Cell 9 <RadioButtonComponent/></td>
                </tr>
                <tr>
                    <td>Cell 10</td>
                    <td>Cell 11</td>
                    <td>Cell 12 <RadioButtonComponent/></td>
                </tr>
                </tbody>
            </table>
        )
    }
}