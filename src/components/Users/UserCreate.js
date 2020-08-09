import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

import UserService from '../../services/UserService';

const UserCreate = () => {
  const history = useHistory();
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleOnChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const response = await UserService.addUser(user);

    console.log(response);
    history.push('/users');
  };

  return (
    <>
      <h1>Create User</h1>
      <Form onSubmit={handleOnSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Juan Perez" onChange={handleOnChange} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="jperez@sample.com" onChange={handleOnChange} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Ingrese su password"
            onChange={handleOnChange}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </>
  );
};

export default UserCreate;
