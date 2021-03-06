import React from 'react'
import {ReactComponent as YoutubeIcon} from '../../../assets/img/svg/youtube.svg';
import {ReactComponent as TwitterIcon} from '../../../assets/img/svg/twitter.svg';
import {ReactComponent as FacebookIcon} from '../../../assets/img/svg/facebook.svg';
import {ReactComponent as LinkedinIcon} from '../../../assets/img/svg/linkedin.svg';

import './SocialLinks.scss';
import { Link } from 'react-router-dom';

const SocialLinks = () => {
    return ( 
        <div className="social-links">
            <a href="https://youtube.com"
            className="youtube"
            target="_blank"
            rel="noopener noreferrer">
                <YoutubeIcon/>
            </a>

            <a href="https://twitter.com"
            className="twitter"
            target="_blank"
            rel="noopener noreferrer">
                <TwitterIcon/>
            </a>
            <a href="https://facebook.com"
            className="facebook"
            target="_blank"
            rel="noopener noreferrer">
                <FacebookIcon/>
            </a>
            <a href="https://linkedin.com"
            className="linkedin"
            target="_blank"
            rel="noopener noreferrer">
                <LinkedinIcon/>
            </a>
        </div>
     );
}
 
export default SocialLinks;