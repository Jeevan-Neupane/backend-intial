import React from "react";
import { HomePageDiv } from "../style/Container";
import UserForm from "../components/userForm/UserForm";

function HomePage() {
  return (
    <HomePageDiv>
      <UserForm />
    </HomePageDiv>
  );
}

export default HomePage;
