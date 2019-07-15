import React from 'react'
import SidebarItem from './SidebarItem';

const about = {
    title: 'About'
}
const Sidebar = ({items}) => {
    return (
        <div className="list-group">
            
            {items.map( item => (
                <SidebarItem  
                    key={item.id}
                    item={item}
                />
            ))}

            <SidebarItem 
                key="about"
                item={about}
            />
            
        </div>
    )
}

export default Sidebar
