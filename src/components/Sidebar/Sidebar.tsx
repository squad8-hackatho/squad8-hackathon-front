import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { logout } from '../../redux/userSlice';
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
  const dispatch = useDispatch();

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
            return item.title === 'Sair' ? (
              <DropdownItem
                onClick={() => {
                  dispatch(logout());
                }}
                key={uuidv4()}
              >
                {item.icon}
                <Text>{item.title}</Text>
              </DropdownItem>
            ) : (
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
