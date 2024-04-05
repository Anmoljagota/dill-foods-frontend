import { Box } from "@chakra-ui/react";
import "./App.css";
import { Sidebar } from "./Components/Sidebar";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Box
      background={
        "url(https://www.tropitone.com/sites/default/files/styles/swatch_medium/public/swatches/finishes/curve-finish-bright-black-bbk.png?itok=qd1ITSER)"
      }
      //  h={"fit-content"}
      width={"100vw"}
    >
      <Sidebar />
    </Box>
  );
}

export default App;
