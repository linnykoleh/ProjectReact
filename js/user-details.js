/**
 * Created by dp-ptcstd-34 on 10/3/2016.
 */

import React from 'react';

const detailsRecords = [{
    id:1,
    name:"John C",
    about:"Nice guy",
    hobby:"Likes drinking wine",
    skills:["html", "javascript", "redux"]
},{
    id:2,
    name:"Mary Moe",
    about:"Cute girl",
    hobby:"Likes playing xbox whole days long",
    skills:["Fortran", "Lua", "R#"]
},{
    id:3,
    name:"Peter Veea",
    about:"Cute boy",
    hobby:"Likes playing xbox whole days long",
    skills:["javascript", "Fortran", "R#11"]
}];


export default class UserDetailsComponent extends React.Component {

    constructor(){
        super();
        this.state = {
            details: []
        }
    }

    componentDidMount(){
        let {id} = this.props.params;
        console.log(id);
        if(id){
            this.setState({
                details:detailsRecords.filter((record)=>{
                    return record.id != id;
                })
            })
        } else {
            this.setState(
                this.setState({
                    details:detailsRecords
                })
            )
        }
    }

    render(){
        return (
            <div className="container">
                <h1>THIS IS PARAM FROM GRIDCOMPONENT: {this.props.params.id}</h1>
                <div className="row">
                    <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                        <div className="well profile">
                            <div className="col-sm-12">
                                <div className="col-xs-12 col-sm-8">
                                    {this.state.details.map(detail => {
                                        return <div>
                                            <h2>{detail.name}</h2>
                                            <p><strong>About: </strong> {detail.about} </p>
                                            <p><strong>Hobbies: </strong> {detail.hobby} </p>
                                            <p><strong>Skills: </strong>
                                                {detail.skills.map(skill => <span className="tags">{skill}</span>)}
                                            </p>
                                        </div>
                                    })}
                                </div>
                                <div className="col-xs-12 col-sm-4 text-center">
                                    <figure>
                                        <img
                                            src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-2.jpg"
                                            alt="" className="img-circle img-responsive"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}
