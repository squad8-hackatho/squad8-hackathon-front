import React, { useEffect, useState } from 'react';
import { RiEqualizerFill } from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TopBarUserList } from '../../components/topBar';
import { MentorCard } from '../../components/MentorCard';
import Loading from '../../components/Loading';
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
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [size, setSize] = useState('6');
  const [sortByName, setSortByName] = useState('');
  const [selectedSkillsToFilter, setSelectedSkillsToFilter] = useState([
    { area: 'null', technologie: 'null' },
    { area: 'null', technologie: 'null' },
  ]);
  const [skill1, setSkill1] = useState({ area: 'null', technologie: 'null' });
  const [skill2, setSkill2] = useState({ area: 'null', technologie: 'null' });
  const [loading, setLoading] = useState(true);
  const [dataArr, setDataArr] = useState<any[]>([]);
  const currentUser = useSelector((state: any) => {
    return state;
  });
  const [showFilterModal, setShowFilterModal] = useState(false);

  useEffect(() => {
    async function get() {
      if (sortByName === '') {
        const { data, isFetching }: any = await getUsers(
          `/profiles/findall?toExcludeProfileEmail=${currentUser.user.email}&page=${page}&size=${size}`,
          currentUser.authorization
        );
        if (data) {
          setDataArr(data.content);
          setLoading(isFetching);
          setTotalPages(data.totalPages);
        }
      }
    }
    get();
  }, [page, size, sortByName === '']);

  useEffect(() => {
    async function getBySkills() {
      const { data, isFetching }: any = await getUsers(
        `/profiles/findbyskill?firstSkill=${selectedSkillsToFilter[0].technologie}&secondSkill=${selectedSkillsToFilter[1].technologie}&filterXP=null&toExcludeProfileEmail=${currentUser.user.email}&page=${page}&size=${size}`,
        currentUser.authorization
      );
      if (data) {
        setDataArr(data.content);
        setLoading(isFetching);
        setTotalPages(data.totalPages);
      }
    }
    getBySkills();
  }, [selectedSkillsToFilter]);

  useEffect(() => {
    async function getByName() {
      if (sortByName !== '') {
        const { data, isFetching }: any = await getUsers(
          `/profiles/findbyname?name=${sortByName}&toExcludeProfileEmail=${currentUser.user.email}&page=${page}&size=${size}`,
          currentUser.authorization
        );
        if (data) {
          setDataArr(data.content);
          setLoading(isFetching);
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

      {loading ? (
        <Loading />
      ) : (
        <>
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
              {totalPages > 0 ? (
                <NumberPage>
                  <Select
                    onChange={(e) => {
                      setSortByName('');
                      setSize(e.target.value);
                    }}
                  >
                    {getOptions()}
                  </Select>
                </NumberPage>
              ) : null}
              <Pages>{getPages()}</Pages>
            </Section>
          </PaginationWrapper>
        </>
      )}
    </Main>
  ) : (
    <Navigate to="/login" />
  );
}

export default UsersList;
