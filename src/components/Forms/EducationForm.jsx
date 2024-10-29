import { useCV } from "../../UseCV";
import { useEffect } from "react";

function EducationForm({ editId, onSave, onCancel }) {
  const { currentEducation, setCurrentEducation, handleSaveEducation } =
    useCV();

  useEffect(() => {
    if (!editId) {
      setCurrentEducation({
        id: null,
        school: "",
        location: "",
        degree: "",
        startDate: "",
        endDate: "",
      });
    }
  }, [editId, setCurrentEducation]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEducation((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSaveEducation(currentEducation);
    onSave(currentEducation);
  };

  return (
    <div>
      <h3>{editId ? "Edit Education" : "Add Education"}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>School</label>
          <input
            type="text"
            name="school"
            value={currentEducation.school}
            onChange={handleChange}
            placeholder="Enter school name"
          />
        </div>
        <div>
          <label>Location (optional)</label>
          <input
            type="text"
            name="location"
            value={currentEducation.location}
            onChange={handleChange}
            placeholder="Enter location"
          />
        </div>
        <div>
          <label>Degree</label>
          <input
            type="text"
            name="degree"
            value={currentEducation.degree}
            onChange={handleChange}
            placeholder="Enter degree"
          />
        </div>
        <div>
          <label>Start Date (optional)</label>
          <input
            type="date"
            name="startDate"
            value={currentEducation.startDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>End Date (optional)</label>
          <input
            type="date"
            name="endDate"
            value={currentEducation.endDate}
            onChange={handleChange}
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

export default EducationForm;
