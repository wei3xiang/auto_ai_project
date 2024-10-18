import React from "react";
import SearchForm from "./SearchForm";
import CreatForm from "./CreateForm";
import UpdateForm from "./UpdateForm";
import RemoveForm from "./RemoveForm";
import DetailForm from "./DetailForm";
import List from "./List";
import { PageContainer } from "@ant-design/pro-layout";
import { Space } from "antd";
import "./index.less";

const Index = (props) => {
  return (
    <PageContainer header={{ title: "" }} className="bg">
      <div className="searchBg">
        <SearchForm />
      </div>
      <div className="listBg">
        <List />
      </div>
      <CreatForm />
      <UpdateForm />
      <RemoveForm />
      <DetailForm />
    </PageContainer>
  );
};

export default Index;
