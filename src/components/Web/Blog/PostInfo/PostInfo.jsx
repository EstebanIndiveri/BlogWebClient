import React,{useEffect,useState, Fragment} from 'react';
import{Spin,notification} from 'antd';
import moment from 'moment';
import {getuPostApi} from  '../../../../api/post';
import 'moment/locale/es';
import Helmet from 'react-helmet';

import './PostInfo.scss';
const PostInfo = (props) => {
    const{url}=props;
    const[postInfo,setPostInfo]=useState(null)

    useEffect(()=>{
        getuPostApi(url).then(response=>{
            if(response.code!==200){
                notification['warning']({
                    message:response.message
                })
            }else{
                setPostInfo(response.post);
            }
        }).catch(()=>{
            notification['warning']({
                message:'Error del servidor'
            })
        })
    },[url])


    if(!postInfo){
        return(
            <Spin
            tip="Cargando"
            style={{width:'100%',padding:'200px 0'}}
            />
        )
    }

    return ( 
        <Fragment>
            <Helmet>
                <title>{postInfo.title} | Esteban Indiveri</title>
            </Helmet>
        <div className="post-info">
            <h1 className="post-info__title">{postInfo.title}</h1>
            <div className="post-info__creation-date">{moment(postInfo.date).local('es').format('LL')}</div>
            
            <div className="post-info__description"
            dangerouslySetInnerHTML={{__html:postInfo.description}}
            />

        </div>
        </Fragment>
     );
}
 
export default PostInfo;