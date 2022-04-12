import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import { Dropdown } from '../../components/Dropdown';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
  const [size, setSize] = useState('6');
  const [sortByName, setSortByName] = useState('');
  const [dataArr, setDataArr] = useState<any[]>([]);
  const currentUser = useSelector((state: any) => {
    return state.user;
  });

  useEffect(() => {
    async function get() {
      const { data }: any = await getUsers(
        `/profiles/findall?page=${page}&size=${size}&sort=${sort}`
      );
      if (data) {
        setDataArr(data.content);
        setTotalPages(data.totalPages);
      }
    }
    get();
  }, [page, sort, size, sortByName === '']);

  useEffect(() => {
    async function getByName() {
      if (sortByName !== '') {
        const { data }: any = await getUsers(
          `/profiles/findbyname?name=${sortByName}`
        );
        if (data) {
          setDataArr(data.content);
          setTotalPages(data.totalPages);
        }
      }
    }
    getByName();
  }, [sortByName]);

  const getCards = () => {
    return dataArr.map((user) => {
      return (
        <MentorCard
          key={uuidv4()}
          name={user.userName}
          // occupation={user.professionList}
          level={levels[0]}
          tags={user.expertiseList}
          bioDescription={user.bio}
          email={user.email}
        />
      );
    });
  };

  const getOptions = () => {
    const values = [6, 12, 18];
    return values.map((item) => {
      return (
        <option key={item} value={item}>
          {item}
        </option>
      );
    });
  };

  const getPages = () => {
    const arr: any[] = [];
    for (let i = 0; i < totalPages; i += 1) {
      arr.push(
        <Button
          key={uuidv4()}
          onClick={() => {
            setSortByName('');
            setSort('');
            setPage(i);
          }}
        >
          {i + 1}
        </Button>
      );
    }
    return arr;
  };

  return currentUser.isLogged ? (
    <main>
      <TopBarPattern flag setSortByName={setSortByName} />
      <Filter>
        <NewDropdown />
      </Filter>
      <Mentors>{getCards()}</Mentors>

      <Section>
        <NumberPage>
          <Select
            onChange={(e) => {
              setSortByName('');
              setSize(e.target.value);
              setSort('');
            }}
          >
            {getOptions()}
          </Select>
        </NumberPage>
        <Pages>{getPages()}</Pages>
      </Section>
    </main>
  ) : (
    <Navigate to="/login" />
  );
}

export default UsersList;
