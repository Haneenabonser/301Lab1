import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';
import SelectedBeast from './SelectedBeast'


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: data,
            show: false
        }
    }


    // showModel = () => {
    showModal = (active) => {
        this.setState({
            show: active
        })

    }



    //  Example() {
    //     const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    render() {


        return (
            <>
                <h1>Gallery of Hornes</h1>

                {data.map(item => {
                    return (
                        <HornedBeasts
                            title={item.title}
                            imgURL={item.image_url}
                            description={item.description}
                        />
                    )
                })
                }
                {

                    <SelectedBeast
                        beastArr={this.state.horndBeastData}
                        // showModel={this.showModel}
                        handleClose={this.handleClose}
                        handleShow={this.handleShow}
                        show={this.state.show}

                    />
                }
            </>

        )
    }
};


export default Main;