import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import './Projects.css';

const baseurl = `https://api.github.com/users/`
const repos = `${baseurl}${process.env.REACT_APP_USERNAME}/repos`;

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(repos)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  createCard(item) {
    const licenseName = item.license != null ?  item.license.name: 'None';
    return (
      <Col key={item.id} md={3} py={2} style={{marginTop:'0.2rem', marginBottom:'0.2rem'}}>
      <Card className="h-100">
        <Card.Header>{item.name}</Card.Header>
        <Card.Body>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Button variant="primary" href={item.html_url} target="_blank">Go to project</Button>
        </Card.Body>
        <Card.Footer className="text-muted">License: {licenseName}</Card.Footer>
      </Card>
      </Col>
    )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="loading-box"><Spinner animation="grow" variant="dark" /></div>;
    } else {
      return (
        <Container fluid style={{marginTop : '1rem'}}>
        <Row>
        {items.map(item => (
            this.createCard(item)
          ))}
      </Row>
      </Container>
      );
    }
  }
}

export default Projects;