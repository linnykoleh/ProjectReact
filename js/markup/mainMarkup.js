/**
 * Created by dp-ptcstd-34 on 9/30/2016.
 */

import React from 'react';
import FilterComponent from './filterComponent';
import TableComponent from './tableComponent';

export default class MainMarkup extends React.Component{

    render(){
        return (
            <div>
                <FilterComponent/>
                <TableComponent/>
             </div>
        )
    }
}