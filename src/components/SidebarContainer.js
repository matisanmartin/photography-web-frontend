import React from 'react'
import Sidebar from './Sidebar'

const SidebarContainer = ({items}) => {
    return (
        <div>
            <Sidebar
                items={items}
            />
        </div>
    )
}

export default SidebarContainer
