import React,{useState} from 'react'
import {Form,Input,Button,Checkbox, notification} from 'antd';
import { UserOutlined,LockOutlined} from '@ant-design/icons';
import {emailValidation,minLengthValidation} from '../../../utils/formValidation';
import './RegisterForm.scss';
import { signUpApi } from '../../../api/user';

const RegisterForm = () => {
    const[inputs, setInputs]=useState({
        email:'',
        password:'',
        repeatPassword:'',
        privacyPolicy: false
    });

    const [formValid,setFormValid]=useState({
        email:false,
        password:false,
        repeatPassword:false,
        privacyPolicy:false
    });
    const inputValidation=e=>{
        const{type,name}=e.target;

        if(type==="email"){
            setFormValid({
                ...formValid,
                [name]:emailValidation(e.target)
            })
        }
        if(type==="password"){
            setFormValid({
                ...formValid,
                [name]:minLengthValidation(e.target,6)
            })
        }
        if(type==="checkbox"){
            setFormValid({
                ...formValid,
                [name]:e.target.checked
            })
        }
    };

    const changeForm=e=>{
        if (e.target.name === "privacyPolicy") {
            setInputs({
              ...inputs,
              [e.target.name]: e.target.checked
            });
        }
        else{
            setInputs({
                ...inputs,
                [e.target.name]:e.target.value
            });
        }
    }
 
    const register=async e =>{
        e.preventDefault();
        const passwordVal=inputs.password;
        const repeatPasswordVal=inputs.repeatPassword;
        const emailVal=inputs.email;

        if(!emailVal || !passwordVal || !repeatPasswordVal || !inputs.privacyPolicy){
            notification['error']({
                message:'Todos los campos son obligatorios'
            })
        }
        else{
            if(passwordVal!==repeatPasswordVal){
                notification['error']({
                    message:'Las contraseñas deben ser iguales'
                })
            }else{
                //conectar con api y registrar.
                const result= await signUpApi(inputs)
                if(!result.ok){
                    notification['error']({
                        message:result.message
                    });
                }else{
                    notification['success']({
                        message:result.message
                    });
                    resetForm();
                }
            }
        }
    }

    const resetForm=()=>{
        const input=document.getElementsByTagName('input');

        for(let i=0;i<inputs.length;i++){
            input[i].classList.remove('success');
            input[i].classList.remove('error');
        }

        setInputs({
            email:'',
            password:'',
            repeatPassword:'',
            privacyPolicy:false
        });
        setFormValid({
            email:false,
            password:false,
            repeatPassword:false,
            privacyPolicy:false
        });
    };
    return ( 
        <Form className="register-form" onSubmitCapture={register} onChange={changeForm}>
            <Form.Item>
                <Input 
                prefix={<UserOutlined style={{color:'rgba(0,0,0,0.25'}}/>}
                 type="email"
                 name="email"
                 placeholder="Correo Electrónico"
                 className="register-form__input"
                 value={inputs.email}
                onChange={inputValidation}

                 />
            </Form.Item>
            <Form.Item>
                <Input
                type="password"
                name="password"
                prefix={<LockOutlined style={{color:'rgba(0,0,0,0.25'}}/>}
                placeholder="Contraseña"
                className="register-form__input"
                value={inputs.password}
                onChange={inputValidation}

                />
            </Form.Item>
            <Form.Item>
                <Input
                prefix={<LockOutlined style={{color:'rgba(0,0,0,0.25'}}/>}
                type="password"
                name="repeatPassword"
                placeholder="Repetir Contraseña"
                className="register-form__input"
                value={inputs.repeatPassword}
                onChange={inputValidation}
                

                />
            </Form.Item>
            <Form.Item>
                <Checkbox
                name="privacyPolicy" 
                checked={inputs.privacyPolicy}
                onChange={inputValidation}

                >
                    He leído y acepto la política de privacidad
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="register-form__button">
                    Crear Cuenta
                </Button>
            </Form.Item>
        </Form>
     );
}
 
export default RegisterForm;