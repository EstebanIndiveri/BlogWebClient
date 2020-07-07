import React,{useState,useEffect, Fragment} from 'react'
import {Spin,List,notification} from 'antd';
import {Link} from 'react-router-dom';
import moment from 'moment';
import queryString from 'query-string';
import Pagination from '../../../Pagination';
import {getPostApi} from '../../../../api/post';
import Helmet from 'react-helmet';

import 'moment/locale/es';
import './PostListWeb.scss';
const PostListWeb = (props) => {
    const{location,history}=props
    const [posts,setPost]=useState(null);
    const{page=1}=queryString.parse(location.search);
    
    useEffect(()=>{
        getPostApi(12,page).then(response=>{
            if(response?.code !==200){
                notification['warning']({
                    message:response.message
                })
            }else{
                setPost(response.posts);
            }
        }).catch(()=>{
            notification['error']({
                message:'error del servidor'
            })
        })
    },[page])
    
    if(!posts){
        return (
            <Spin
            tip="Carganto"
            style={{width:'100%',padding:'200px 0'}}
            />
        )
    }
    return ( 
        <Fragment>
            <Helmet>
                <title>Blog de programación | Esteban Indiveri</title>
            </Helmet>
        <div className="posts-list-web">
            <h1>Blog</h1>
            <List 
            dataSource={posts.docs} 
            renderItem={post=><Post post={post}/>}/>
            <Pagination 
            posts={posts}
            location={location}
            history={history}
            />
        </div>
        </Fragment>
     );
}
 
export default PostListWeb;

function Post(props){
    const{post}=props;
    
    const day=moment(post.date).format("DD");
    const month=moment(post.date).format("MMMM");

    return(
        <List.Item className="post">
            <div className="post__date">
                <span>{day}</span>
                <span>{month}</span>
            </div>
            <Link to={`blog/${post.url}`}>
                <div className="ant-list-item-meta-title">{post.title}</div>
            </Link>
        </List.Item>
    )
}