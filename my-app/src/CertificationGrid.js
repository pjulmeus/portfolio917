import React from "react";
import CertificationCard from "./CertificationCard";
import CertificationCard2 from "./CertificationCard2";
import CertificationLabels from "./CertificationLabels";
import './certification.css'

function CertificationGrid () {
    return (
        <div>
            <h1 className="certification_title">Certifications</h1>
            <CertificationLabels/>
            <CertificationCard/>
            <CertificationCard2/>
        </div>
    )
}

export default CertificationGrid;