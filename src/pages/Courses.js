import React,{useState,useEffect, Fragment} from 'react';
import {Row,Spin,Col,notification} from 'antd';
import {getCoursesApi} from '../api/course'
import CoursesList from '../components/Web/Courses/CoursesList';
import PresentationCourses from '../components/Web/Courses/PresentationCourses';
import Helmet from 'react-helmet';
const Courses = () => {
    const[courses,setCourses]=useState(null)

    useEffect(()=>{
        getCoursesApi().then(response=>{
            if(response?.code !== 200){
                notification['warning']({
                    message:response.message
                })
            }else{
                setCourses(response.courses)
            }
        }).catch(()=>{
            notification['error']({
                message:'Error de servidor, intente nuevamente'
            })
        })
    },[])

    return ( 
        <Fragment>
            <Helmet>
                <title>Cursos | Esteban Indiveri</title>
                <meta name="description" content="Cursos | Web sobre programación Esteban Indiveri" data-react-helmet="true"/>
            </Helmet>
            <Row>
                <Col md={4}/>
                    <Col md={16}>

                    <PresentationCourses/>

                    {!courses?(
                        <Spin tip="Carganco Cursos" style={{textAlign:"center",width:'100%',padding:'20px'}}/>
                    ):(
                        <CoursesList courses={courses}/>

                    )}

                    </Col>
                <Col md={4}/>

             </Row>
        </Fragment> 
    );
}
 
export default Courses;