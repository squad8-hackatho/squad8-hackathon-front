import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Main, Button, Form, P, H2, Article } from './styles';
import RegisterPartOne from './RegisterPartOne';
import RegisterPartTwo from './RegisterPartTwo';
import RegisterPartThree from './RegisterPartThree';
import { register } from '../../services/services';
import { fetchUser } from '../../redux/userSlice';
import Pattern from '../../components/banner/Banner';

function Register() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [pageOne, setPageOne] = useState(true);
  const [pageTwo, setPageTwo] = useState(false);
  const [pageThree, setPageThree] = useState(false);
  const [description, setDescription] = useState('');
  const [area, setArea] = useState('');
  const [numero, setNumero] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [expertise, setExpertise] = useState([]);
  const [level, setLevel] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    const links = [];
    if (numero !== '') {
      links.push({
        link: numero,
        domain: 'telefone',
      });
    }

    if (linkedin !== '') {
      links.push({
        link: linkedin,
        domain: 'linkedin',
      });
    }

    const values = {
      name,
      email,
      password,
      area,
      level,
      expertise,
      description,
      links,
      bio,
    };

    const { data, flag }: any = await register(values);
    if (flag) {
      const obj = {
        profileEmail: data.profileEmail,
        authentication: data.authentication,
      };

      const result: any = await dispatch(fetchUser(obj));

      if (result) navigate('/landing');
    }
  };

  const setPages = () => {
    if (pageOne) {
      setPageTwo(pageOne);
      setPageOne(!pageOne);
    } else if (pageTwo) {
      setPageThree(pageTwo);
      setPageTwo(!pageTwo);
    }
  };

  return (
    <Main>
      <Pattern />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          return onSubmit();
        }}
      >
        <H2>
          Technical<strong>Share</strong>
        </H2>
        {pageOne ? (
          <RegisterPartOne
            name={name}
            setName={setName}
            password={password}
            setPassword={setPassword}
            email={email}
            setEmail={setEmail}
            setPages={setPages}
          />
        ) : null}

        {pageTwo ? (
          <RegisterPartTwo
            setDescription={setDescription}
            setPages={setPages}
            setArea={setArea}
            setSkills={setExpertise}
            setLevel={setLevel}
            level={level}
            area={area}
            description={description}
          />
        ) : null}

        {pageThree ? (
          <RegisterPartThree
            setLinkedin={setLinkedin}
            setNumero={setNumero}
            setBio={setBio}
            linkedin={linkedin}
            numero={numero}
          />
        ) : null}

        <Article>
          <P>
            Já tem uma conta ?
            <Link to="/login">
              <Button type="button">Entrar</Button>
            </Link>
          </P>
        </Article>
      </Form>
    </Main>
  );
}

export default Register;
