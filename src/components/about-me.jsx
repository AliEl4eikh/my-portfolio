import Image from "next/image";

export const About = () => {
  return (
    <div className="about" id="about-me">
      <div className="container">
        <div className="text">
          <h2 className="section-title">About Ali</h2>
          <p>
            I am a full-time front-end developer with over 2 years of experience
            in building dynamic and engaging web experiences. I have a strong
            background in HTML, CSS, JavaScript, and TypeScript, and I am
            proficient in using modern frameworks like React.js, Redux, and
            Next.js. I have experience in using Material-UI and Tailwind CSS for
            styling and Jest and Cypress for testing. I am comfortable using Git
            for version control and team collaboration. I am available for 40+
            hours a week, and I am committed to delivering high-quality,
            responsive, and user-friendly websites. I am ready to take on new
            challenges and continuously learn and improve my skills.
          </p>
          <a href="https://drive.google.com/file/d/157j3livM9hqbIlEyHfMOOsDJZ6YymRp2/view?usp=sharing" target="_blank" className="download-cv">Download CV</a>
        </div>
        <Image
          src={"/images/profile-pic.jpeg"}
          alt="ali's photo"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};
