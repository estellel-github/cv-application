import { createContext, useState } from "react";

const CVContext = createContext();

function CVProvider({ children }) {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [educationList, setEducationList] = useState([]);
  const [currentEducation, setCurrentEducation] = useState({
    id: null,
    school: "",
    location: "",
    degree: "",
    startDate: "",
    endDate: "",
  });

  const handleEditEducation = (id) => {
    const educationToEdit = educationList.find((edu) => edu.id === id);
    setCurrentEducation(educationToEdit);
  };

  const handleSaveEducation = (updatedEducation) => {
    if (updatedEducation.id) {
      setEducationList((prevList) =>
        prevList.map((edu) =>
          edu.id === updatedEducation.id ? updatedEducation : edu
        )
      );
    } else {
      setEducationList((prevList) => [
        ...prevList,
        { ...updatedEducation, id: Date.now().toString() },
      ]);
    }
    handleCancelEditEducation();
  };

  const handleCancelEditEducation = () => {
    setCurrentEducation({
      id: null,
      school: "",
      location: "",
      degree: "",
      startDate: "",
      endDate: "",
    });
  };

  const handleDeleteEducation = (id) => {
    setEducationList((prevList) => prevList.filter((edu) => edu.id !== id));
    handleCancelEditEducation();
  };

  const [experienceList, setExperienceList] = useState([]);
  const [currentExperience, setCurrentExperience] = useState({
    id: null,
    company: "",
    location: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleEditExperience = (id) => {
    const experienceToEdit = experienceList.find((exp) => exp.id === id);
    setCurrentExperience(experienceToEdit);
  };

  const handleSaveExperience = (updatedExperience) => {
    if (updatedExperience.id) {
      setExperienceList((prevList) =>
        prevList.map((exp) =>
          exp.id === updatedExperience.id ? updatedExperience : exp
        )
      );
    } else {
      setExperienceList((prevList) => [
        ...prevList,
        { ...updatedExperience, id: Date.now().toString() },
      ]);
    }
    handleCancelEditExperience();
  };

  const handleCancelEditExperience = () => {
    setCurrentExperience({
      id: null,
      company: "",
      location: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  const handleDeleteExperience = (id) => {
    setExperienceList((prevList) => prevList.filter((exp) => exp.id !== id));
    handleCancelEditExperience();
  };

  const value = {
    generalInfo,
    setGeneralInfo,
    educationList,
    setEducationList,
    currentEducation,
    setCurrentEducation,
    handleEditEducation,
    handleSaveEducation,
    handleCancelEditEducation,
    handleDeleteEducation,
    experienceList,
    setExperienceList,
    currentExperience,
    setCurrentExperience,
    handleEditExperience,
    handleSaveExperience,
    handleCancelEditExperience,
    handleDeleteExperience,
  };

  return <CVContext.Provider value={value}>{children}</CVContext.Provider>;
}

export { CVProvider, CVContext };
