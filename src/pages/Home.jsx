import React from 'react';
import { Title } from '../components/home/Title';
import { AddTodo } from '../components/home/AddTodo';
import { Todos } from '../components/home/Todos';
import { User } from '../components/home/User';

export const Home = ({ email, setUser }) => {
  return (
    <div className='home'>
      <div>
        <User email={email} setUser={setUser} />
      </div>
      <div>
        <Title />
      </div>
      <div>
        <AddTodo />
      </div>
      <div>
        <Todos />
      </div>
    </div>
  );
};
