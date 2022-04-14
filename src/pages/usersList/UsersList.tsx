import React, { useEffect, useState } from 'react';
import { RiEqualizerFill } from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TopBarUserList } from '../../components/topBar';
import { MentorCard } from '../../components/MentorCard';
import {
  Filter,
  Mentors,
  Pages,
  Button,
  NumberPage,
  Select,
  Section,
  Main,
  ButtonFilter,
  FilterWrapper,
  PaginationWrapper,
  MentorsWrapper,
} from './styles';
import { getUsers } from '../../services/services';
import { SkillFilter } from '../../components/SkillFilter';

function UsersList() {
  // const levels = ['Trainee', 'Júnior', 'Pleno', 'Sênior'];
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [sort, setSort] = useState('');
  const [size, setSize] = useState('6');
  const [sortByName, setSortByName] = useState('');
  const [selectedSkillsToFilter, setSelectedSkillsToFilter] = useState([
    { area: 'null', technologie: 'null' },
    { area: 'null', technologie: 'null' },
  ]);
  const [skill1, setSkill1] = useState({ area: 'null', technologie: 'null' });
  const [skill2, setSkill2] = useState({ area: 'null', technologie: 'null' });
  const [dataArr, setDataArr] = useState<any[]>([]);
  const currentUser = useSelector((state: any) => {
    return state.user;
  });

  const [showFilterModal, setShowFilterModal] = useState(false);

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
    async function getBySkills() {
      const { data }: any = await getUsers(
        `/profiles/findbyskill?firstSkill=${selectedSkillsToFilter[0].technologie}&secondSkill=${selectedSkillsToFilter[1].technologie}&page=${page}&size=${size}&sort=${sort}`
      );
      if (data) {
        setDataArr(data.content);
        setTotalPages(data.totalPages);
      }
    }
    getBySkills();
  }, [selectedSkillsToFilter]);

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
    function filterByEmail(item: any) {
      if (item.email !== currentUser.user.email) {
        return true;
      }
      return false;
    }
    const dataToShow = dataArr.filter(filterByEmail);

    return dataToShow.map((user) => {
      return (
        <MentorCard
          key={uuidv4()}
          name={user.userName}
          occupation={
            user.professionList.length > 0
              ? user.professionList[0].occupation
              : ''
          }
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

  function handleSkillFilter() {
    setShowFilterModal((prev) => {
      return !prev;
    });
    setSkill1({ area: 'null', technologie: 'null' });
    setSkill2({ area: 'null', technologie: 'null' });
  }

  return currentUser.isLogged ? (
    <Main>
      <SkillFilter
        showFilterModal={showFilterModal}
        setShowFilterModal={setShowFilterModal}
        setSelectedSkillsToFilter={setSelectedSkillsToFilter}
        skill1={skill1}
        setSkill1={setSkill1}
        skill2={skill2}
        setSkill2={setSkill2}
      />
      <TopBarUserList setSortByName={setSortByName} />

      <FilterWrapper>
        <Filter>
          <ButtonFilter>
            <RiEqualizerFill
              onClick={() => {
                handleSkillFilter();
              }}
            />
            <button type="button" onClick={handleSkillFilter}>
              Filtrar
            </button>
          </ButtonFilter>
        </Filter>
      </FilterWrapper>

      <MentorsWrapper>
        <Mentors>{getCards()}</Mentors>
      </MentorsWrapper>

      <PaginationWrapper>
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
      </PaginationWrapper>
    </Main>
  ) : (
    <Navigate to="/login" />
  );
}

export default UsersList;
