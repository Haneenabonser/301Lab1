import React from 'react';
import HornedBeast from './HornedBeast';



class Main extends React.Component{
    render(){
        return(
            <>

            {this.props.data.map(item=>{
                return (
                    <HornedBeast
                title = {item.title}
                imgURL = {item.image_url}
                description = {item.description}
                showModal = {this.props.showModal}
                />
                )
            })}

            </>
        )
    }
}

export default Main;