import React from 'react';

import logoAcademy from '../../../../assets/img/png/academy-logo.png'

import './PresentationCourses.scss';

const PresentationCourses = () => {
    return ( 
        <div className="presentation-courses"> 
            <img src={logoAcademy} alt=""/>
            <p>
                En esta página vas a encontrar los mejores cursos online de desarrollo web en Español, unete a nosotros y empieza tu camino como Desarrolador Webo Desarrollador de CMS. 
            </p>
            <p>
                ¡Hechale un vistazo y aprovecha las ofertas!
            </p>
        </div>
    );
}
 
export default PresentationCourses;