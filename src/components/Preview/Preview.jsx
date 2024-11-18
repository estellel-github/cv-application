import { useCV } from "../../UseCV";

function Preview() {
  const { generalInfo, educationList, experienceList } = useCV();

  return (
    <>
      <div>
        <section className="personalDetails">
          <p className="fullName">{generalInfo.fullName}</p>
          <div className="contactDetails">
            <div className="email">{generalInfo.email}</div>
            <div className="phone">{generalInfo.phoneNumber}</div>
            <div className="address">{generalInfo.address}</div>
          </div>
        </section>
        <section className="resumeSection">
          <h3>Education</h3>
          {educationList.map((edu) => (
            <div key={edu.id}>
              <p>
                <strong>{edu.school}</strong> - {edu.degree}
              </p>
              <p>
                <em>{edu.location}</em>
              </p>
              <p>
                From {edu.startDate} {edu.endDate ? `to ${edu.endDate}` : ""}
              </p>
            </div>
          ))}
        </section>
        <section className="resumeSection">
          <h3>Experience</h3>
          {experienceList.map((exp) => (
            <div key={exp.id}>
              <p>
                <strong>{exp.company}</strong> - {exp.position}
              </p>
              <p>
                <em>{exp.location}</em>
              </p>
              <p>
                {exp.startDate} {exp.endDate ? `to ${exp.endDate}` : ""}
              </p>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export { Preview };
