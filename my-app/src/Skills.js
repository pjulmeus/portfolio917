import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons';
import './skills.css';

function Skills() {
  return (
     <div className='skills_space'>
    <Container className='justify-content-md-center'  fluid="md">
        <h1 className='skills_header'>Skills</h1>
      {/* Align the icons and text horizontally and vertically */}
     
      <Row className='skills align-items-center text-center'>
        <Col><FontAwesomeIcon icon={faCheckToSlot} /> JavaScript</Col>
        <Col><FontAwesomeIcon icon={faCheckToSlot} /> Python</Col>
        <Col><FontAwesomeIcon icon={faCheckToSlot} /> C++</Col>
      </Row>

      <Row className='skills align-items-center text-center'>
        <Col><FontAwesomeIcon icon={faCheckToSlot} /> TypeScript</Col>
        <Col><FontAwesomeIcon icon={faCheckToSlot} /> Django</Col>
        <Col><FontAwesomeIcon icon={faCheckToSlot} /> Flask</Col>
      </Row>

      <Row className='skills align-items-center text-center'>
        <Col><FontAwesomeIcon icon={faCheckToSlot} /> Node.js</Col>
        <Col><FontAwesomeIcon icon={faCheckToSlot} /> Express</Col>
        <Col><FontAwesomeIcon icon={faCheckToSlot} /> JQuery</Col>
      </Row>

      <Row className='skills align-items-center text-center'>
        <Col><FontAwesomeIcon icon={faCheckToSlot} /> CSS</Col>
        <Col><FontAwesomeIcon icon={faCheckToSlot} /> Next.js</Col>
        <Col><FontAwesomeIcon icon={faCheckToSlot} /> Vue</Col>
      </Row>

      <Row className='skills align-items-center text-center'>
        <Col><FontAwesomeIcon icon={faCheckToSlot} /> Java</Col>
        <Col><FontAwesomeIcon icon={faCheckToSlot} /> React</Col>
        <Col><FontAwesomeIcon icon={faCheckToSlot} /> HTML</Col>
      </Row>

      <Row className='skills align-items-center text-center'>
        <Col><FontAwesomeIcon icon={faCheckToSlot} /> RESTFUL API</Col>
        <Col><FontAwesomeIcon icon={faCheckToSlot} /> PoseGreSQL</Col>
        <Col><FontAwesomeIcon icon={faCheckToSlot} /> MySQL </Col>
      </Row>
      
    </Container>
    </div>
  );
}

export default Skills;