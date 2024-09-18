import React from "react";
import { Stack } from "react-bootstrap";
import './certification.css'


function CertificationLabels(){
return (
    <Stack className="stack_space_labels" gap={1} direction="horizontal">
        <label className="left_side"><b>Where</b></label>
        <label className="middle_side" > <b>Type of Certification</b></label>
        <label className="right_side"> <b>The link </b></label>
  </Stack>
)
}

export default CertificationLabels;