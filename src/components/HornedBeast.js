import React from 'react';


class HornedBeast extends React.Component{
    render(){
        return(
            <>
            <h2>{this.props.title}</h2>
            <img src={this.props.imgURL} alt={this.props.title} title={this.props.title}></img>
            <p>{this.props.descreption}</p>   
            </>
        )
    }
}

export default HornedBeast;