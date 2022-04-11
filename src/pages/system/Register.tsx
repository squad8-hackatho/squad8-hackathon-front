import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Main, Button, Form, P, H2 } from './styles';
import RegisterPartOne from './RegisterPartOne';
import RegisterPartTwo from './RegisterPartTwo';

function Register() {
  const [name, setName] = useState('');
  // const [bio, setBio] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [next, setNext] = useState(false);
  const [cargo, setCargo] = useState('');
  const [area, setArea] = useState('');

  const onSubmit = () => {
    console.log( name, password, email, cargo, area);
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
            setPassword={setPassword}
            setEmail={setEmail}
            password={password}
            email={email}
            setNext={setNext}
          />
        ) : (
          <RegisterPartTwo setCargo={setCargo} setArea={setArea} />
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
