import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Main, Button, Form, P, H2 } from './styles';
import RegisterPartOne from './RegisterPartOne';
import RegisterPartTwo from './RegisterPartTwo';
import { CreateAccount } from './CreateAccountPost';

function Register() {
  const [name, setName] = useState('');
  // const [bio, setBio] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [next, setNext] = useState(false);
  const [cargo, setCargo] = useState('');
  const [area, setArea] = useState('');
  const [expertise, setExpertise] = useState([]);
  const [level, setLevel] = useState('');

  const onSubmit = () => {
    const submit = CreateAccount({
      name,
      email,
      area,
      level,
      expertise,
      cargo,
    });
    console.log(submit, password);
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
            setCargo={setCargo}
            setArea={setArea}
            setSkills={setExpertise}
            setLevel={setLevel}
            onSubmit={onSubmit}
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
