import React,{useState} from 'react'
import './NewsLetter.scss';
import { BookOutlined,CodeOutlined,DatabaseOutlined,ArrowRightOutlined,HddOutlined,AppstoreAddOutlined,UserOutlined} from '@ant-design/icons';
import{Form,Input,Button,notification} from 'antd';
import {suscribeNewsletterApi} from '../../../api/newsletter';
import { useForm } from 'antd/lib/form/util';
const NewsLetter = () => {
    const[email,setEmail]=useState('');

    const onSubmit=(e)=>{
        e.preventDefault();
        const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
        
        const resultValidation=emailValid.test(email);

        if(!resultValidation){
            notification['error']({
                message:'El correo electrónico no es valido'
            });
        }else{
            suscribeNewsletterApi(email).then(response=>{
                if(response.code!==200){
                    notification['warning']({
                        message:response.message
                    });
                }else{
                    notification['success']({
                        message:'¡Email registrado correctamente!'
                    });
                    setEmail('');
                }
            })
        }  
        
        
    }

    return ( 
            <div className="newsletter">
                <h3>Newsletter</h3>
                <Form onSubmitCapture={onSubmit}>
                    <Form.Item>
                        <Input
                        prefix={<UserOutlined style={{color:"rgba(0,0,0,0.25)"}}/>}
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-btn">
                            ¡Me Suscribo!
                        </Button>
                    </Form.Item>
                </Form>
            </div> 
        );
}
 
export default NewsLetter;