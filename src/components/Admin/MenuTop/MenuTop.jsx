import React from 'react'
import './MenuTop.scss';
import Logo from '../../../assets/img/png/logo1.png'
import { MenuUnfoldOutlined,PoweroffOutlined,MenuFoldOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import {logout} from '../../../api/auth';
const MenuTop = (props) => {
    const{menuCollapsed, setMenuCollapsed}=props;
    const logoutUser=()=>{
        logout();
        window.location.reload();
    }

    return ( 
        <div className="menu-top">
            <div className="menu-top__left">
                <img 
                style={{height:"50px"}}
                className="menu-top__left-logo" 
                src={Logo} 
                alt="logo"
                />
                <Button type="link" onClick={()=>setMenuCollapsed(!menuCollapsed)}>
                    {menuCollapsed?(<MenuUnfoldOutlined  />):(<MenuFoldOutlined />) }
                </Button>
            </div>    
            <div className="menu-top__right">
                <Button type="link" onClick={logoutUser}>
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
     );
}
 
export default MenuTop;