import Image from "next/image";

export const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <Image
            src={"/images/tech-logos/html5.svg"}
            width={80}
            height={80}
            alt="tech-logo"
          />
          <Image
            src={"/images/tech-logos/css-3.svg"}
            width={80}
            height={80}
            alt="tech-logo"
          />
          <Image
            src={"/images/tech-logos/javascript.svg"}
            width={80}
            height={80}
            alt="tech-logo"
          />
          <Image
            src={"/images/tech-logos/ts-logo-256.png"}
            width={80}
            height={80}
            alt="tech-logo"
          />
          <Image
            src={"/images/tech-logos/React-Logo.wine.svg"}
            width={80}
            height={80}
            alt="tech-logo"
          />
          <Image
            src={"/images/tech-logos/redux.svg"}
            width={80}
            height={80}
            alt="tech-logo"
          />
          <Image
            src={"/images/tech-logos/next-js-seeklogo.com.svg"}
            width={80}
            height={80}
            alt="tech-logo"
          />
          <Image
            src={"/images/tech-logos/tailwindcss-logotype.svg"}
            width={100}
            height={100}
            alt="tech-logo"
          />
          <Image
            src={"/images/tech-logos/material-ui.svg"}
            width={80}
            height={80}
            alt="tech-logo"
          />
          <Image
            src={"/images/tech-logos/cypress.svg"}
            width={80}
            height={80}
            alt="tech-logo"
          />
          <Image
            src={"/images/tech-logos/jest.png"}
            width={80}
            height={80}
            alt="tech-logo"
          />
          <Image
            src={"/images/tech-logos/git.png"}
            width={100}
            height={100}
            alt="tech-logo"
          />
        </div>
      </div>
    </div>
  );
};

// const imageGrid =  {
//     margin: "0 auto",
//     width: "90%",
//     padding: "2rem 0",
//     display: "grid",
//     justifyContent: "space-evenly",
//     justifyItems: "center",
//     alignItems: "center",
//     gridTemplateColumns: "repeat(auto-fit, minmax(100px, 200px))",
//     rowGap: "2.5rem",
//     "-mozColumnGap": "1rem",
//     columnGap: "1rem"
//   }

// const imageGridImg = {
//     maxWidth: "100%",
//     height: "auto",
//     alignContent: "center"
//   }
