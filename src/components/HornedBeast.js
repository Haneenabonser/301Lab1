import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      votes: 0,    
    }

  };

  increaseVotes = () => {
    this.setState({
      votes: this.state.votes + 1
    })

  };

  showing = () => {
    this.props.showModal(this.props.title);
  };

  render() {
    return (
      <div className = "beast" style ={{display: 'inline-block'}}>

        <Card style={{ width: '18rem'}}>
          <Card.Img onClick = {this.showing} variant="top" src={this.props.image_url} style={{ height: '18rem'}}/>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Button variant="primary" onClick={this.increaseVotes} >Vote</Button>
            <Card.Text>
              ❤️{this.state.votes}
            </Card.Text>
          </Card.Body>
        </Card>
        

      </div>

    )
  }
};


export default HornedBeast;

