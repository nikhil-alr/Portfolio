interface ExperienceItemProps {
  role: string;
  company: string;
  date: string;
  description: string;
  bullets: string[];
  isActive?: boolean;
}

function ExperienceItem({ role, company, date, description, bullets, isActive }: ExperienceItemProps) {
  return (
    <div className="experience-item">
      <div className={`experience-timeline-dot ${isActive ? 'active' : 'inactive'}`}></div>
      <div className="experience-header">
        <div>
          <h4 className="experience-role">{role}</h4>
          <p className="experience-company">{company}</p>
        </div>
        <span className="experience-date">{date}</span>
      </div>
      <p className="experience-desc">{description}</p>
      <ul className="experience-bullets">
        {bullets.map((bullet, idx) => (
          <li key={idx}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const experienceData = [
    {
      role: "Senior Consultant",
      company: "Thoughtworks",
      date: "Nov 2021 - Present",
      description: "Leading complex digital transformation projects. Specialized in cross-platform mobile architecture and scalable microservices.",
      bullets: [
        "Architected mobile solutions using React Native and Swift.",
        "Streamlined CI/CD pipelines for mobile deployments.",
        "Mentored cross-functional teams on agile best practices."
      ],
      isActive: true,
    },
    {
      role: "Systems Engineer",
      company: "Tata Consultancy Services (TCS)",
      date: "Feb 2019 - Nov 2021",
      description: "Developed robust backend services and integrated various third-party APIs for enterprise clients.",
      bullets: [
        "Enhanced application performance by 25% through code optimization.",
        "Implemented secure authentication modules using Spring Security."
      ],
      isActive: false,
    },
    {
      role: "Software Developer",
      company: "Keyss",
      date: "Aug 2014 - Feb 2019",
      description: "Foundational role focused on full-stack development and database management for startup-scale applications.",
      bullets: [
        "Built core product features using Java and early-stage mobile frameworks.",
        "Managed AWS infrastructure and database migrations."
      ],
      isActive: false,
    }
  ];

  return (
    <section id="experience">
      <div className="section-header">
        <span className="material-symbols-outlined section-icon">work</span>
        <h3 className="section-title">Experience</h3>
      </div>
      <div className="experience-list">
        {experienceData.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
