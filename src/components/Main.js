import React from 'react';
import HornedBeast from './HornedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import data from './data.json'




class Main extends React.Component {


    submitForm = (event) =>{
        let numberOfHorns = event.target.value;
        let hornsData = data;
        let result;
        if(numberOfHorns){
            result = hornsData.filter(item=>{
            if (item.horns === numberOfHorns){
                return item;

            }
        })

    }else{
        result = hornsData;
    }
    this.props.showFilterd(result);
}






    render() {
        return (
            <>

                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Filter By number Of Hornes</Form.Label>
                        <Form.Control as="select" onChange ={this.submitForm}> 
                        <option value=''>All</option>
                        <option value='1'>One</option>
                        <option value='2'>Two</option>
                        <option value='3'>Three</option>
                        <option value='100'>Wow</option>
                        </Form.Control>
            
                    </Form.Group>
                </Form>

                {this.props.data.map(item => {
                    return (
                        <HornedBeast
                            key= {item.idx}
                            index = {item.idx}
                            title={item.title}
                            imgURL={item.image_url}
                            description={item.description}
                            showModal={this.props.showModal}
                        />

                    )
                })}
               
            </>
        )
    }
}

export default Main;