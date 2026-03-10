interface SkillGroupProps {
  title: string;
  skills: string[];
  tagClass: 'tag-primary' | 'tag-secondary';
}

function SkillGroup({ title, skills, tagClass }: SkillGroupProps) {
  return (
    <div className="skills-group">
      <h4 className="skills-title">{title}</h4>
      <div className="skills-tags">
        {skills.map((skill, index) => (
          <span key={index} className={`tag ${tagClass}`}>{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const skillsData: SkillGroupProps[] = [
    {
      title: "Programming",
      skills: ["Java", "Kotlin", "Swift", "React Native", "Spring Boot"],
      tagClass: "tag-primary"
    },
    {
      title: "Cloud & DevOps",
      skills: ["CI/CD", "AWS", "Docker", "Kubernetes"],
      tagClass: "tag-secondary"
    },
    {
      title: "Architecture",
      skills: ["Microservices", "Event Driven", "GraphQL"],
      tagClass: "tag-secondary"
    }
  ];

  return (
    <section id="skills">
      <div className="section-header">
        <span className="material-symbols-outlined section-icon">psychology</span>
        <h3 className="section-title" style={{ fontSize: '1.25rem' }}>Core Skills</h3>
      </div>
      
      {skillsData.map((group, index) => (
        <SkillGroup key={index} {...group} />
      ))}
    </section>
  );
}
