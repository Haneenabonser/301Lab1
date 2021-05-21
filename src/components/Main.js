import React from 'react';
import HornedBeast from './HornedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';


class Main extends React.Component {

    render() {
        return (
            <>
                {this.props.data.map(item => {
                    return (
                        <HornedBeast
                            key= {item.idx}
                            index = {item.idx}
                            title={item.title}
                            image_url={item.image_url}
                            description={item.description}
                            showModal={this.props.showModal}
                        />

                    )
                })}
               
            </>
        )
    }
};

export default Main;