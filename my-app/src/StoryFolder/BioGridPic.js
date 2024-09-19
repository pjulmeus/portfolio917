import React from 'react';
import { Image } from 'react-bootstrap';
import BioPic from '../assets/images/BioPic.jpg'
import './personalbio.css';

function BioGridPic() {
  return (
        <>
            <Image className='bio_picture' src={BioPic} alt='Personal Bio Picture' roundedCircle fluid />
        </>
  );
}

export default BioGridPic;