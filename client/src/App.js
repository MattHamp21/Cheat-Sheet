import { Route, Routes } from "react-router-dom";
import "./App.css";
import PageWrapper from "./PageWrapper";

import Home from "./Home";
import Users from "./User";

// Routes and route will display the element you have and you can link paths between files
function App() {
  return (
    <Routes>
      <Route element={<PageWrapper />}>
        <Route index element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Route>
    </Routes>
  );
}

export default App;
