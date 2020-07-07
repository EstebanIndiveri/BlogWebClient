import React,{useState,useEffect} from 'react';
import Modal from '../../../components/modal';
import {Button,notification} from 'antd';
import queryString from 'query-string';
import {withRouter} from 'react-router-dom';
import PostsList from '../../../components/Admin/Blog/PostsList';
import Pagination from '../../../components/Pagination';
import AddEditPostForm from '../../../components/Admin/Blog/AddEditPostForm';
import './Blog.scss';
import { getPostApi } from '../../../api/post';

const Blog = (props) => {
    const{location,history}=props;
    const[posts,setPosts]=useState(null);
    const[reloadPosts,setReloadPosts]=useState(false);
    const[isVisibleModal,setIsVisibleModal]=useState(false);
    const[modalTitle,setModalTitle]=useState('');
    const[modalContent,setModalContent]=useState(null);

    const {page=1}=queryString.parse(location.search);

    useEffect(()=>{
        getPostApi(12,page).then(response=>{
            if(response?.code!==200){
                notification['warning']({
                    message:response.message
                });
            }else{
                setPosts(response.posts);
            }
        }).catch(()=>{
            notification['error']({
                message:'Erro del servidor'
            });
        });
        setReloadPosts(false);
    },[page,reloadPosts])

    const addPost=()=>{
        setIsVisibleModal(true);
        setModalTitle('Creando nuevo post')
        setModalContent(
        <AddEditPostForm 
        setIsVisibleModal={setIsVisibleModal}
        setReloadPosts={setReloadPosts}
        post={null}
        />)
    }

    const editPost=post=>{
        setIsVisibleModal(true);
        setModalTitle('editar post');
        setModalContent(
            <AddEditPostForm 
        setIsVisibleModal={setIsVisibleModal}
        setReloadPosts={setReloadPosts}
        post={post}
        />) 
    }

    if(!posts){
        return null;
    }
    return ( 
        <div className="blog">
            <div className="blog__add-post">
                <Button type="primary" onClick={addPost}>
                    Nuevo Post
                </Button>
            </div>
            <PostsList
            posts={posts}
            setReloadPosts={setReloadPosts}
            editPost={editPost}
            />
            <Pagination
            posts={posts}
            location={location}
            history={history}
            />
            <Modal
            title={modalTitle}
            isVisible={isVisibleModal}
            setIsVisible={setIsVisibleModal}
            width="65%"
            >
                {modalContent}
            </Modal>
        </div>
     );
}
 
export default withRouter(Blog);