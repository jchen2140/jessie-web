import Navbar from '../components/Navbar';

export default function Experiences() {
    const experiences = [
      {
        role: "Software Developer",
        company: "Princeton University Robotics Club - Bionics Team",
        duration: "September 2024 - Present",
        description: "Contribute to the development of an advanced myoelectric prosthetic hand by programming muscle movement using Arduino; Enhance the prosthetic’s adaptability through machine learning integration, enabling precise, personalized responses to user muscle signals"
      },
      {
        role: "Innovation Developer Intern",
        company: "Blue Shield of California",
        duration: "June 2024 - August 2024",
        description: "* Contributed to automating the prior authorization process in healthcare through the successful implementation of Da Vinci guidelines, improving efficiency and accuracy of requirements for a service; Supported the digitalization of Member Health Record on mobile applications, impacting over 4.65 million members and enhancing accessibility and user experience; Performed testing on the Member Health Record portal to ensure its defect-free operation and compatibility on any device",
      },
      {
        role: "Web Developer",
        company: "The Trenton Project at Princeton University",
        duration: "December 2023 - May 2024",
        description: "Utilized WebFlow to design and launch a fully functional website for the Trenton Project; Applied advanced imagine resizing and editing techniques using Adobe Photoshop to enhance the visual appeal of the website, resulting in a 25% increase in user satisfaction based on feedback; Collaborated with Michael Graves and Associates’ design team to uphold design specifications for the Harlan Joseph Peace Park",
      },
    ];
  
    return (
    <>
      <Navbar />
      <main>
        <h1>Experiences</h1>
        <ul>
          {experiences.map((experience, index) => (
            <li key={index} style={{ marginBottom: "20px" }}>
              <h2>{experience.role}</h2>
              <h3>{experience.company}</h3>
              <p><strong>Duration:</strong> {experience.duration}</p>
              <p>{experience.description}</p>
            </li>
          ))}
        </ul>
      </main>
      </>
    );
  }
  