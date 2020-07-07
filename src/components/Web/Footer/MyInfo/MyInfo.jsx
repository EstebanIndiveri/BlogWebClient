import React from 'react';
import './MyInfo.scss';
import Logo from '../../../../assets/img/png/logo1.png';
import SocialLinks from '../../SocialLinks';
const MyInfo = () => {
    return ( <div className="my-info">
                <img src={Logo} alt=""/>
                <h5>
                    Entra al mundo del desarrollo web, disfruta creando proyectos de todo tipo, ¡deja que tu imaginación fluya !  
                </h5>
                <SocialLinks/>
            </div> );
}
 
export default MyInfo;