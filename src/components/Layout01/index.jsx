import React from "react";
import { Text } from "../user/Text";
import { Container } from "../user/Container";
import { Card } from "../user/Card";

export const Layout01 = () => {
  return (
    <Container background={"#CFCCCC"} padding={20} direction="column">
      <Text text="Title" fontSize={20} />
      <Container background={"#CFCCCC"} padding={20} direction="row">
        <Card />
        <Card />
        <Card />
      </Container>
    </Container>
  );
};
