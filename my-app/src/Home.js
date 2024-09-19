import React from "react"
import PersonalStoryGrid from './StoryFolder/PersonalStoryGrid';
import CertificationGrid from './CertificationGrid'
import Skills from './Skills';
 
function Home ( ){
    return(
        <>
                <PersonalStoryGrid/>
                <CertificationGrid/>
                <Skills/>
        </>
    )
 }

export default Home