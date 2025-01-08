export default function Projects() {
    const projects = [
      { name: "Project 1", description: "Fraud Detection", link: "#" },
      { name: "Project 2", description: "Buffer Overrun Attack", link: "#" },
      { name: "Project 3", description: "Todo List Application", link: "#" },
      { name: "Project 4", description: "This website", link: "#" }
    ];
  
    return (
      <main>
        <h1>My Projects</h1>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <a href={project.link}>Learn More</a>
            </li>
          ))}
        </ul>
      </main>
    );
  }
  