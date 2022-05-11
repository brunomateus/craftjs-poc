// components/user/Container.js
import React from "react";
import { Grid, Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import { useNode } from "@craftjs/core";
import { FormControl, FormLabel, Slider } from "@material-ui/core";
import ColorPicker from "material-ui-color-picker";

export const Container = ({
  background,
  padding = 0,
  children,
  direction = "row",
  ...props
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Grid
      container
      item
      xs
      ref={(ref) => connect(drag(ref))}
      direction={direction}
      style={{ margin: "5px 0", background, padding: `${padding}px` }}
      {...props}
    >
      {children}
    </Grid>
  );
};

export const ContainerSettings = () => {
  const {
    background,
    padding,
    direction,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
    direction: node.data.props.direction,
  }));
  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Background</FormLabel>
        <ColorPicker
          value={background}
          onChange={(color) => {
            setProp((props) => (props.background = color));
          }}
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
        <Slider
          value={padding}
          onChange={(_, value) => setProp((props) => (props.padding = value))}
        />
      </FormControl>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Direction</FormLabel>
        <RadioGroup
          value={direction}
          onChange={(e) =>
            setProp((props) => (props.direction = e.target.value))
          }
        >
          <FormControlLabel
            label="Row"
            value="row"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Column"
            value="column"
            control={<Radio size="small" color="primary" />}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export const ContainerDefaultProps = {
  background: "#ffffff",
  padding: 3,
  direction: "column",
};

Container.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};
