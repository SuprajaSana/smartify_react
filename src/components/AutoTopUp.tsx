import {
  Container,
  Box,
  Switch,
  SwitchProps,
  styled,
  Slider,
  Button,
  ButtonProps,
} from "@mui/material";
import { useState } from "react";

//Amount of credits to display
const credits = [
  {
    value: 5,
    label: "$5",
  },
  {
    value: 10,
    label: "$10",
  },
  {
    value: 15,
    label: "$15",
  },
  {
    value: 20,
    label: "$20",
  },
  {
    value: 25,
    label: "$25",
  },
  {
    value: 30,
    label: "$30",
  },
];

//Switch to toggle the settings
const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 37,
  height: 20,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 1,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 18,
    height: 18,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

//Slider to slide the credits
const PrettoSlider = styled(Slider)({
  color: "#aa00ff",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "5px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
});

//Button to confiem the auto-purchase
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText("#aa00ff"),
  backgroundColor: "#aa00ff",
  "&:hover": {
    backgroundColor: "#aa00ff",
  },
}));

const AutoTopUp = () => {
  //state to toggle the settings
  const [toggle, setToggle] = useState(true);
  //state to set the credits by using slider
  const [cred, setCred] = useState(10);

  //function to get the values from slider
  function valuetext(value: number) {
    setCred(value);
    return `${value} credits`;
  }

  return (
    <Container fixed>
      <div
        style={{
          width: "100%",
          minWidth: "1000px",
          backgroundColor: "white",
          marginTop: "200px",
          border: "1px solid white",
          borderRadius: "13px",
        }}
      >
        <div style={{ marginLeft: "75px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
            }}
          >
            <h2>Setup Auto Top-up</h2>
            <div style={{ marginTop: "20px", marginLeft: "15px" }}>
              <IOSSwitch
                sx={{ m: 1 }}
                checked={toggle}
                onChange={() => setToggle(!toggle)}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
              textAlign: "start",
              maxWidth: "850px",
            }}
          >
            <span>
              Once the credit goes to below a maximum threshold{" "}
              <span style={{ color: "#aa00ff", fontWeight: "bold" }}>$0 </span>
              we will auto purchase{" "}
              <span style={{ color: "#aa00ff", fontWeight: "bold" }}>
                1200{" "}
              </span>{" "}
              credits and add them to your account{" "}
              <a style={{ fontWeight: "bold", textDecoration: "underline" }}>
                Learn more
              </a>
            </span>
          </div>
          {!toggle && <div style={{ padding: "20px" }}></div>}
          {toggle && (
            <div style={{ width: "900px", marginTop: "30px" }}>
              <PrettoSlider
                aria-label="credits slider"
                defaultValue={10}
                getAriaValueText={valuetext}
                step={5}
                marks={credits}
                min={5}
                max={33}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "0px",
                }}
              >
                <span style={{ marginRight: "70px" }}>500 credits</span>
                <span style={{ marginRight: "75px" }}>1200 credits</span>
                <span style={{ marginRight: "75px" }}>1700 credits</span>
                <span style={{ marginRight: "75px" }}>2500 credits</span>
                <span style={{ marginRight: "75px" }}>3800 credits</span>
                <span>5000 credits</span>
              </div>
            </div>
          )}
          {toggle && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "start",
                marginBottom: "30px",
                marginTop: "50px",
              }}
            >
              <ColorButton
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  console.log("$" + cred);
                }}
              >
                Confirm auto-purchase
              </ColorButton>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default AutoTopUp;
