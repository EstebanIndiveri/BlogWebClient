import React from 'react';

import {Row,Col,Card,Button} from'antd';
import {Link} from 'react-router-dom';
import reactJsHooks from '../../../assets/img/jpg/react-js-hooks.jpg';
import reactNative from '../../../assets/img/jpg/react-native.jpg';
import javascript from '../../../assets/img/jpg/javascript-es6.jpg';
import wordPress from '../../../assets/img/jpg/wordpress.jpg';
import cssGrid from '../../../assets/img/jpg/css-grid.jpg';
import prestaShop from '../../../assets/img/jpg/prestashop-1-7.jpg';

import './HomeCourses.scss';

const HomeCourses = () => {
    return ( 
       <Row className="home-courses">
           <Col lg={24} className="home-courses__title">
               <h2>Aprende y mejora tus habilidades</h2>
           </Col>
           <Col lg={4}/>
            <Col lg={16}>
                <Row className="row-courses">
                    <Col md={6}>
                        <CardCourse
                            image={reactJsHooks}
                            title="React JS hooks"
                            subtitle="Intermedio - React/Javascript"
                            link="https://google.com"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse
                            image={reactNative}
                            title="Rect Native Expo"
                            subtitle="Intermedio - React/Javascript"
                            link="https://google.com"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse
                            image={javascript}
                            title="Javascript ES6"
                            subtitle="Básico - Javascript"
                            link="https://google.com"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse
                            image={wordPress}
                            title="Wordpress"
                            subtitle="Básico - Wordpress"
                            link="https://google.com"
                        />
                    </Col>
                    <Row className="row-courses">
                        <Col md={6}>
                            <CardCourse
                                image={prestaShop}
                                title="Prestashop"
                                subtitle="Básico - Prestashop"
                                link="https://google.com"
                            />
                        </Col>
                        <Col md={6}/>
                        <Col md={6}/>
                        <Col md={6}>
                            <CardCourse
                                image={cssGrid}
                                title="CSS Grid"
                                subtitle="Intermedio - CSS"
                                link="https://google.com"
                            />
                        </Col>
                    </Row>
                </Row>
            </Col>
           <Col lg={4}/>
           <Col lg={24} className="home-courses__more">
               <Link to="/courses">
                   <Button>
                       Ver Más
                   </Button>
               </Link>
           </Col>
       </Row>
     );
}
 
export default HomeCourses;

function CardCourse(props){
    const {image,title,subtitle,link}=props;
    const {Meta}=Card;
    return(
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Card
            className="home-courses__card"
            cover={<img src={image} alt=""/>}
            actions={[<Button>INGRESAR</Button>]}
            >
                <Meta title={title} description={subtitle}/>
            </Card>
        </a>
    )
}