import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json'


class Main extends React.Component {
    render() {


        return (
            <>
            <h1>Gallery of Hornes</h1>
            {data.map(item=>{
                return (
                    <HornedBeasts
                title = {item.title}
                imgURL = {item.image_url}
                description = {item.description}
                />
                )
            })}
            </>

        )
    }};


    export default Main;