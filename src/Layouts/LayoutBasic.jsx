import React, { Fragment } from 'react';
import {Route,Switch} from 'react-router-dom';
import './LayoutBasic.scss';
import { Row, Col} from 'antd';
import MenuTop from '../components/Web/MenuTop';
import Footer from '../components/Web/Footer';
const LayoutBasic = (props) => {
    const{routes}=props;

    return(
        <Fragment>
            <Row>
                <Col lg={4}/>
                <Col lg={16}>
                    <MenuTop/>
                </Col>
                <Col lg={4}/>
            </Row>
            <LoadRoutes routes={routes}/>
            <Footer/>
        </Fragment>
    )
}
 
export default LayoutBasic;

function LoadRoutes({routes}){
    return (
        <Switch>
            {routes.map((route,index)=>(
            <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
            />))}
        </Switch>
    )
}
