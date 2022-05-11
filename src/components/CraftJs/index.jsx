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

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    background: "rgb(252, 253, 253)",
  },
}));

export default function CraftJs() {
  const classes = useStyles();

  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
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
        }}
      >
        <Topbar />
        <Grid container spacing={5} style={{ paddingTop: "10px" }}>
          <Grid item xs>
            <Frame>
              <Element is={Container} padding={5} background="#eee" canvas>
                <Card />
                <Button size="small" variant="contained" color="primary">
                  Click
                </Button>
                <Text size="small" text="Hi world!" />
                <Element is={Container} padding={2} background="#999" canvas>
                  <Text size="small" text="It's me again!" />
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
