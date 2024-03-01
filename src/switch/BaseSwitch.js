import { Switch as MuiSwitch, styled } from "@mui/material";

import * as colors from "../colors"

const Switch = (props) => {
  const { size } = props

  const getSize = () => {
    const mapSize = {
      "md": {
        width: 48,
        height: 24,
        mt: 2,
        ml: 3,
        transform: 'translateX(22px)',
      },
      "sm": {
        width: 36,
        height: 18,
        mt: 1,
        ml: 2,
        transform: 'translateX(16px)',
      }
    }
    return mapSize[size ?? "md"]
  }

  return <StyledSwitch {...props} {...getSize()} />
}

const StyledSwitch = styled((props) => (
  <MuiSwitch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))((props) => ({
  width: props.width,
  height: props.height,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    marginTop: props.mt,
    marginLeft: props.ml,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: props.transform,
      color: colors.white,
      "& + .MuiSwitch-track": {
        backgroundColor: colors.primary001,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
        color: colors.primary004
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: colors.primary001,
      border: `6px solid ${colors.white}`,
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: colors.white,
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.5,
      color: colors.gray2
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: props.width === 48 ? 20 : 15,
    height: props.height === 24 ? 20 : 15,
  },
  "& .MuiSwitch-track": {
    borderRadius: 24,
    backgroundColor: colors.gray3,
    opacity: 1,
    transition: props.theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default Switch;