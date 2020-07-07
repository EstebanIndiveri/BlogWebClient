import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col} from'antd';
import { BookOutlined,CodeOutlined,DatabaseOutlined,ArrowRightOutlined,HddOutlined,AppstoreAddOutlined,UserOutlined} from '@ant-design/icons';

import './NavigationFooter.scss';
const NavigationFooter = () => {
    return ( 
       <Row className="navigation-footer">
           <Col sm={24}>
            <h3>Navegación</h3>
           </Col>
           <Col md={12}>
           <RenderListLeft/>
           </Col>
           <Col md={12}>
              <RenderListRight/>
           </Col>
       </Row>
     );
}
 
export default NavigationFooter;
function RenderListLeft(){
    return(
        <ul>
            <li>
                <a href="#" alt="">
                <BookOutlined /> Cursos Online
                </a>
            </li>
            <li>
                <a  href="#" alt="">
                <CodeOutlined />Desarrollo Web
                </a>
            </li>
            <li>
                <a  href="#" alt="">
                <DatabaseOutlined />Base de datos
                </a>
            </li>
            <li>
                <a  href="#" alt="">
                <ArrowRightOutlined />Politicas de privacidad
                </a>
            </li>
        </ul>
    )
}
function RenderListRight(){
    return(
        <ul>
            <li>
                <a href="#" alt="">
                <HddOutlined /> Sistema
                </a>
            </li>
            <li>
                <a  href="#" alt="">
                <AppstoreAddOutlined />CMS
                </a>
            </li>
            <li>
                <a  href="#" alt="">
                <UserOutlined />Portfolio
                </a>
            </li>
            <li>
                <a  href="#" alt="">
                <ArrowRightOutlined />Politicas de cookies
                </a>
            </li>
        </ul>
    )
}