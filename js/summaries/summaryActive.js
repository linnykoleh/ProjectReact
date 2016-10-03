/**
 * Created by dp-ptcstd-34 on 10/3/2016.
 */

import React from 'react';

export default class SummaryActive extends React.Component {

    render(){
        return (
            <div>Active Users: {this.props.records.filter((record)=>record.active).length}</div>
        )
    }
}
