import React from "react";
import { ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 192px;
  flex-direction: row;
  align-items: center;
`;

const Card = styled.View`
  width: 106px;
  height: 170px;
  position: relative;
  margin-right: 8px;
`;

const CardStory = styled.Image`
  width: 100%;
  height: 170px;
  border-radius: 12px;
`;

const CardUser = styled.View`
  position: absolute;
  top: 8px;
  left: 8px;
  background: #ffffff;
  border-radius: 20px;
  width: 39px;
  height: 39px;
  align-items: center;
  justify-content: center;
`;

const Story = () => {
  return (
    <Container>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 11 }}
      >
        <Card>
          <CardStory source={require("../assets/story1.jpg")} />
          <CardUser>
            <AntDesign name="plus" size={24} color="#1777f2"/>
          </CardUser>
        </Card>
        
      </ScrollView>
    </Container>
  );
};

export default Story;
