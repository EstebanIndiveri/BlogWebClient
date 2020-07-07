import React,{Fragment} from 'react';
import MainBanner from '../components/Web/MainBanner'
import HomeCourses from '../components/Web/HomeCourses'
import HowMyCoursesWork from '../components/Web/HowMyCoursesWork'
import ReviewsCourses from '../components/Web/ReviewsCourses';
import Helmet from 'react-helmet';

const Home = () => {
    return ( 
        <Fragment>
            <Helmet>
                <title>Esteban Indiveri</title>
                <meta name="description" content="Home | Web sobre programación" data-react-helmet="true"/>
            </Helmet>
            <MainBanner/>
            <HomeCourses/>
            <HowMyCoursesWork/>
            <ReviewsCourses/>
        </Fragment>
     );
}
 
export default Home;