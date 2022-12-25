import React, { useState } from "react";
import { Element } from "react-scroll";
import Card from "./Card";
import "./Project.css";

function Project() {
  const [value, setValue] = useState("mern");
  let data = [
    {
      key: ["react", "express", "all", "restApi", "mern"],
      img: "./asset/project/inventory.png",
      title: "Inventory Management",
      githubFrontEnd:
        "https://github.com/Sivav15/shop-inventory-management-front-end",
      githubBackEnd:
        "https://github.com/Sivav15/Shop-inventory-management-back-end",
      sourceCode: "https://shopinventorymanagement.netlify.app",
      shortNote:
        "I build the app for shop inventory management for billing session.",
      longNote: [
        "The frontend is built using **React** with **Bootstrap** for styling. The backend is build with **Node.js** with **Express.js** framework along with **MongoDB** database to store the data.",
        "This app used for **retail shop inventory management**, To **store product** and **stock** details.",
        "I have add **login/logout** feature. If the **user** is **login** to display our **data**. ",
        "In this app **two category admin and user**. if **admin login** to **show admin page** or **user login** to **show user page**.",
        "Admin page to show **Add edit delete product** and show **avaliable stocks**, **bought stock**, **selling stock**, **billing (or) order data by user wise**, **yearly selling amount**.",
        "User page to show **billing section**, **your order page** and **invoice bill** ect.",
      ],
      skills: [
        {
          name: "React",
          link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        },
        {
          name: "Node",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Mongo DB",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
        },

        {
          name: "Bootstrap",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "Chart JS",
          link: "./asset/chartjs.svg",
        },
        {
          name: "JWT",
          link: "./asset/jwt.svg",
        },
        {
          name: "Razorpay",
          link: "./asset/razorpay.svg",
        },
      ],
    },
    {
      key: ["react", "express", "all", "restApi", "mern"],
      img: "./asset/project/teacher.png",
      title: "Mentor & Student Management",
      githubFrontEnd:
        "https://github.com/Sivav15/Students-Teachers-Management-FE",
      githubBackEnd: "https://github.com/Sivav15/assign-mentor-backend",
      sourceCode: "https://students-teachers-management-fe.vercel.app",
      shortNote:
        "This app is use to store student and mentor details. And assign student for particular mentor",
      longNote: [
        "This is  **fullstack** web application.",
        "The frontend is built using **React** with **React-Bootstrap** for styling.",
        "The backend is build with **Node.js** with **Express.js** framework along with **MongoDB** database to store the data.",
        "Main concept of the app is use to **store student and mentor** details. And **assign student** for **particular mentor**.",
        "Another one feature **Delete one mentor** if the **particular menton student are assign** that **student are unassign**.",
      ],
      skills: [
        {
          name: "React",
          link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        },
        {
          name: "Node",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Mongo DB",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
        },

        {
          name: "Bootstrap",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
      ],
    },
    {
      key: ["react", "express", "all", "restApi", "mern"],
      img: "./asset/project/urlShort.png",
      title: "URL Shortener",
      githubFrontEnd: "https://github.com/Sivav15/url-shortener-front-end",
      githubBackEnd: "https://github.com/Sivav15/Url-shortener-back-end",
      sourceCode: "https://url-shortener-front-end.vercel.app",
      shortNote:
        "The URL Shortener app is used to short long url to small url.",
      longNote: [
        // "This is  **fullstack** web application",
        "The frontend is built using **React** with **Bootstrap** for styling.",
        "The backend is build with **Node.js** with **Express.js** framework along with **MongoDB** database to store the URLs.",
        "As the title suggests, the app can be used to shorten urls that can be **shared** with **anyone on the internet**.",
        "I have add **login/logout** feature. If the **user** is **login** to display our **data**. ",
        "I have used **JWT-Authentication**. Session **login** only for **5m**. **After refresh the page** show **section expiry** message.",
        "I added **forget password** feature.Forget password link validity only 10m.",
      ],
      skills: [
        {
          name: "React",
          link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        },
        {
          name: "Node",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Mongo DB",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
        },

        {
          name: "Bootstrap",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "JWT",
          link: "./asset/jwt.svg",
        },
      ],
    },
    {
      key: ["javascript", "all", "mockApi"],
      img: "./asset/project/edaman.png",
      title: "Edaman Recipes",
      githubFrontEnd: "https://github.com/Sivav15/Edaman-Recipes-API",
      githubBackEnd: "",
      sourceCode: "https://edaman-recipes.netlify.app",
      shortNote:
        "This is mock api website, it is used to check food Nutrition for health benefits.",
      longNote: [
        "This is my first **JavaScript DOM Rendering** project. And main fetuare of the website **Search option** and **HTML** elements are **render only JavaScript DOM**.",
        "The application is made using **HTML** and styled using **CSS** and this website **dynamic by JavaScript**.",
        "I have **get api** in **Edaman Recipes** and this website is used to **check food Nutrition** for **health benefits**.",
        "This  **website responsive** for **all screen size**.",
        "**Finally**, this is **my mini project**.",
      ],
      skills: [
        {
          name: "HTML5",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "#945915",
        },
        {
          name: "CSS3",
          //  link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "#0C3A80",
        },
        {
          name: "Javascript",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "#858626",
        },
      ],
    },
    {
      key: ["mockApi", "html", "css", "all", "javascript"],
      img: "./asset/project/pokemon.png",
      title: "Pokemon Api",
      githubFrontEnd: "https://github.com/Sivav15/Hackathon-1",
      githubBackEnd: "",
      sourceCode: "https://spectacular-begonia-6cb8f6.netlify.app",
      shortNote:
        "This is my hackathon project. I apply the pagination concept, Finally i completed the project in 4hrs.",
      longNote: [
        "This is **my hackathon project**.",
        "The application is made using **HTML** and styled using **CSS** and this website **dynamic by JavaScript**.",
        "I have **get api** in **Pokemon offical site** and this is a **Cartoon website**.",
        "All **HTML** elements are **render only JavaScript DOM**.",
        "I this **pagination** concept display **10 buttons** for each **5 Pokemons display** in this page. and **display only 50 Pokemons** in this website.",
        "Finally, I **Completed** the **project in 4hrs**.",
      ],
      skills: [
        {
          name: "HTML5",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "#945915",
        },
        {
          name: "CSS3",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "#0C3A80",
        },
        {
          name: "Javascript",
          link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "#858626",
        },
      ],
    },
  ];

  let datas = data.filter((item) => item.key.some((items) => items === value));
  return (
    <Element name="project">
      <div className=" project">
        <h1>
          My Recent <span className="project-highlight">Works</span>
        </h1>
        <div className="dropdown">
          <select
            name=""
            id=""
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <option value="all">All</option>
            <option value="javascript">JavaScript DOM</option>
            <option value="react">React</option>
            <option value="mockApi">Mock Api</option>
            <option value="restApi">Rest Api</option>
            <option value="mern">MERN</option>
          </select>
        </div>
        <div className="row project-container">
          {datas.length > 0 &&
            datas.map((item, index) => {
              return <Card data={item} key={index} />;
            })}
        </div>
      </div>
    </Element>
  );
}

export default Project;
