/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Giuseppe Sirianni",
  title: "Hi, My name is Giuseppe A.G. Sirianni!",
  subTitle: emoji(
    "I'm an Aerospace engineer with a strong foundation in aerodynamics who's specialized in CFD development and currently working as a researcher in the field of multi-phase flows and in-flight icing solvers."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/giusirianni",
  linkedin: "https://it.linkedin.com/in/giuseppe-sirianni-3b0256134",
  gmail: "giuseppe.sirianni97@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What do I do?",
  subTitle: "I'm currently a researcher",
  skills: [
    emoji("Programming / scientific programming (C++, Python, Fortran, ...)"),
    emoji("Aerospace engineering with an emphasis on Aerodynamics"),
    emoji("Data visualization and postprocessing"),
    emoji("CFD research and development"),
    emoji("In-flight droplet tracking for ice accretion"),
    emoji("Multi-phase flows simulation using Baer-Nunziato conservation laws")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-c"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "MATLAB",
      fontAwesomeClassname: "fa-solid fa-chart-line"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "CFD",
      fontAwesomeClassname: "fa-solid fa-plane"
    },
    {
      skillName: "Fortran",
      fontAwesomeClassname: "fa-solid fa-f"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Politecnico di Milano",
      logo: require("./assets/images/polimi.png"),
      subHeader: "M.Sc. in Aeronautical Engineering",
      duration: "September 2019 - December 2021",
      desc: "Grade 110/110",
      descBullets: [
        "Ranked 7-th best 'Mechanical, aeronautical & manufacturing engineering' University in the world as of 2019, according to QS.",
        "Aerodynamics",
        "Computational Fluid Dynamics",
        "Numerical modelling of partial differential equations",
        "Structural mechanics and dynamics"
      ]
    },
    {
      schoolName: "Politecnico di Milano",
      logo: require("./assets/images/polimi.png"),
      subHeader: "B.Sc. in Aerospace Engineering",
      duration: "September 2016 - September 2019",
      desc: "Grade 104/110",
      descBullets: [
        "Ranked 7-th best 'Mechanical, aeronautical & manufacturing engineering' University in the world as of 2019, according to QS.",
        "Aerodynamics",
        "Structural mechanics",
        "Propulsion",
        "Flight & orbital mechanics"
      ]
    },
    {
      schoolName: "ITIS Città della Vittoria",
      logo: require("./assets/images/itis.jpg"),
      subHeader: "High School - Informatics Industrial Engineer",
      duration: "September 2013 - June 2016",
      desc: "Grade 100/100",
      descBullets: [
        "Programming",
        "Database management",
        "Project management"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Scientific Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "CFD simulation", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Aerodynamics",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research intern",
      company: "University of Zurich",
      companylogo: require("./assets/images/uzh.png"),
      date: "Februrary 2022 – Present",
      desc: "Researching strategies to simulate low Mach multi-phase flows using the Baer-Nunziato conservation laws",
      descBullets: [
      ]
    },
    {
      role: "Volunteer",
      company: "Dynamo Camp",
      companylogo: require("./assets/images/dynamo.png"),
      date: "April 2015 – May 2016",
      desc: "Volunteering as an entertainer and caretaker for kids with complicated health situations, that precludes them from partaking in normal 'kids activities'."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some old and on-going projects I've been involved in",
  projects: [
    {
      image: require("./assets/images/su2.png"),
      projectName: "SU2 - Particle Tracking",
      projectDesc: "An Eulerian multi-bin droplet tracker for in-flight icing simulations with a Lagrangian re-injection step for secondary droplets generated by splashing and bouncing.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/GiuSirianni/su2_multibin_pt"
        }
      ]
    },
    {
      image: require("./assets/images/su2.png"),
      projectName: "SU2 - PoliPhase",
      projectDesc: "A new unstructured solver for multi-phase flows at various Mach numbers using the Baer-Nunziato conservation laws and general equations of state",
      footerLink: [
        {
          name: "In development...",
          url: "https://su2code.github.io/"
        }
      ]
    },
    {
      image: require("./assets/images/projectnotebook.png"),
      projectName: "ProjectNotebook",
      projectDesc: "An online framework (C#) created to replace and enhance traditional notebooks using tablets, with support for note sharing & collaboration with social features through the use of Rest APIs.",
      footerLink: [
        {
          name: "Discontinued",
          url: ""
        }
      ]
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Scholar Profiles"),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "Google Scholar",
      subtitle:
        "",
      image: require("./assets/images/scholar_logo.png"),
      footerLink: [
        {
          name: "Visit",
          url: "https://scholar.google.it/citations?user=FXHP0IIAAAAJ&hl=en&oi=ao"
        }
      ]
    },
    {
      title: "Researchgate",
      subtitle:
        "",
      image: require("./assets/images/researchgate_logo.png"),
      footerLink: [
        {
          name: "Visit",
          url: "https://www.researchgate.net/profile/Giuseppe-Sirianni"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Scientific Publications",
  subtitle:
    "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://doi.org/10.2514/6.2022-3695",
      title: "Poly-dispersed Eulerian-Lagrangian particle tracking for in-flight icing applications",
      description:
        "Giuseppe A.G. Sirianni, Tommaso Bellosta, Barbara Re, Alberto Guardone - AIAA AVIATION 2022 Forum"
    },
    {
      url: "http://hdl.handle.net/10589/181669",
      title: "Mixed Eulerian-Lagrangian polydispersed 3D droplet tracking",
      description:
        "Giuseppe A.G. Sirianni, Tommaso Bellosta, Barbara Re, Alberto Guardone - M.Sc. Thesis, 2021"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Scholar Profiles",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "Google Scholar",
      subtitle: "",
      // slides_url: "",
      event_url: "https://scholar.google.it/citations?user=FXHP0IIAAAAJ&hl=en&oi=ao"
    },
    
    {
      title: "Researchgate",
      subtitle: "",
      // slides_url: "",
      event_url: "https://www.researchgate.net/profile/Giuseppe-Sirianni"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://scholar.google.it/citations?user=FXHP0IIAAAAJ&hl=en&oi=ao"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Contact me here if you need!",
  //number: "+92-0000000000",
  //email_address: "giuseppe.sirianni97@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  blogSection,
  bigProjects,
  openSource,
  achievementSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
