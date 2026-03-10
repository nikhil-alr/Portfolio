interface EducationItemProps {
  degree: string;
  school: string;
  date: string;
}

function EducationItem({ degree, school, date }: EducationItemProps) {
  return (
    <div className="education-item">
      <div>
        <h4 className="education-degree">{degree}</h4>
        <p className="education-school">{school}</p>
      </div>
      <span className="education-date">{date}</span>
    </div>
  );
}

export default function Education() {
  const educationData = [
    { degree: "M.Tech", school: "BITddddS Pune", date: "2021 - 2023" },
    { degree: "B.Tech", school: "Kurukshetra University", date: "2010 - 2014" },
  ];

  return (
    <section id="education">
      <div className="section-header">
        <span className="material-symbols-outlined section-icon">school</span>
        <h3 className="section-title">Education</h3>
      </div>
      <div className="education-card">
        <div className="education-list">
          {educationData.map((item, index) => (
            <EducationItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
