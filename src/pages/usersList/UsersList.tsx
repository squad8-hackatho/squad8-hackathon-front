/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import { Dropdown } from '../../components/Dropdown';
import { TopBarPattern } from '../pattern';
import { MentorCard } from '../../components/MentorCard';
import { Filter, Mentors } from './styles';
import { NewDropdown } from '../../components/NewDropdown';
import { getUsers } from '../../services/services';

function UsersList() {
  const levels = ['Trainee', 'Júnior', 'Pleno', 'Sênior'];
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState('');
  const [size, setSize] = useState(6);
  const [dataArr, setDataArr] = useState<any[]>([]);

  useEffect(() => {
    async function get() {
      const { data }: any = await getUsers(
        `/profile/all?page=${page}&size=${size}&sort=${sort}`
      );
      setDataArr(data.content);
    }
    get();
  }, [page, sort, size]);

  const getCards = () => {
    return dataArr.map((user) => {
      return (
        <MentorCard
          key={uuidv4()}
          name={user.userName}
          occupation={user.professionList}
          level={levels[0]}
          tags={user.expertiseList}
          bioDescription={user.bio}
        />
      );
    });
  };

  return (
    <main>
      <TopBarPattern flag />
      <Filter>
        <NewDropdown />
      </Filter>
      <Mentors>{getCards()}</Mentors>
    </main>
  );
}

export default UsersList;
