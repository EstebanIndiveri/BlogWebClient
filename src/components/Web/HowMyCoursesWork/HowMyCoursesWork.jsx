import React from 'react';
import {Row,Col, Card}from'antd';
import './HowMyCoursesWork.scss';
import {ClockCircleOutlined,KeyOutlined,MessageOutlined,UserOutlined,DollarOutlined,CheckCircleOutlined} from '@ant-design/icons';

const HowMyCoursesWork = () => {
    return ( 
        <Row className="how-my-courses-work">
            <Col lg={24} className="how-my-courses-work__title">
                <h2>¿Cómo funcionan mis cursos?</h2>
                <h3>
                    Cada curso cuenta con contenido bajo la web de Udemy, activa las 24 horas del día los 365 días del año
                </h3>
            </Col>
            <Col lg={4}/>
            <Col lg={16}>
            <Row className="row-cars">
                <Col md={8}>
                    <CardInfo
                    icon={<ClockCircleOutlined />}
                    title="Cursos y Clases"
                    description="Cursos de entre 10 y 30 horas y cada clase del curso con una duración maxima de 15 minutos, faciles de llevar en tu día a ía de aprendizaje"
                    />
                </Col>
                <Col md={8}>
                    <CardInfo
                    icon={<KeyOutlined />}
                    title="Acceso 24hs"
                    description="Accede a los cursos en cualquier momento, desde cualquier lugar sin importar día u horario"
                    />
                </Col>
                <Col md={8}>
                    <CardInfo
                    icon={<MessageOutlined />}
                    title="Aprendizaje colaborativo"
                    description="Aprende cada lenguaje de programación con un grán soporte del tutor y la comunidad"
                    />
                </Col>
            </Row>

            <Row className="row-cars">
                <Col md={8}>
                    <CardInfo
                    icon={<UserOutlined />}
                    title="Mejora tu perfil"
                    description="Aprende y mejora tu perfil para mantenerte en la vanguardía de la programación"
                    />
                </Col>
                <Col md={8}>
                    <CardInfo
                    icon={<DollarOutlined />}
                    title="Precios bajos"
                    description="Obten el curso que necesitas por solo 9.99 y ten acceso por tiempo ilimitado, con soporte las 24hs"
                    />
                </Col>
                <Col md={8}>
                    <CardInfo
                    icon={<CheckCircleOutlined />}
                    title="Certificado de aprendizaje"
                    description="Obten tu certificado de finalización del curso y demuestra tus conocimientos"
                    />
                </Col>
            </Row>

            
            </Col>
            <Col lg={4}/>
        </Row>
     );
}
 
export default HowMyCoursesWork;

function CardInfo(props){
    const{icon,title,description}=props;
    const{Meta}=Card;
    return(
        <Card className="how-my-courses-work__card">
            {icon}
            <Meta title={title} description={description}/>
        </Card>
    )
}
