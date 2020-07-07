import React from 'react'
import{Row,Col,Card,Button,Rate,notification} from 'antd';
import{getCourseDataUdemyApi} from '../../../../api/course';
import './CoursesList.scss';
import { useState } from 'react';
import { useEffect } from 'react';

const CoursesList = (props) => {
    const{courses}=props;
    
    return ( 
        <div className='courses-list'>
            <Row>
                {courses.map(course=>(
                    <Col key={course._id} md={8} className="courses-list__course">
                        <Course course={course}/>
                    </Col>
                ))}
            </Row>
        </div>
     );
}
 
export default CoursesList;
function Course(props){
    const{course}=props;
    const[courseInfo,setCourseInfo]=useState({});
    const[urlCourse,setUrlCourse]=useState('');
    const {Meta}=Card;

    useEffect(()=>{
        getCourseDataUdemyApi(course.idCourse).then(response=>{
            if(response?.code!==200){
                notification['warning']({
                    message:response.message
                })
            }else{
                setCourseInfo(response.data)
                getUrl(response.data.url)
            }
            
        }).catch(()=>{
            notification['error']({
                message:'Error del servido, intenta nuevamente'
            })
        })
    },[course])
    
    const getUrl=url=>{
        if(!course.link){
            const baseUrl=`https://www.udemy.com${url}`
            const finalUrl=baseUrl+(course.coupon?`?couponCode=${course.coupon}`:'');
            setUrlCourse(finalUrl)
        }else{
            setUrlCourse(course.link);
        }
    }

    return(
        <a href={urlCourse} target="_blank" rel="noopener noreferrer">
            <Card
            cover={<img src={courseInfo.image_480x270} alt=""/>}
            >
                <Meta
                title={courseInfo.title}
                description={courseInfo.headline}
                />
                <Button >Entrar en el curso</Button>
                <div className="courses-list__course-footer">
                    <span className="span">
                        {course.price?(`${course.price} $`):(courseInfo.price)}
                    </span>
                    <div className="star">
                        <Rate disabled defaultValue={5}/>
                    </div>
                </div>
            </Card>
        </a>
    )
}