import React from 'react'
import { Menubar } from 'primereact/menubar';
import logo from "public/logo.png"

const Header: React.FC = () => {
  const items = [
    {
      label: 'New User',
      icon: 'pi pi-fw pi-user-plus'
    },
    {
      label: 'New Device',
      icon: 'pi pi-plus-circle'
    },
    {
      label: 'Users',
      icon: 'pi pi-users'
    },
    {
      label: 'Devices',
      icon: 'pi pi-fw pi-mobile'
    },
    {
      label: 'Agencies',
      icon: 'pi pi-map-marker'
    }
  ];

  return (
    <div>
      <nav>
        <div className="nav-limit">
          <div className="logo">
            <img src="/logo.png" />
          </div>
          <ul className='nav-links'>
            {items.map(item => (
              <li>{item.label} <i className={item.icon}></i></li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header