import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as ImIcons from 'react-icons/im';

export const SidebarData = [
  {
    title: 'Início',
    path: '/usersList',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Meus agendamentos',
    path: '/',
    icon: <BsIcons.BsCalendarCheck />,
  },
  {
    title: 'Sair',
    path: '/',
    icon: <ImIcons.ImExit />,
  },
]