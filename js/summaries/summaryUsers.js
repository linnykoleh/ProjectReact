/**
 * Created by dp-ptcstd-34 on 10/3/2016.
 */

import React from 'react';

export default class SummaryUsers extends React.Component {

    render(){
        return (
            <div>Users Count: {this.props.records.length}</div>
        )
    }
}
