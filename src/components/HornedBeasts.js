import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    }

  }

  increaseVotes = () => {
    this.setState({
      votes: this.state.votes + 1
    })

  }

  render() {
    return (
      <div className = "beast" style ={{display: 'inline-block'}}>
        {/* <h2>{this.props.title}</h2>
        <img src={this.props.imgURL} alt={this.props.title}></img>
        <p>{this.props.description}</p>
        <button onClick={this.increaseVotes}>Vote</button>
        <p>❤️{this.state.votes}</p> */}

        <Card style={{ width: '18rem'}}>
          <Card.Img variant="top" src={this.props.imgURL} style={{ height: '18rem'}}/>
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


export default HornedBeasts;

///// haneen