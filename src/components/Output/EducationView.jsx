import { useState } from "react";
import EducationForm from "../Forms/EducationForm";
import { useCV } from "../../UseCV";

function EducationView() {
  const { educationList, handleEditEducation, handleDeleteEducation } = useCV();
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleAddClick = () => {
    setEditId(null);
    setIsEditing(true);
  };

  const handleEditClick = (id) => {
    handleEditEducation(id);
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
      <h1>Education</h1>
      {!isEditing ? (
        <>
          <ul>
            {educationList.map((edu) => (
              <li key={edu.id}>
                <strong>{edu.school}</strong> - {edu.degree}
                <br />
                <em>{edu.location}</em>
                <br />
                From {edu.startDate} {edu.endDate ? `to ${edu.endDate}` : ""}
                <br />
                <button onClick={() => handleEditClick(edu.id)}>Edit</button>
                <button onClick={() => handleDeleteEducation(edu.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <button onClick={handleAddClick}>Add Education</button>
        </>
      ) : (
        <EducationForm
          editId={editId}
          onSave={handleSaveClick}
          onCancel={handleCancelClick}
        />
      )}
    </div>
  );
}

export { EducationView };
