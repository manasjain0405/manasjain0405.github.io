import React from 'react';
import { Container, Col, Row, Button, Spinner, Card, Badge } from 'react-bootstrap';
import './Resume.css';

const baseurl = "https://raw.githubusercontent.com/";

const resumeurl = `${baseurl}${process.env.REACT_APP_USERNAME}/${process.env.REACT_APP_USERNAME}/main/static/resume.json`;


class Resume extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            item: {}
        };
    }

    componentDidMount() {
        fetch(resumeurl)
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

    buildExperienceCard(item) {
        return (
            <Col key={item.id} sm={4} style={{ marginTop: '0.2rem', marginBottom: '0.2rem' }}>
                <Card className="h-100 experience-card" bg="dark">
                    <Card.Header>{item.title} - {item.company}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Card.Text>
                            {`${item.startDate} - ${item.endDate}`}
                        </Card.Text>
                        <Card.Text>
                            Technology Used: {item.technology.map(tech => <Badge style={{ marginRight: "0.1rem" }} variant="secondary">{tech + ' '}</Badge>)}
                        </Card.Text>
                        <Card.Text></Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">{item.location}</Card.Footer>
                </Card>
            </Col>
        )
    }

    buildEducationCard(item) {
        return (
            <Col key={item.id} sm={4} style={{ marginTop: '0.2rem', marginBottom: '0.2rem' }}>
                <Card className="h-100 education-card" bg="dark">
                    <Card.Header>{item.title} - {item.grades}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {item.school}
                        </Card.Text>
                        <Card.Text>
                            {item.date}
                        </Card.Text>
                        <Card.Text>
                            {item.affiliation}
                        </Card.Text>
                        <Card.Text></Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">{item.location}</Card.Footer>
                </Card>
            </Col>
        )
    }

    render() {
        const { error, isLoaded, item } = this.state;
        if (error) {
            return <div>Error: Unable to fetch details from github APIs {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="loading-box dark"><Spinner animation="grow" variant="primary" /></div>;
        } else if (isLoaded) {
            console.log(item);
            return (
                <React.Fragment>
                    <Container fluid className="resume-topbar">
                        <Row>
                            <Col sm={7} className="resume-heading">
                                <h1>Resume</h1>
                            </Col>
                            <Col sm={5} >
                                <Button className="resume-button"
                                    href={item.shortResumeURL}
                                    target="_blank" rel="noreferrer"> Download Short Resume</Button>
                                <Button className="resume-button"
                                    href={item.resumeURL}
                                    target="_blank" rel="noreferrer"> Download Complete Resume</Button>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid className="resume-data">
                        <Row id="experience" className="resume-element">
                            <Col >
                                <Row className="resume-element-title">
                                    <Col>
                                        <h1>Experience</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    {item.experience.map(element =>
                                        this.buildExperienceCard(element)
                                    )}
                                </Row>
                            </Col>
                        </Row>
                        <Row id="languages" className="resume-element">
                            <Col>
                                <Row className="resume-element-title">
                                    <Col>
                                        <h1>Programing Languages</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12} className="flex-display">
                                        {item.languages.map(element =>
                                            <h3 style={{ marginRight: "0.5rem" }}>
                                                <Badge variant="secondary">{element}</Badge>
                                            </h3>
                                        )}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row id="technology" className="resume-element">
                            <Col>
                                <Row className="resume-element-title">
                                    <Col>
                                        <h1>Technology Used</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12} className="flex-display">
                                        {item.technology.map(element =>
                                            <h3 style={{ marginRight: "0.5rem" }}>
                                                <Badge variant="secondary">{element}</Badge>
                                            </h3>
                                        )}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row id="education" className="resume-element">
                            <Col>
                                <Row className="resume-element-title">
                                    <Col>
                                        <h1>Education</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    {item.education.map(element =>
                                        this.buildEducationCard(element)
                                    )}
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </React.Fragment>
            );
        }
    }
}

export default Resume;
