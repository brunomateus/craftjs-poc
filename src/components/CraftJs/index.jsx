import React from "react";
import { Typography, Paper, Grid, makeStyles } from "@material-ui/core";

import { Toolbox } from "../Toolbox";
import { SettingsPanel } from "../SettingsPanel";
import { Topbar } from "../Topbar";

import { Container } from "../user/Container";
import { Button } from "../user/Button";
import { Card, CardTop, CardBottom } from "../user/Card";
import { Text } from "../user/Text";
import { Editor, Frame, Element } from "@craftjs/core";
import SlateEditor from "../SlateEditor";
import { Layout01 } from "../Layout01";

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    background: "rgb(252, 253, 253)",
  },
}));

export default function CraftJs() {
  const classes = useStyles();

  return (
    <div style={{ margin: "0 auto", width: "1200px" }}>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
      <Editor
        resolver={{
          Card,
          Button,
          Text,
          Container,
          CardTop,
          CardBottom,
          SlateEditor,
          // Layout01,
        }}
      >
        <Topbar />
        <Grid container spacing={5} style={{ paddingTop: "10px" }}>
          <Grid item xs>
            <Frame>
              <Element is={Container} padding={10} background="#eee" canvas>
                <Element
                  is={Container}
                  padding={20}
                  background="#CFCCCC"
                  canvas
                >
                  <Text text="Title" fontSize={20} />
                  <Element
                    is={Container}
                    padding={0}
                    background="#CFCCCC"
                    direction="row"
                    canvas
                  >
                    <Card />
                    <Card />
                    <Card />
                  </Element>
                </Element>
                <Element
                  is={Container}
                  padding={20}
                  background="#CFCCCC"
                  canvas
                >
                  <Text text="Content" fontSize={20} />
                  <Element
                    is={Container}
                    padding={0}
                    background="#B4B2B2"
                    direction="row"
                    canvas
                  >
                    <Element
                      is={Container}
                      padding={10}
                      background="#B4B2B2"
                      canvas
                    >
                      <Text text="Content Text" fontSize={20} />
                      <Card />
                      <Card />
                    </Element>
                    <Element
                      is={Container}
                      padding={10}
                      background="#B4B2B2"
                      canvas
                    >
                      <Text text="Questions" fontSize={20} />
                      <Card />
                      <Card />
                    </Element>
                  </Element>
                </Element>
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.root}>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
