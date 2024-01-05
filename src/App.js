import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FormContext from "./context/FormContext";

const App = () => {
  const [projectName, setProjectName] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [description, setDescription] = useState("");
  const [projectsList, setProjectList] = useState([]);
  console.log(projectsList);

  const changeDescription = (value) => {
    setDescription(value);
  };

  const changeProjectLink = (value) => {
    setProjectLink(value);
  };

  const changeProjectName = (value) => {
    setProjectName(value);
  };

  const submitForm = () => {
    const newProject = {
      id: uuidv4(),
      projectName,
      projectLink,
      description,
    };
    setProjectList((prevState) => [...prevState, newProject]);
    setDescription("");
    setProjectLink("");
    setProjectName("");
    console.log("project added from the form");
  };

  return (
    <FormContext.Provider
      value={{
        changeDescription,
        changeProjectLink,
        changeProjectName,
        submitForm,
        projectName,
        projectLink,
        projectsList,
        description,
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </FormContext.Provider>
  );
};

export default App;
