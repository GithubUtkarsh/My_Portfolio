import project1img from "../assets/projects/GameNimbusWebsite.png"
import project2img from "../assets/projects/FlipkartCloneWebsite.png"
import project3img from "../assets/projects/BrewBlissCafeWebsite.png"

const projects = [
  {
    id: 1,
    title: "Game Nimbus",
    description: "This is a gaming website form where you can download pc games for free . But this is only for frontend , you cannot download anything from there because it is designed only using HTML and CSS.",
    image: project1img,
    technologies: ["HTML", "CSS",],
    liveLink: "https://githubutkarsh.github.io/GAMENIMBUS_FrontEnd_Project/",
    githubLink: "https://github.com/GithubUtkarsh/GAMENIMBUS_FrontEnd_Project",
    category: "Front End"
  },
  {
    id: 2,
    title: "Flipkart Clone",
    description: "This is a home page of flipkart. I add basic functionality of flipkart as well and it is only fronted of the original Flipkart website.",
    image: project2img,
    technologies: ["HTML", "CSS", "Bootstrap"],
    liveLink: "https://githubutkarsh.github.io/Flipkart_Clone_Project_FrontEnd_Project/",
    githubLink: "https://github.com/GithubUtkarsh/Flipkart_Clone_Project_FrontEnd_Project",
    category: "Front End"
  },
  {
    id: 3,
    title: "Brew & Bliss cafe",
    description: "This is basic cafe website in which you add new items and remove items using dashboard after login. This website includes only a few basic features.",
    image: project3img,
    technologies: ["HTML", "JavaScript", "CSS", "Bootstrap", "Node.js", "Mysql", "Express.js"],
    liveLink: "#",
    githubLink: "https://github.com/GithubUtkarsh/Cafe_Node_Project",
    category: "FullStack"
  },
];

export default projects;
