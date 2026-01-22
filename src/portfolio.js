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
    "Android Developer 🚀 specializing in building production-ready mobile applications with Kotlin, Jetpack Compose, and Clean Architecture. Passionate about creating scalable, user-centric Android experiences."
  ),
  resumeLink: "/Ahmed_Khaled.pdf",
  displayGreeting: true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AhmedKhaled2711",
  linkedin: "https://www.linkedin.com/in/ahmed-khaled-611892298",
  gmail: "eng.ahmedkhaled.work@gmail.com",
  display: true
};


// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "ANDROID DEVELOPER FOCUSED ON CLEAN ARCHITECTURE & PRODUCTION-READY APPS",
  skills: [
    emoji("⚡ Build production-ready Android applications using Kotlin & Java"),
    emoji("⚡ Implement MVVM & Clean Architecture for scalable codebases"),
    emoji("⚡ Integrate RESTful APIs using Retrofit & Coroutines"),
    emoji("⚡ Firebase Authentication, Firestore & Real-time features"),
    emoji("⚡ Material Design 3 & Modern Android UI/UX"),
    emoji("⚡ Unit testing, code reviews, and Agile development practices")
  ],

  softwareSkills: [
    { skillName: "Kotlin", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Android SDK", fontAwesomeClassname: "fab fa-android" },
    { skillName: "Jetpack Compose", fontAwesomeClassname: "fas fa-mobile-alt" },
    { skillName: "MVVM", fontAwesomeClassname: "fas fa-layer-group" },
    { skillName: "Clean Architecture", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "Retrofit", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Coroutines", fontAwesomeClassname: "fas fa-sync-alt" },
    { skillName: "Room Database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Material Design", fontAwesomeClassname: "fas fa-palette" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Unit Testing", fontAwesomeClassname: "fas fa-vial" },
    { skillName: "CI/CD", fontAwesomeClassname: "fas fa-cogs" }
  ],

  display: true
};



// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Bachelor of Computer Science",
      logo: require("./assets/universityLogo.png"),
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
      logo: require("./assets/itiLogo.png"),
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
  viewSkillBars: true,
  experience: [
    {
      Stack: "Android Development",
      progressPercentage: "95%"
    },
    {
      Stack: "Kotlin",
      progressPercentage: "90%"
    },
    {
      Stack: "Java",
      progressPercentage: "85%"
    },
    {
      Stack: "MVVM & Clean Architecture",
      progressPercentage: "90%"
    },
    {
      Stack: "Jetpack Compose",
      progressPercentage: "80%"
    },
    {
      Stack: "REST APIs & Retrofit",
      progressPercentage: "85%"
    },
    {
      Stack: "Firebase & Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Material Design 3",
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
  showGithubProfile: "false",
  display: false
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "REAL-WORLD ANDROID APPLICATIONS DEMONSTRATING TECHNICAL EXPERTISE",
  projects: [
    {
      image: require("./assets/shoppe.png"),
      projectName: "Shoppe – Android E-Commerce App",
      projectDesc:
        "A full-featured Android e-commerce application built with Kotlin, Jetpack Compose, and Clean Architecture. Features include product browsing, cart management, secure authentication, payment integration, and real-time API communication with offline support.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/AhmedKhaled2711/Shoppe"
        }
      ]
    },
    {
      image: require("./assets/weather.png"),
      projectName: "Weather Application",
      projectDesc:
        "Professional weather application with modern Material Design 3 UI. Features real-time weather data, location-based forecasts, weather alerts, and 7-day predictions using OpenWeatherMap API with proper error handling.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/AhmedKhaled2711/WeatherApplication"
        }
      ]
    },
    {
      image: require("./assets/sports.jpg"),
      projectName: "Sports App",
      projectDesc:
        "Comprehensive sports application featuring live scores, team statistics, player profiles, and match schedules. Built with MVVM architecture, Room database for offline caching, and Retrofit for real-time data synchronization.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/AhmedKhaled2711/SportsApp"
        }
      ]
    },
    {
      image: require("./assets/tictactoe.png"),
      projectName: "Tic Tac Toe – Online Multiplayer Game",
      projectDesc:
        "Real-time multiplayer Tic Tac Toe game with Java socket programming. Features client-server architecture, concurrent player handling, game state management, and real-time synchronization with robust error handling and reconnection logic.",
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
  title: "Download Resume",
  subtitle: "Get my complete Android Developer resume with detailed technical experience and project portfolio",
  display: true
};

const contactInfo = {
  title: emoji("Let's Connect 📱"),
  subtitle:
    "Interested in Android development opportunities or collaboration? Let's build amazing mobile apps together!",
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
