import React from "react";
import SearchForm from "./SearchForm";
import CreatForm from "./CreateForm";
import UpdateForm from "./UpdateForm";
import RemoveForm from "./RemoveForm";
import DisableForm from "./DisableForm";
import List from "./List";
import { PageContainer } from "@ant-design/pro-layout";
import "./bFoo.less";

const Index = (props) => {
  return (
    <PageContainer header={{ title: "" }}>
      <div>
        <div className="searchBg">
          <SearchForm />
        </div>
        <div className="listBg">
          <List />
        </div>
      </div>
      <CreatForm />
      <UpdateForm />
      <RemoveForm />
      <DisableForm />
    </PageContainer>
  );
};

export default Index;
