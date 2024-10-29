import { useState } from "react";
import ExperienceForm from "../Forms/ExperienceForm";
import { useCV } from "../../UseCV";

function ExperienceView() {
  const { experienceList, handleEditExperience, handleDeleteExperience } =
    useCV();

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleAddClick = () => {
    setEditId(null);
    setIsEditing(true);
  };

  const handleEditClick = (id) => {
    handleEditExperience(id);
    setEditId(id);
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    setEditId(null);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div>
      <h1>Experience</h1>
      {!isEditing ? (
        <>
          <ul>
            {experienceList.map((exp) => (
              <li key={exp.id}>
                <strong>{exp.company}</strong> - {exp.position}
                <br />
                <em>{exp.location}</em>
                <br />
                {exp.startDate} {exp.endDate ? `to ${exp.endDate}` : ""}
                <br />
                {exp.description}
                <button onClick={() => handleEditClick(exp.id)}>Edit</button>
                <button onClick={() => handleDeleteExperience(exp.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <button onClick={handleAddClick}>Add Experience</button>
        </>
      ) : (
        <ExperienceForm
          editId={editId}
          onSave={handleSaveClick}
          onCancel={handleCancelClick}
        />
      )}
    </div>
  );
}

export { ExperienceView };
