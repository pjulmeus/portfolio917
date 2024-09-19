import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PersonalBio from './PersonalBio';
import BioGridPic from './BioGridPic'
import Emblem from '../Emblem';

function PersonalStoryGrid() {
  return (
    <Container className='group'>
      <Row className='group'>
        <Col><PersonalBio/>
        <Emblem/>
        </Col>
        <Col xs={5}>
            <BioGridPic/>
        </Col>
      </Row>
    </Container>
  );
}

export default PersonalStoryGrid;