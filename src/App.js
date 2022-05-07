// pages/index.js

import React from 'react';
import {Typography, Paper, Grid, makeStyles} from '@material-ui/core';

import { Toolbox } from './components/Toolbox';
import { SettingsPanel } from './components/SettingsPanel';
import { Topbar } from './components/Topbar';

import { Container } from './components/user/Container';
import { Button } from './components/user/Button';
import { Card, CardTop, CardBottom } from './components/user/Card';
import { Text } from './components/user/Text';
import { Editor, Frame, Element } from '@craftjs/core';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    background: 'rgb(252, 253, 253)',
  },
}));

export default function App() {

  const classes = useStyles();

  return (
    <div style={{margin: "0 auto", width: "800px"}}>
      <Typography variant="h5" align="center">A super simple page editor</Typography>
      <Editor resolver={{Card, Button, Text, Container, CardTop, CardBottom}}>
        <Topbar />
        <Grid container spacing={5} style={{paddingTop: "10px"}}>
          <Grid item xs>
          <Frame>
            <Element is={Container} padding={5} background="#eee" canvas> 
              <Card />
              <Button size="small" variant="contained" color="primary">Click</Button>
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
