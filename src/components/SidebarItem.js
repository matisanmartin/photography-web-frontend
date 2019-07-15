import React from 'react'

const SidebarItem = ({item}) => {
    return (
        <a href={item.id} className="list-group-item list-group-item-action">
            {item.title}
        </a>
    )
}

export default SidebarItem

