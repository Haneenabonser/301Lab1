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
            selected: {},
        };
    };


    showModal = (title) =>{
        let selectedBeast = data.find(item=>{
            if (item.title == title){
                return item;
            }
        }

        )
        this.setState({
            show : true,
            selected : selectedBeast,
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
                    show={this.state.show}
                    handleClose={this.handleClose}
                    selected ={this.state.selected}
                />
            </>
        )
    }
};


export default App;

