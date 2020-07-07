import React from 'react';
import {Row,Col,Card,Avatar} from 'antd';
import AvatarSub from '../../../assets/img/jpg/avatarsub.jpg'

import './ReviewsCourses.scss';
const ReviewsCourses = () => {
    return ( 
        <Row className="reviews-courses">
            <Row>
                <Col lg={2}/>
                <Col lg={20} className="reviews-courses__title">
                    <h2>Forma parte de los mas de 35 mil estudiantes que estan aprendiendo a programar</h2>
                </Col>
                <Col lg={2}/>
            </Row>

            <Row>
            <Col lg={2}/>
            <Col lg={20}>
                <Row className="row-cards">
                    <Col md={8}>
                        <CardReview
                        name="Alonso Garcia"
                        subtitle="Alumno de Udemy"
                        avatar={AvatarSub}
                        review="Un curso excelente, el profesor explica detalladamente como funciona react y todos su secretos para poder desarrollar webapps de manera didactica y rápida"
                        />
                    </Col>
                    <Col md={8}>
                        <CardReview
                        name="Alonso Garcia"
                        subtitle="Alumno de Udemy"
                        avatar={AvatarSub}
                        review="Un curso excelente, el profesor explica detalladamente como funciona react y todos su secretos para poder desarrollar webapps de manera didactica y rápida"
                        />
                    </Col>
                    <Col md={8}>
                        <CardReview
                        name="Alonso Garcia"
                        subtitle="Alumno de Udemy"
                        avatar={AvatarSub}
                        review="Un curso excelente, el profesor explica detalladamente como funciona react y todos su secretos para poder desarrollar webapps de manera didactica y rápida"
                        />
                    </Col>
                </Row>


                <Row className="row-cards">
                    <Col md={8}>
                        <CardReview
                        name="Alonso Garcia"
                        subtitle="Alumno de Udemy"
                        avatar={AvatarSub}
                        review="Un curso excelente, el profesor explica detalladamente como funciona react y todos su secretos para poder desarrollar webapps de manera didactica y rápida"
                        />
                    </Col>
                    <Col md={8}>
                        <CardReview
                        name="Alonso Garcia"
                        subtitle="Alumno de Udemy"
                        avatar={AvatarSub}
                        review="Un curso excelente, el profesor explica detalladamente como funciona react y todos su secretos para poder desarrollar webapps de manera didactica y rápida"
                        />
                    </Col>
                    <Col md={8}>
                        <CardReview
                        name="Alonso Garcia"
                        subtitle="Alumno de Udemy"
                        avatar={AvatarSub}
                        review="Un curso excelente, el profesor explica detalladamente como funciona react y todos su secretos para poder desarrollar webapps de manera didactica y rápida"
                        />
                    </Col>
                </Row>


            </Col>
            <Col lg={2}/>

            </Row>
        </Row>
     );
}
 
export default ReviewsCourses;

function CardReview(props){
    const{name,subtitle,avatar,review}=props;
    const{Meta}=Card;
    return(
        <Card className="reviews-courses__card">
            <p>{review}</p>
            <Meta
            avatar={<Avatar src={avatar}/>}
            title={name}
            description={subtitle}
            />
        </Card>
    )
}
