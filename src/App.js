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
    }

    showModal = () => {
            // data.find(i)
        this.setState({
            show: true
        })
    };

    handleClose = () => {
        this.setState({
            show: false
        })
    };

    render() {
        return (
            <>
                <Header />
                <Main data={this.state.data} showModal={this.showModal} />
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
}

export default App;

