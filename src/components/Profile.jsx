import React from 'react';
import { Image } from 'react-bootstrap';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Profile(props) {
    const preurl = "https://www.";
    const item = props.dataParentToChild;
    return (
        <div>
            <Image className="profile-picture" roundedCircle fluid src={item.avatar_url} />
            <br />
            <div className="details">
            <h2> {item.name} </h2>
            <p> {item.bio} </p>
            </div>
            <div className="contact-details">
                <p> <FontAwesomeIcon className="contact-font" icon="map-marker-alt" aria-hidden="true" /> {item.location} </p>
                <p> <FontAwesomeIcon className="contact-font" icon="envelope-square" aria-hidden="true" />
                    <a href={"mailto:" + process.env.REACT_APP_EMAIL}>{process.env.REACT_APP_EMAIL} </a> </p>
                <p> <FontAwesomeIcon className="contact-font" icon={['fab', 'github-square']} aria-hidden="true" />
                    <a href={preurl + process.env.REACT_APP_GITHUB} target="_blank" rel="noreferrer">{process.env.REACT_APP_GITHUB} </a> </p>
                <p> <FontAwesomeIcon className="contact-font" icon={['fab', 'linkedin']} aria-hidden="true" />
                    <a href={preurl + process.env.REACT_APP_LINKEDIN} target="_blank" rel="noreferrer">{process.env.REACT_APP_LINKEDIN} </a> </p>
                <p> <FontAwesomeIcon className="contact-font" icon={['fab', 'twitter-square']} aria-hidden="true" />
                    <a href={preurl + process.env.REACT_APP_TWITTER} target="_blank" rel="noreferrer">{process.env.REACT_APP_TWITTER} </a> </p>
            </div>
        </div>
    );
}

export default Profile;