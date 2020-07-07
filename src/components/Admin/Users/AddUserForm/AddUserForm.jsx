import React,{useState} from 'react';
import {Form,Input,Select,Button,Row,Col,notification} from 'antd';
import {signUpAdminApi} from '../../../../api/user';
import {getAccessTokenApi} from '../../../../api/auth';
import {UserOutlined,MailOutlined,LockOutlined } from '@ant-design/icons';

import './AddUserForm.scss';
const AddUserForm = (props) => {
    const {setIsVisibleModal,setReloadUsers}=props;
    const [userData,setUserData]=useState({});

    const addUser=e=>{
        e.preventDefault();
        if(!userData.name ||
             !userData.lastname || 
             !userData.role ||
             !userData.email || 
             !userData.password || 
             !userData.repeatPassword
             ){
                 notification['error']({
                     message:'Todos los campos son obligatorios'
                 })
             }else if(userData.password!== userData.repeatPassword){
                notification['error']({
                    message:'Las contraseñas deben ser iguales'
                })
             }else{
                 const accesToken=getAccessTokenApi();
                 signUpAdminApi(accesToken,userData).then(response=>{
                     notification['success']({
                         message:response
                     })
                     setIsVisibleModal(false);
                     setReloadUsers(true);
                     setUserData({})
                 }).catch(err=>{
                     notification['error']({
                         message:err
                     });
                 });
             };
    };
    return ( 
        <div className="add-user-form">
           <AddForm
           userData={userData}
           setUserData={setUserData}
           addUser={addUser}
           />
        </div>
     );
}
 
export default AddUserForm;

function AddForm(props){
    const{userData,setUserData,addUser}=props;
    const {Option}=Select;
    return(
        <Form className="form-add" onSubmitCapture={addUser}>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                        prefix={<UserOutlined/>}
                        placeholder="Nombre"
                        value={userData.name}
                        onChange={e=>setUserData({...userData,name:e.target.value})}
                        />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item>
                        <Input
                        prefix={<UserOutlined/>}
                        placeholder="Apellido"
                        value={userData.lastname}
                        onChange={e=>setUserData({...userData,lastname:e.target.value})}
                        />
                    </Form.Item>
                </Col>

            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                        prefix={<MailOutlined/>}
                        placeholder="Correo"
                        value={userData.email}
                        onChange={e=>setUserData({...userData,email:e.target.value})}
                        />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item>
                        <Select
                        placeholder="Selecciona un rol"
                        onChange={e=>setUserData({...setUserData,role:e})}
                        value={userData.role}
                        >
                            <Option value="admin">Administrador</Option>
                            <Option value="editor">Editor</Option>
                            <Option value="reviwer">Revisor</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                        type="password"
                        prefix={<LockOutlined/>}
                        placeholder="Contraseña"
                        value={userData.password}
                        onChange={e=>setUserData({...userData,password:e.target.value})}
                        />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item>
                        <Input
                        type="password"
                        prefix={<LockOutlined/>}
                        placeholder="Repetir contraseña"
                        value={userData.repeatPassword}
                        onChange={e=>setUserData({...userData,repeatPassword:e.target.value})}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item>
                <Button
                type="primary"
                htmlType="submit"
                className="btn-submit"
                >
                    Crear Usuario
                </Button>
            </Form.Item>
        </Form>
    )

}