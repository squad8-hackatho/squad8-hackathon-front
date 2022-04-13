import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  NavIcon,
  Text,
} from './styles';

const defaultProps = {
  size: 40,
};

type Props = {
  currentUser: any;
  size?: number;
} & typeof defaultProps;

export function Sidebar({ currentUser, size }: Props) {
  const [showMenu, setShowMenu] = useState('none');
  const profileLink = `/profile/${currentUser.user.email}`;

  function handleClick() {
    if (showMenu === 'none') {
      setShowMenu('block');
    } else {
      setShowMenu('none');
    }
  }

  return (
    <Dropdown>
      <NavIcon>
        <FaIcons.FaBars
          size={size}
          onClick={() => {
            handleClick();
          }}
        />
        <DropdownContent display={showMenu}>
          <Link
            to={profileLink}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <DropdownItem>
              <AiIcons.AiOutlineUser />
              <Text>Perfil</Text>
            </DropdownItem>
          </Link>
          {SidebarData.map((item: any) => {
            return (
              <Link
                to={item.path}
                style={{ textDecoration: 'none', color: 'black' }}
                key={item.title}
              >
                <DropdownItem>
                  {item.icon}
                  <Text>{item.title}</Text>
                </DropdownItem>
              </Link>
            );
          })}
        </DropdownContent>
      </NavIcon>
    </Dropdown>
  );
}

Sidebar.defaultProps = defaultProps;
