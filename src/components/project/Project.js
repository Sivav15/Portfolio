import React, { useState } from "react";
import { Element } from "react-scroll";
import Card from "./Card";
import "./Project.css";

function Project() {
  const [value, setValue] = useState("all");
  let data = [
    {
      key: ["react", "express", "all", "restApi", "mern","node"],
      img: "./asset/project/g store.png",
      title: "Grocery Store",
      githubFrontEnd:
        "https://github.com/Sivav15/Glossary-store-FE",
      githubBackEnd:
        "https://github.com/Sivav15/Glossary-store-BE",
      sourceCode:"https://grocerystorez.netlify.app",
      shortNote:
        "This is ecommerce application",
      longNote: [
        "The frontend is built using **React** with **Bootstrap** for styling. The backend is build with **Node.js** , **Express.js** and used **MongoDB** as database.",
        // "I have add **login/logout** feature. If the **users** is **logged in**  it will dissplay the users **data**. ",
        "They are **two category of admin and users**. If a **user login as admin** it will show the **admin page** or else it will show **User page**.",
        "Admin page to show **add edit delete product** and show **avaliable stocks**, **bought stock**, **selling stock**, **billing (or) order data by user wise**.",
        "User page to show **product** **add to cart**,**Razorpay method**, **your order page**, **profile page** and finaly **invoice bill send in your email** ect.",
      ],
      skills: [
        {
          name: "React",
          link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        },
        {
          name: "redux-toolkit",
          link: "./asset/redux.svg",
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
      key: ["react", "express", "all", "restApi", "mern","node"],
      img: "./asset/project/inventory.png",
      title: "Inventory Management",
      githubFrontEnd:
        "https://github.com/Sivav15/shop-inventory-management-front-end",
      githubBackEnd:
        "https://github.com/Sivav15/Shop-inventory-management-back-end",
      sourceCode:"https://shopinventorymanagement.netlify.app",
      shortNote:
        "I built an app for shop inventory management for billing.",
      longNote: [
        "The frontend is built using **React** with **Bootstrap** for styling. The backend is build with **Node.js** , **Express.js** and used **MongoDB** as database.",
        "This app used for **retail shop inventory management**, To **store product** and **stock** details.",
        "I have add **login/logout** feature. If the **users** is **logged in**  it will dissplay the users **data**. ",
        "They are **two category of users-admin and billing speciallest**. If a **user login as admin** it will show the **admin page** or else it will show **billing session**.",
        "Admin page to show **add edit delete product** and show **avaliable stocks**, **bought stock**, **selling stock**, **billing (or) order data by user wise**, **yearly selling amount**.",
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
          name: "Razorpay",
          link: "./asset/razorpay.svg",
        },
      ],
    },
    {
      key: ["react", "express", "all", "restApi", "mern","node"],
      img: "./asset/project/teacher.png",
      title: "Mentor & Student Management",
      githubFrontEnd:
        "https://github.com/Sivav15/Students-Teachers-Management-FE",
      githubBackEnd: "https://github.com/Sivav15/assign-mentor-backend",
      sourceCode: "https://students-teachers-management-fe.vercel.app",
      shortNote:
        "The app is used to store student and mentor details. And assign student for particular mentor.",
      longNote: [
        "This is  **fullstack** web application.",
        "The frontend is built using **React** with **React-Bootstrap** for styling.",
        "The backend is build with **Node.js** , **Express.js** and used **MongoDB** as database.",
        "Main concept of the app is use to **store student and mentor** details. And **assign student** for **particular mentor**.",
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
      key: ["react", "express", "all", "restApi", "mern","node"],
      img: "./asset/project/urlShort.png",
      title: "URL Shortener",
      githubFrontEnd: "https://github.com/Sivav15/url-shortener-front-end",
      githubBackEnd: "https://github.com/Sivav15/Url-shortener-back-end",
      sourceCode: "https://url-shortener-front-end.vercel.app",
      shortNote:
        "The URL shortener app is used to short long url to small url.",
      longNote: [
        // "This is  **fullstack** web application",
        "The frontend is built using **React** with **Bootstrap** for styling.",
        "The backend is build with **Node.js** , **Express.js** and uses **MongoDB** as database.",
        "As the title suggests, the app can be used to shorten urls that can be **shared** with **anyone on the internet**.",
        "I have add **login/logout** feature. If the **user** is **loggedin** it will only show that users **data**. ",
        "I have used **JWT for authentication**.",
        "I added **forget password** feature.The forget password link will be **valid for 10m**.",
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
        "This is mock api website, it is used to check food nutrition for health benefits.",
      longNote: [
        "This is my first **JavaScript DOM rendering** project. And main feature of the website is the **search option** and **HTML** elements are **rendered only JavaScript DOM**.",
        "The application is made using **HTML** and styled using **CSS** and this website uses **JavaScript** for **dynamic loading**.",
        "I have  used **mock api** in **edaman recipes** and this website is used to **check food nutrition** for **health benefits**.",
        "This  **website is responsive** for **all screen size**.",
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
        "This is my hackathon project. I applied the pagination concept, And finally completed the project in 4hrs.",
      longNote: [
        "This is **my hackathon project**.",
        "The application is made using **HTML** and styled using **CSS** and this website uses **JavaScript** for **dynamic loading**.",
        "I have used **mock api** in **pokemon offical site**( Cartoon website ).",
        "All **HTML** elements are **rendered only in JavaScript DOM**.",
        "I used **pagination**  to **display 5 pokemons at a time**.",
        "Finally, I **completed** the **project in 4hrs**.",
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
