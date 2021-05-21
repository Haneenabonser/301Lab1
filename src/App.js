import React from 'react';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import data from './components/data.json'
import SelectedBeast from './components/SelectedBeast.js';




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            show: false,
        };
    };

    showModal = () => {
        this.setState({
            show: true
        })
    };

    handleClose = () => {
        this.setState({
            show: false
        })
    };

    showFilterd = (filterdBeast) =>{
        this.setState({
            data : filterdBeast
        })
    };
   

    render() {
        return (
            <>
                <Header />
                <Main data={this.state.data} showModal={this.showModal} showFilterd={this.showFilterd}/>
                <Footer />
                <SelectedBeast
                    title={this.title}
                    imgURL={this.image_url}
                    description={this.description}
                    show={this.state.show}
                    handleClose={this.handleClose}
                />
            </>
        )
    }
};

export default App;

