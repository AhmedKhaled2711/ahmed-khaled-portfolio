/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ahmed Khaled",
  title: "Hi, I'm Ahmed Khaled",
  subTitle: emoji(
    "Android Developer 🚀 with ITI and real production experience. I specialize in building scalable Android applications using Kotlin, MVVM, Clean Architecture, and modern Android tech stack."
  ),
  resumeLink: "/Ahmed_Khaled.pdf", // هنربط الـ CV المحلي
  displayGreeting: true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AhmedKhaled",
  linkedin: "https://www.linkedin.com/in/ahmed-khaled",
  gmail: "ahmed.khaled@gmail.com",
  display: true
};


// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "ANDROID DEVELOPER FOCUSED ON CLEAN, SCALABLE & MAINTAINABLE APPS",
  skills: [
    emoji("⚡ Build production-ready Android applications using Kotlin"),
    emoji("⚡ Apply MVVM & Clean Architecture principles"),
    emoji("⚡ Integrate REST APIs using Retrofit & Coroutines"),
    emoji("⚡ Firebase Authentication, Firestore & Push Notifications"),
    emoji("⚡ Unit Testing, Git, and Agile workflows")
  ],

  softwareSkills: [
    { skillName: "Kotlin", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Android", fontAwesomeClassname: "fab fa-android" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "REST APIs", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "MVVM", fontAwesomeClassname: "fas fa-layer-group" }
  ],

  display: true
};



// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Bachelor of Computer Science",
      logo: require("./assets/images/universityLogo.png"),
      subHeader: "Faculty of Computers and Information, Menofia University",
      duration: "2019 – 2023",
      desc: "Undergraduate program focused on computer science fundamentals and software development.",
      descBullets: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Systems",
        "Graduation Project: Advising Network App (Grade: Distinct)"
      ]
    },
    {
      schoolName: "Information Technology Institute (ITI)",
      logo: require("./assets/images/itiLogo.png"),
      subHeader:
        "9-Month Professional Diploma – Native Mobile Applications Development (MCIT)",
      duration: "Oct 2023 – Jun 2024",
      desc:
        "Intensive post-graduate professional training program under the Ministry of Communications and Information Technology (MCIT), focused on real-world mobile application development.",
      descBullets: [
        "Advanced Android Development with Kotlin",
        "MVVM & Clean Architecture",
        "REST APIs, Firebase & Third-Party Integrations",
        "Graduation Project: FashionShop E-Commerce App"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Show proficiency section
  experience: [
    {
      Stack: "Android Development",
      progressPercentage: "95%"
    },
    {
      Stack: "Kotlin & Java",
      progressPercentage: "90%"
    },
    {
      Stack: "Architecture (MVVM / Clean)",
      progressPercentage: "90%"
    },
    {
      Stack: "REST APIs & Networking",
      progressPercentage: "85%"
    },
    {
      Stack: "Firebase & Backend Integration",
      progressPercentage: "80%"
    },
    {
      Stack: "UI / Material Design",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false
};


// Work experience section

const workExperiences = {
  display: true, // Show work experience section
  experience: [
    {
      role: "Android Developer",
      company: "Smart Lee",
     // companylogo: require("./assets/images/smartleeLogo.png"),
      date: "Jul 2024 – Sep 2025",
      desc:
        "Worked on a large-scale production Android application serving multiple service domains with a strong focus on clean architecture and performance.",
      descBullets: [
        "Developed and enhanced multiple service modules including Taxi, Restaurants, Hotels, Flights, and Parcel Delivery",
        "Applied MVVM and Clean Architecture principles to build scalable and maintainable features",
        "Integrated RESTful APIs and managed complex data flows across the app",
        "Collaborated with cross-functional teams and participated in code reviews and debugging",
        "Improved app performance, stability, and user experience in production"
      ]
    },
    {
      role: "Freelance Android Developer",
      company: "HealthPlate App",
      //companylogo: require("./assets/images/freelanceLogo.png"),
      date: "2023 – 2024",
      desc:
        "Built a complete Android application focused on healthy eating and personalized nutrition using modern Android technologies.",
      descBullets: [
        "Developed a full-featured Android app including BMI calculation and personalized meal plans",
        "Implemented MVVM architecture with clean separation of concerns",
        "Integrated Firebase Authentication and REST APIs",
        "Used Room database for local persistence and offline support",
        "Focused on responsive UI, performance optimization, and clean code practices"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "REAL-WORLD AND PRACTICAL ANDROID APPLICATIONS I HAVE BUILT",
  projects: [
    {
      image: require("./assets/images/shoppe.png"),
      projectName: "Shoppe – Android E-Commerce App",
      projectDesc:
        "A full-featured Android e-commerce application built with Kotlin following MVVM and Clean Architecture. The app supports product browsing, cart management, authentication, and real API integration.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/AhmedKhaled2711/Shoppe"
        }
      ]
    },
    {
      image: require("./assets/images/weather.png"),
      projectName: "Weather Application",
      projectDesc:
        "Android weather application consuming REST APIs to display real-time weather data with a clean and user-friendly interface.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/AhmedKhaled2711/WeatherApplication"
        }
      ]
    },
    {
      image: require("./assets/images/sports.png"),
      projectName: "Sports App",
      projectDesc:
        "Android application that displays sports leagues, events, teams, and players using a public sports API. Built using MVVM architecture with local caching.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/AhmedKhaled2711/SportsApp"
        }
      ]
    },
    {
      image: require("./assets/images/tictactoe.png"),
      projectName: "Tic Tac Toe – Online Multiplayer Game",
      projectDesc:
        "Online multiplayer Tic Tac Toe game using Java sockets. Includes a server-side implementation handling multiple clients concurrently.",
      footerLink: [
        {
          name: "Client App",
          url: "https://github.com/hadeer2adel/Tic-Tac-Toe-game"
        },
        {
          name: "Server App",
          url: "https://github.com/hadeer2adel/Tic-Tac-Toe-server"
        }
      ]
    }
  ],
  display: true
};



// Achievement Section
// Include certificates, talks etc

const achievementSection = { display: false };
const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };
const twitterDetails = { display: false };


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "You can download my resume to learn more about my experience",
  display: true // Set false to hide this section
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in working together or have a question? Feel free to reach out.",
  number: "+20 100 739 4856",
  email_address: "eng.ahmedkhaled.work@gmail.com"
};




const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
