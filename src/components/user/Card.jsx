// components/user/Card.js
import React from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import { Container } from "./Container";
import { Element, useNode } from "@craftjs/core";
import { ContainerSettings, ContainerDefaultProps } from "./Container";

// Notice how CardTop and CardBottom do not specify the drag connector. This is because we won't be using these components as draggables; adding the drag handler would be pointless.

export const CardTop = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div
      ref={connect}
      className="text-only"
      style={{
        margin: "0 5px",
        borderBottom: "1px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {children}
    </div>
  );
};

CardTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes) =>
      incomingNodes.every((incomingNode) => incomingNode.data.type === Text),
  },
};

export const CardBottom = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div ref={connect} style={{ margin: "0 5px" }}>
      {children}
    </div>
  );
};

CardBottom.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes) => incomingNodes.every((incomingNode) => true),
  },
};

export const Card = ({ background = "#FFFFFF", padding = 20 }) => {
  return (
    <Container
      background={background}
      padding={padding}
      direction="column"
      hasBorder={true}
    >
      <Element id="text" is={CardTop} canvas>
        <Text text="Title" fontSize={20} />
      </Element>
      <Element id="buttons" is={CardBottom} canvas>
        <Text text="Subtitle" fontSize={15} />
      </Element>
    </Container>
  );
};

Card.craft = {
  props: ContainerDefaultProps,
  related: {
    // Since Card has the same settings as Container, we'll just reuse ContainerSettings
    settings: ContainerSettings,
  },
};
