import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import './emblem.css'

function Emblem () {
    return (
        <div className="emblem">
<a href="https://www.linkedin.com/in/paul-julmeus-74289a4a/" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#0e76a8' }} />
</a>
<a href="https://github.com/pjulmeus" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faGithub} size="2x"/>
    </a>
    <a href="https://docs.google.com/document/d/19H_0ImyG_tfwBIvPXlIOC1lsr70vVaXt/view" >
    <FontAwesomeIcon icon={faFileArrowDown} size="2x"/>
    </a>
        </div>
    )
}

export default Emblem;