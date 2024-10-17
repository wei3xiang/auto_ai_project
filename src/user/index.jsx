import React from 'react';
import SearchForm from './SearchForm';
import CreatForm from './CreateForm';
import UpdateForm from './UpdateForm';
import RemoveForm from './RemoveForm';
import DetailForm from './DetailForm';
import List from './List';

const Index = (props) => {
  return (
    <>
      <div>
        <SearchForm />
        <List />
      </div>
      <CreatForm />
      <UpdateForm />
      <RemoveForm />
      <DetailForm />
    </>
  );
};

export default Index;
