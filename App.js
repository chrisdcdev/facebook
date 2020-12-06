import React from "react";

import { ScrollView, StatusBar } from "react-native";

import styled from "styled-components/native";
import AppBar from "./components/AppBar";
import ToolBar from "./components/ToolBar";
import Users from "./components/User";

const Container = styled.SafeAreaView`
  flex: 1;
`;

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Container>
        <ScrollView>
          <AppBar />
          <ToolBar/>
          <Users/>
        </ScrollView>
      </Container>
    </>
  );
};

export default App;
