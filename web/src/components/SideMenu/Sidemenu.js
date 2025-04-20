import React from "react";
import './SideMenu.css';
import Avatar from "../../assets/avatar";

export const SideMenu = ()=>{
    return(
        <aside className='sidemenu'>                      
            <div className='sidemenu-button'>            
                <div className="avatar">
                    <Avatar />
                </div>

                <div>
                    ChatGPT
                    <span className="tooltip-text">Novo chat</span>
                </div>
            </div>
        </aside>
    )
}