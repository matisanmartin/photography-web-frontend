import React from 'react'
import SidebarItem from './SidebarItem';

const about = {
    id: '0',
    visibleDescription: 'about',
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
                key={about.id}
                item={about}
            />

        </div>
    )
}

export default Sidebar
