import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';
import {Row} from 'react-bootstrap';

import { HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }

    return (
        <HeroContainer >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Manage your users and items</HeroH1>
                {/* <HeroP>Sign Up for new Account and recieve $250</HeroP> */}
                <Row style= {{maxWidth: '90%', width: '40%',display: 'flex', justifyContent: 'space-between'}} >
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                        Items {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button> 
                </HeroBtnWrapper>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                        Users {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button> 
                </HeroBtnWrapper>
                </Row>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
