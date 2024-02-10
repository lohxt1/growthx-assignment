import { DataType } from "./form";

const itemInitMap = {
  projects: {
    image: "",
    title: "",
    link: "",
    description: "",
  },
  cards: {
    title: "",
    description: "",
    body: "",
  },
  blogs: {
    image: "",
    title: "",
    description: "",
  },
  experiences: {
    image: "",
    title: "",
    designation: "",
    location: "",
    timeline: "",
    description: "",
  },
};

const initialData: DataType = {
  hero: {
    siteTitle: "Neeraj Walia",
    name: "Neeraj Walia",
    email: "neerajwalia@gmail.com",
    title: `{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hey!","type":"text","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"I'm Neeraj Walia,","type":"text","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"a full stack developer.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`,
    subtitle: `{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Ready to bring your dream product to life in the virtual world.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`,
  },
  about: {
    body: `{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"I'm your go-to Full Stack Developer, ready to bring your dream product to life in the virtual world. From crafting sleek websites for small and medium-sized businesses to empowering you by building your dream tech product, I've got the skills and expertise to make it happen.","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"With a mastery of JavaScript, React.js, Node.js, express.js, CSS and Next.js, I can help ensure your online presence stands out from the crowd. I am skilled in creating user-friendly interfaces, building RESTful APIs, and seamlessly integrating external services. Besides, I am a technical lead/project manager, who prefers to meticulously oversee every aspect of a project, from conception to completion, leaving no room for mediocrity.","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"Your dream + my expertise = scalable, performant, reliable, and intuitive products. Let's build something extraordinary!","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"Beyond the code, I step into the shoes of a technical lead and project manager, where I bring a meticulous approach to overseeing every stage of a project. My commitment to excellence leaves no room for mediocrity, ensuring that each endeavor I embark upon is a success.","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"In the collaborative realm, I thrive. Whether it's solving intricate technical challenges or leading a team towards a shared goal, I believe that extraordinary results are born out of effective collaboration.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`,
  },
  projects: {
    subtext: `{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"I have been working with tech since 5 years now and here are some of the work that I’d like to showcase,","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`,
    items: [
      {
        title: "Scientific react calculator",
        link: "github.com",
        description: `{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"A calculator based for calculation of complex scientific numericals","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`,
      },
      {
        title: "Time tracker - taskify",
        link: "apple.appstore",
        description: `{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Get your all tasks centralized with all in one integral task and calendar manage.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`,
      },
      {
        title: "Performance management",
        link: "app.google.com",
        description: null,
      },
      {
        title: "Path tracker - Djikstra",
        link: "github.com",
        description: null,
      },
      {
        title: "LMS - Data strucutres",
        link: "udemy.com",
        description: null,
      },
      {
        title: "Checkout all my projects here",
        link: "github.com/niraj",
        description: null,
      },
    ],
  },
  experiences: {
    subtext: `{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"My total years of experience compounds to 5+ years with significant amount of expertise in fintech & edtech industries.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`,
    items: [
      {
        title: "Yellow.ai",
        image: null,
        designation: "Technical Lead",
        location: "Bangalore, India",
        timeline: "2017 - Present",
        description: `{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"I step into the shoes of a technical lead and project manager, where I bring a meticulous approach to overseeing every stage of a project. My commitment to excellence leaves no room for mediocrity, ensuring that each endeavor I embark upon is a success.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`,
      },
      {
        title: "Microsoft",
        image: null,
        designation: "SDE III",
        location: "Remote",
        timeline: "2017 - Present",
        description: null,
      },
      {
        title: "HSBC",
        image: null,
        designation: "Systems Engineer",
        location: "Pune, India",
        timeline: "2017 - Present",
        description: `{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"I step into the shoes of a technical lead and project manager, where I bring a meticulous approach to overseeing every stage of a project. My commitment to excellence leaves no room for mediocrity, ensuring that each endeavor I embark upon is a success.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`,
      },
      {
        title: "Adobe",
        image: null,
        designation: "Software Engineer",
        location: "Hyderabad, India",
        timeline: "2017 - Present",
        description: null,
      },
    ],
  },
  blogs: {
    subtext: `{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Blogs and resources","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`,
    items: [
      {
        title:
          "How to effectively crack leet code test cases with 100% accuracy",
        image: null,
        description: "medium.com",
      },
      {
        title: "Best react component library for beginners and experts",
        image: null,
        description: "react.com/components",
      },
      {
        title: "Time and space complexicity? how to code more effectively",
        image: null,
        description: "medium.com",
      },
      {
        title: "Free table UI toolkit for your next react project",
        image: null,
        description: "github.com",
      },
    ],
  },
  cards: {
    items: [
      {
        title: "Skillsets",
        description: `{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"I find my joy in the art and science of Full Stack Development, specializing in technologies such as","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`,
        body: `{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Full Stack Development","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"API Development","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"UI/UX Design","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"Project Management","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"Quality Assurance","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"Rest API","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"Product Architecture","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`,
      },
      {
        title: "Stack",
        description: `{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"My go to toolkit and the tech I have grasped includes,","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`,
        body: `{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Typescript","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"Next js","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"Mongo DB","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"Golang","type":"text","version":1},{"type":"linebreak","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"Rust","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`,
      },
    ],
  },
  contacts: {
    title: `{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Let's Connect!","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`,
    subtext: `{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Nothing’s better than a 1:1 chat. Lets connect and build some epic products together :)","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`,
    image: null,
    link: "See you there",
  },
};

export { itemInitMap, initialData };
