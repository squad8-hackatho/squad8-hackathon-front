/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import { Dropdown } from '../../components/Dropdown';
import { TopBarPattern } from '../pattern';
import { MentorCard } from '../../components/MentorCard';
import {
  Filter,
  Mentors,
  Pages,
  Button,
  NumberPage,
  Select,
  Section,
} from './styles';
import { NewDropdown } from '../../components/NewDropdown';
import { getUsers } from '../../services/services';

function UsersList() {
  const levels = ['Trainee', 'Júnior', 'Pleno', 'Sênior'];
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [sort, setSort] = useState('');
  const [size, setSize] = useState(1);
  const [dataArr, setDataArr] = useState<any[]>([]);

  useEffect(() => {
    async function get() {
      const { data }: any = await getUsers(
        `/profile/all?page=${page}&size=${size}&sort=${sort}`
      );
      // console.log(data);
      if (data) {
        setDataArr(data.content);
        setTotalPages(data.totalPages);
      }
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

  const getOptions = () => {
    const values = [1, 2, 3];
    return values.map((item) => {
      return <option value={item}>{item}</option>;
    });
  };

  const getPages = () => {
    const arr: any[] = [''];
    for (let i = 0; i < totalPages; i += 1) {
      arr.push(
        <Button
          onClick={() => {
            setPage(i);
          }}
        >
          {i + 1}
        </Button>
      );
    }
    return arr;
  };

  return (
    <main>
      <TopBarPattern flag />
      <Filter>
        <NewDropdown />
      </Filter>
      <Mentors>{getCards()}</Mentors>

      <Section>
        <NumberPage>
          <Select
            onChange={(e) => {
              setSize(parseInt(e.target.value, 10));
            }}
          >
            {getOptions()}
          </Select>
        </NumberPage>
        <Pages>{getPages()}</Pages>
      </Section>
    </main>
  );
}

export default UsersList;
