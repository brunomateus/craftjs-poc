// components/Toolbox.js
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button as MaterialButton,
  Tooltip,
} from "@material-ui/core";
import { Element, useEditor } from "@craftjs/core";
import { Container } from "./user/Container";
import { Card } from "./user/Card";
import { Button } from "./user/Button";
import { Text } from "./user/Text";
import SlateEditor from "./SlateEditor";

export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <Box px={2} py={2}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column" item>
          <Tooltip title="Button" placement="right-start">
            <MaterialButton
              ref={(ref) =>
                connectors.create(ref, <Button text="Click me" size="small" />)
              }
              variant="contained"
            >
              Button
            </MaterialButton>
          </Tooltip>
        </Grid>
        <Grid container direction="column" item>
          <Tooltip title="Text" placement="right-start">
            <MaterialButton
              ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
              variant="contained"
            >
              Text
            </MaterialButton>
          </Tooltip>
        </Grid>
        <Grid container direction="column" item>
          <Tooltip title="Container" placement="right-start">
            <MaterialButton
              ref={(ref) =>
                connectors.create(
                  ref,
                  <Element is={Container} padding={20} canvas />
                )
              }
              variant="contained"
            >
              Container
            </MaterialButton>
          </Tooltip>
        </Grid>
        <Grid container direction="column" item>
          <Tooltip title="Card" placement="right-start">
            <MaterialButton
              ref={(ref) => connectors.create(ref, <Card />)}
              variant="contained"
            >
              Card
            </MaterialButton>
          </Tooltip>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) => connectors.create(ref, <SlateEditor />)}
            variant="contained"
            data-cy="toolbox-slate"
          >
            Rich Text
          </MaterialButton>
        </Grid>
      </Grid>
    </Box>
  );
};
