/**
 * Created by dp-ptcstd-34 on 9/30/2016.
 */

import React from 'react';
import { hashHistory} from 'react-router';

export default class GridRecord extends React.Component {

    /**
    * e - ивент который получили от браузера
    * target - инпут для ввода текста
    * value - значение которое введено в этом инпуте
    * */
    handleLastNameChange(e){
        this.props.updateLastName(e.target.value);
    }

    showUserDetails(e){
        e.preventDefault();
        hashHistory.push(`/details/${this.props.record.id}`);
    }


    render(){
        let {record} = this.props;
        return <tr>
            <th onClick={this.showUserDetails.bind(this)}><a href="#">{record.id}</a></th>
            <th>{record.firstName}</th>
            <th><input type="text" value={record.lastName} onChange={this.handleLastNameChange.bind(this)}/></th>
            <th><input type="checkbox" checked={record.active} value={record.active} /></th>
        </tr>
    }
}

/*Дефалтовые значения пропертей если они undefined, если null то null*/
GridRecord.defaultProps = {
    record: {firstName: "N/A", lastName: "N/A", active: false}
};

/*Дефалтовые типы пропертей если они undefined*/
GridRecord.propTypes = {
    record: React.PropTypes.shape({
        firstName: React.PropTypes.string.isRequired,
        lastName: React.PropTypes.string.isRequired,
        active:React.PropTypes.bool.isRequired
    })
};
