import React from 'react';
import { Card, Button, Spinner, Col, Row, Container } from 'react-bootstrap'
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
    const licenseName = item.license != null ? item.license.name : 'None';
    return (
      <Col key={item.id} md={3} py={2} style={{ marginTop: '0.2rem', marginBottom: '0.2rem' }}>
        <Card className="h-100 project-card" bg="dark">
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
      return <div>Error: Unable to fetch details from github APIs {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="loading-box dark"><Spinner animation="grow" variant="primary" /></div>;
    } else {
      return (
        <Container fluid className="project-container" >
          <Row className="projects-heading">
            <Col sm={12}><h1>My Github Projects</h1></Col>
          </Row>
          <Row className="projects-box dark">
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