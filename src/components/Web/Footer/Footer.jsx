import React from 'react';
import {Layout,Row,Col} from 'antd';
import './Footer.scss';
import MyInfo from './MyInfo';
import NavigationFooter from './NavigationFooter';
import NewsLetter from '../NewsLetter';
const Footer = () => {
    const{Footer}=Layout;
    return ( 
        <Footer className="footer">
            <Row>
                <Col md={4}/>
                    <Col md={16}>
                        <Row>
                            <Col md={8}>
                                <MyInfo/>
                            </Col>

                            <Col md={8}>
                            <NavigationFooter/>
                            </Col>

                            <Col md={8}>
                                <NewsLetter/>
                            </Col>
                        </Row>
                        <Row className="footer__copy">
                            <Col md={12}>
                               &copy; 2020 Todos los derechos reservados
                            </Col>
                            <Col md={12}>
                                Esteban Indiveri
                            </Col>
                        </Row>
                    </Col>
                <Col md={4}/>
            </Row>
        </Footer>
    );
}
 
export default Footer;