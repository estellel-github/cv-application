import { EducationView } from "./components/Output/EducationView";
import { GeneralInfoView } from "./components/Output/GeneralInfoView";
import { ExperienceView } from "./components/Output/ExperienceView";
import { Preview } from "./components/Preview/Preview";
import { CVProvider } from "./CVContext";
import "./styles/App.css";

function App() {
  return (
    <CVProvider>
      <div className="app-container">
        <div className="form-section">
          <GeneralInfoView />
          <EducationView />
          <ExperienceView />
        </div>
        <div className="preview-section">
          <Preview />
        </div>
      </div>
    </CVProvider>
  );
}

export default App;
