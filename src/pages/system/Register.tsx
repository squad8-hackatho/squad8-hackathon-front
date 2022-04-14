import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Main, Button, Form, P, H2 } from './styles';
import RegisterPartOne from './RegisterPartOne';
import RegisterPartTwo from './RegisterPartTwo';
import { register } from '../../services/services';
import { fetchUser } from '../../redux/userSlice';

function Register() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [next, setNext] = useState(false);
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

    const flag = await register(values);

    if (flag) {
      const result: any = await dispatch(fetchUser(email));

      if (result) navigate('/landing');
    }
  };

  return (
    <Main>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          return onSubmit();
        }}
      >
        <H2>
          Technical<strong>Share</strong>
        </H2>
        {!next ? (
          <RegisterPartOne
            name={name}
            setName={setName}
            // setBio={setBio}
            password={password}
            setPassword={setPassword}
            email={email}
            setEmail={setEmail}
            setNext={setNext}
          />
        ) : (
          <RegisterPartTwo
            setDescription={setDescription}
            setArea={setArea}
            setSkills={setExpertise}
            setLevel={setLevel}
            setLinkedin={setLinkedin}
            setNumero={setNumero}
            area={area}
            description={description}
            level={level}
            setBio={setBio}
          />
        )}

        <P>
          Já tem uma conta ?
          <Link to="/login">
            <Button type="button">Entrar</Button>
          </Link>
        </P>
      </Form>
    </Main>
  );
}

export default Register;
