import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Route, Routes } from "react-router-dom";



// import Bar from "./scenes/bar";
// import Calendar from "./scenes/calendar/calendar";
// import Contacts from "./scenes/contacts";
 import Dashboard from "./scenes/dasbboard";
// import FAQ from "./scenes/faq";
// import Form from "./scenes/form";
// import Geography from "./scenes/geography";
import AppSidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import Team from "./scenes/team";
import configData from './config.json';
import { ColorModeContext, useMode } from "./theme";
const client = new ApolloClient({
  uri: configData.SERVER_URL,
  cache: new InMemoryCache(),
});

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    
    <ColorModeContext.Provider value={colorMode}>
      <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
       
        <div className="app">
        <ProSidebarProvider>
          <AppSidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
               <Route path="/team" element={<Team />} />
             {/* <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
          </ProSidebarProvider>
        </div>
      </ThemeProvider>
      </ApolloProvider>

    </ColorModeContext.Provider>
   
  );
}

export default App;