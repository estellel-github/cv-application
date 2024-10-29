import { useCV } from "../../UseCV";
import { useEffect } from "react";

function ExperienceForm({ editId, onSave, onCancel }) {
  const { currentExperience, setCurrentExperience, handleSaveExperience } =
    useCV();

  useEffect(() => {
    if (!editId) {
      setCurrentExperience({
        id: null,
        company: "",
        location: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      });
    }
  }, [editId, setCurrentExperience]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentExperience((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSaveExperience(currentExperience);
    onSave(currentExperience);
  };

  return (
    <div>
      <h3>{editId ? "Edit Experience" : "Add Experience"}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Company</label>
          <input
            type="text"
            name="company"
            value={currentExperience.company}
            onChange={handleChange}
            placeholder="Enter company name"
          />
        </div>
        <div>
          <label>Location (optional)</label>
          <input
            type="text"
            name="location"
            value={currentExperience.location}
            onChange={handleChange}
            placeholder="Enter location"
          />
        </div>
        <div>
          <label>Position</label>
          <input
            type="text"
            name="position"
            value={currentExperience.position}
            onChange={handleChange}
            placeholder="Enter position"
          />
        </div>
        <div>
          <label>Start Date (optional)</label>
          <input
            type="date"
            name="startDate"
            value={currentExperience.startDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>End Date (optional)</label>
          <input
            type="date"
            name="endDate"
            value={currentExperience.endDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description (optional)</label>
          <textarea
            name="description"
            value={currentExperience.description}
            onChange={handleChange}
            placeholder="Describe your responsibilities"
          />
        </div>
        <button type="submit">{editId ? "Save" : "Add"}</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export { ExperienceForm };
