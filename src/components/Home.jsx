import React from 'react';
import { Container, Col, Row, Spinner } from 'react-bootstrap';
import logo from '../logo.svg';
import About from './About';
import Profile from './Profile'
import './Home.css';

const baseurl = `https://api.github.com/users/`
const data = `${baseurl}${process.env.REACT_APP_USERNAME}`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item: {}
    };
  }

  componentDidMount() {
    fetch(data)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            item: result
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

  render() {
    if (this.state.isLoaded) {
      return (
          <Container id="Home" fluid className="home-container dark">
            <Row>
              <Col sm={3} className="profile-box">
                <Profile dataParentToChild={this.state.item} />
              </Col>
              <Col sm={9} className="data-box">
                <Row>
                  <Col sm={12}>
                    <About dataParentToChild={this.state.item} />
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    {/*Posts Here
                    
                    <header className="App-header">
                      <img src={logo} className="App-logo" alt="logo" />
                      <p>Edit <code>src/App.js</code> and save to reload.</p>
                      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React</a>
                    </header>
                    */
                    }
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
      );
    } else {
      return (
        <div className="loading-box"><Spinner animation="grow" variant="primary" /></div>
      );
    }
  }
}

export default Home;
