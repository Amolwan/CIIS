import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import SideBarConfig from './MenuConfig';

import DropdownMenu from './DropdownMenu';
import SimpleMenu from './SimpleMenu';
import Dropdown from 'react-bootstrap/Dropdown';

import userImage from '../../images/user.jpg';


let renderCustomHorizontalThumb = ({ style, ...props }) => {
                        
    const thumbStyle = {
        backgroundColor: `rgba(255,255,255,0.3)`,
        width:'4px',
        right:'-2px'
    };
    return (
        <div
            style={{ ...style, ...thumbStyle }}
            {...props}/>
    );
}




function SideBarMenu() {

    let initialMenuItems = [];
    SideBarConfig.menus.forEach( (menu, index) => {
        let active = menu.active ? menu.active : false;
        initialMenuItems.push({
            active:active
        });
    });

    
    const [menuItems , setMenuItems] = useState(initialMenuItems);
    
    const handleMenuDropDownClick = (e,index) => {
        let newArray = menuItems.map( ( item, idx ) => {
            // check if index equal to current clicked so put inverse value otherwise set to false (collapse other menu)
            (index === idx) ? item.active = !item.active : item.active = false;
            return item;
        });
        setMenuItems([
            ...newArray
        ]);
    }
    
    const renderSideBarMenuItem = () => {
        return !SideBarConfig["menus"].length ? "" : (
            
            SideBarConfig.menus.map( (menu , index ) => {
                
                let liElementList = "";
                if (menu.type === 'header') {
                    liElementList = <li className="header-menu"><span>{menu.title}</span></li>;
                }else if(menu.type === 'dropdown' ) {
                    liElementList = <DropdownMenu menu={menu}  active={menuItems[index].active} key={"sidebar"+index} handleClick={(e) => handleMenuDropDownClick(e,index) } />;
                } else if(menu.type === 'simple' ) {
                    liElementList =  <SimpleMenu menu={menu} />;
                  
                }
                return liElementList;
            })
        )
    }

    const CustomDropDownToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
          href="#/nothing"
          ref={ref}
          onClick={e => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}
        </a>
    ));

    return (
        <nav id="sidebar" className="sidebar-wrapper">
            <div className="sidebar-content">
                <Scrollbars
                    renderThumbVertical={ renderCustomHorizontalThumb }>
                    <div className="sidebar-item sidebar-brand">
                        <a href="#/header">Finance</a>
                    </div>
                    <div className="sidebar-item sidebar-header d-flex flex-nowrap">
                        <div className="user-pic">
                            <img className="img-responsive img-rounded" src={userImage} alt="User " />
                        </div>
                        <div className="user-info">
                            <span className="user-name">Jhon 
                                <strong> Smith</strong>
                            </span>
                            <span className="user-role"> Finance</span>
                            <span className="user-status">
                                <i className="fa fa-circle"></i>
                                <span> Online</span>
                            </span>
                        </div>
                    </div>
                    <div className=" sidebar-item sidebar-menu">
                         <ul>
                           {renderSideBarMenuItem()}
                        
                        </ul>
                    </div>
                </Scrollbars>
            </div>
        </nav>
    )
}

export default SideBarMenu;
