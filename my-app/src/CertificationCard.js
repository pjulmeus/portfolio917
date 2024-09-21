import React from "react";
import { Stack } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './certification.css'


function CertificationCard(){
return (
    <Stack className="stack_space" gap={1} direction="horizontal">
    <div className="left_side">FreeCodeCamp.com</div>
    <div className="right_side">
Legacy JavaScript Algorithms and Data Structures Certification</div>
    <a className="right-side" href="https://www.freecodecamp.org/certification/fcc8380af88-0c87-4959-b7f7-930f7dcdc227/javascript-algorithms-and-data-structures" >
        <Button variant="right_side aqua" >Submit</Button>
        </a>
  </Stack>
)
}

export default CertificationCard