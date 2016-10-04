import React from 'react';
import {hashHistory} from 'react-router'

import {filterGrid, toggleActive, loadDataInGrid} from '../Actions'

import { connect } from 'react-redux'

class GridRecord extends React.Component {
    showUserDetails(e){
        e.preventDefault();
        hashHistory.push(`/details/${this.props.record.id}`);
    }

    render(){
        let {record} = this.props;
        return <tr>
            <th onClick={this.showUserDetails.bind(this)}><a href="#">{record.id}</a></th>
            <th>{record.firstName}</th>
            <th>{record.lastName}</th>
            <th><input type="checkbox" checked={record.active} onChange={this.props.toggleActive}/></th>
        </tr>
    }
}

GridRecord.propTypes = {
    record: React.PropTypes.shape({
        firstName: React.PropTypes.string.isRequired,
        lastName: React.PropTypes.string.isRequired,
        active:React.PropTypes.bool.isRequired
    })
};

export default class GridComponent extends React.Component {

    constructor(){
        super();
        this.state = {
            records:[]
        }
    }

    componentDidMount(){
        this.refs.filterInput && this.refs.filterInput.focus();
        this.loadData();
    }

    loadData(){
        let {dispatch} = this.props;
        dispatch(loadDataInGrid());
    }

    updateLastName(index, newValue){
        let {records} = this.state;
        records[index].lastName = newValue;
        this.setState({
            records:records
        })
    }

    toggleActive(index){
        let {dispatch} = this.props;
        dispatch({
            type:"TOGGLE_ACTIVE",
            value:index
        });
    }

    handleFilterChange(e){
        let {dispatch} = this.props;
        dispatch(filterGrid(e.target.value));
    }

    render(){
        let recordsToShow = this.props.records.filter((record)=>{
            return this.props.filtered.indexOf(record.id)==-1;
        });
        if(this.props.loading){
            return (
                <div style={{width:300, height: 300, padding: 20}}>Loading...</div>
            )
        }
        return (
            <div style={{width:300, height: 300, padding: 20}}>
                <p>
                    <input type="text" ref="filterInput" placeholder="Filter by..." onChange={this.handleFilterChange.bind(this)}/>
                </p>
                <table className="table table-condensed">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Active</th>
                    </tr>
                    </thead>
                    <tbody>
                    {recordsToShow.map((record, index)=>{
                        return <GridRecord record={record} key={index} toggleActive={this.toggleActive.bind(this, index)}/>
                    })}
                    </tbody>
                </table>
                <div>{this.props.children &&
                React.cloneElement(this.props.children, { records: this.state.records })}</div>
            </div>
        )
    }
}

GridComponent.propTypes = {
    records: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        records: state.grid
    }
}

export default connect(
    mapStateToProps
)(GridComponent)

GridRecord.defaultProps = {
    record: {firstName: "N/A", lastName: "N/A", active: false}
};
