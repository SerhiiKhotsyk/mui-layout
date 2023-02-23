import { Box, Stack } from "@mui/material";
import { useState } from "react";
import AddButton from "./components/AddButton";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { DarkModeProvider } from "./hoc/DarkModeProvider";


function App() {
  const [isScrollVisible, setIsScrollVisible] = useState(true)
  return (
    <DarkModeProvider >
      <Box bgcolor={'background.default'} color={'text.primary'} >
        <Navbar setIsScrollVisible={setIsScrollVisible} />
        <Stack direction='row' spacing={{ xs: 0, sm: 2 }} justifyContent='space-between' >
          <Sidebar/>
          <Feed />
          <Rightbar isScrollVisible={isScrollVisible} />
        </Stack>
        <AddButton setIsScrollVisible={setIsScrollVisible} />
      </Box>
    </DarkModeProvider>
  )
}

export default App;
