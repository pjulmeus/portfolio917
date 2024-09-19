import React from "react";
import { Stack } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './certification.css'


function CertificationCard2(){
return (
    <Stack className="stack_space" gap={1} direction="horizontal">
    <div className="left_side">University of South Florida</div>
    <div className="right_side">Software Engineering Fellowship</div>
    <a href="https://images.credential.net/embed/v0lpzuln.png"><Button variant="right_side">Submit</Button></a>
  </Stack>
)
}

export default CertificationCard2