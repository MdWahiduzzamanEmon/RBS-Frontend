import {
  faBoltLightning,
  faBullhorn,
  faChartLine,
  faClipboardList,
  faCode,
  faDownload,
  faGear,
  faGlobe,
  faHouse,
  faReceipt,
  faTowerCell,
} from "@fortawesome/free-solid-svg-icons";
import engineeringImage from "../../../public/image/engineering.jpg";
import constructionImage from "../../../public/image/construction-infographic.png";
import itImage from "../../../public/image/it.png";
import salesImage from "../../../public/image/sales&marketing.png";
import othersImage from "../../../public/hr.jpg";

// import constructionImage from "../../../public/image/construction.png";

export const home7thDemoData = {
  id: 1,
  isShow: true,
  titleData: [
    {
      id: 1,
      isShow: true,
      title: "A platform designed for a new style of working",
      description: "What you would like to manage with our platform",
    },
  ],
  items: [
    {
      id: 1,
      isShow: true,
      title: "Engineering",
      eventKey: "engineering-team",
      //   description:
      //     "Use Timeline to plan projects right the time. how the pieces fit together.",
      icon: faHouse,
      color: "#6C6CFF",
      image: engineeringImage,
      description: {
        id: 1,
        title:
          "There is a growing need for better management of projects within the disciplines of engineering, business and technology, and this software is a direct response to that need. With an emphasis on practical application, this software addresses the final objective of project management: to integrate and integrate the interests, resources and efforts of many interested parties to achieve the general goals of the project.",
      },
      // submenus: [
      //   {
      //     id: 1,
      //     title: "Marketing Executive",
      //     eventKey: "first",
      //     images: image1,
      //     description:
      //       "FirstUse Timeline to plan projects right the time. how the pieces fit together.",

      //     // options:
      //   },
      //   {
      //     id: 2,
      //     title: "Marketing Director",
      //     eventKey: "second",
      //     images: image1,
      //     description:
      //       "SecondUse Timeline to plan projects right the time. how the pieces fit together.",
      //   },
      // ],
    },
    {
      id: 2,
      isShow: true,
      title: "Construction ",
      eventKey: "real-state",
      //   description:
      //     "Use Timeline to plan projects right the time. how the pieces fit together.",
      icon: faCode,
      color: "#00C875",
      image: constructionImage,
      description: {
        id: 1,
        title:
          "Construction Project management is a responsible process. The project management process connects all other project activities together and creates the harmony in the project. Therefore, the project management team should have a detailed understanding on all the project management processes and this software that can make use for each project management process.",
      },
      // submenus: [
      //   {
      //     id: 1,
      //     title: "Marketing Executive",
      //     eventKey: "first",
      //     images: "/image/todoBoard5.png",
      //   },
      //   {
      //     id: 2,
      //     title: "Marketing Director",
      //     eventKey: "second",
      //     images: "/image/todoBoard5.png",
      //   },
      // ],
    },
    {
      id: 3,
      isShow: true,
      title: "IT",
      eventKey: "it",
      //   description:
      //     "Use Timeline to plan projects right the time. how the pieces fit together.",
      icon: faTowerCell,
      color: "green",
      image: itImage,
      description: {
        id: 1,
        title:
          "The IT Project management is one of the critical processes of any project. This is due to the fact that project management is the core process that connects all other project activities and processes together. When it comes to the activities of project management, there are plenty. However, these plenty of project management activities can be categorized into This software.",
      },
      // submenus: [
      //   {
      //     id: 1,
      //     title: "Marketing Executive",
      //     eventKey: "first",
      //     images: "/image/todoBoard5.png",
      //   },
      //   {
      //     id: 2,
      //     title: "Marketing Director",
      //     eventKey: "second",
      //     images: "/image/todoBoard5.png",
      //   },
      // ],
    },
    {
      id: 4,
      isShow: true,
      title: "Telecommunication",
      eventKey: "telecommunication",
      //   description:
      //     "Use Timeline to plan projects right the time. how the pieces fit together.",
      icon: faTowerCell,
      color: "green",
      image: itImage,
      description: {
        id: 1,
        title:
          "The IT Project management is one of the critical processes of any project. This is due to the fact that project management is the core process that connects all other project activities and processes together. When it comes to the activities of project management, there are plenty. However, these plenty of project management activities can be categorized into This software.",
      },
      // submenus: [
      //   {
      //     id: 1,
      //     title: "Marketing Executive",
      //     eventKey: "first",
      //     images: "/image/todoBoard5.png",
      //   },
      //   {
      //     id: 2,
      //     title: "Marketing Director",
      //     eventKey: "second",
      //     images: "/image/todoBoard5.png",
      //   },
      // ],
    },
    {
      id: 5,
      isShow: true,
      title: "Sales & Marketing",
      eventKey: "sales-marketing",
      //   description:
      //     "Use Timeline to plan projects right the time. how the pieces fit together.",
      icon: faBullhorn,
      color: "#00D2D2",
      image: salesImage,
      description: {
        id: 1,
        title:
          "This software is the perfect solution to make the planning and execution of specific tasks carried out by a marketing department to ensure that a marketing campaign's goal is successfully reached. It entails employing different skills, tools, and expertise to ensure that finances, sales, and user experience are on point.",
      },

      secondaryDescription: {
        id: 1,
        title:
          " This software helps marketing teams communicate effectively from start to finish. This software will help marketing teams make use of communication to ensure team members keep in touch and communicate anytime. Communication is a key feature of successful marketing campaigns",
      },
      // submenus: [
      //   {
      //     id: 1,
      //     title: "Marketing Executive",
      //     eventKey: "first",
      //     images: "/image/todoBoard5.png",
      //   },
      //   {
      //     id: 2,
      //     title: "Marketing Director",
      //     eventKey: "second",
      //     images: "/image/todoBoard5.png",
      //   },
      // ],
    },
    {
      id: 6,
      isShow: true,
      title: "Others",
      eventKey: "others",
      //   description:
      //     "Use Timeline to plan projects right the time. how the pieces fit together.",
      icon: faBullhorn,
      color: "#00D2D2",
      image: othersImage,
      description: {
        id: 1,
        title: "Vitlous is also perfect for…….",
        items: [
          {
            id: 1,
            title: "Creative & Design",
          },
          {
            id: 2,
            title: "Architects",
          },
          {
            id: 3,
            title: "Consultants",
          },
          {
            id: 4,
            title: "Agencies",
          },
          {
            id: 5,
            title: "HR",
          },
          {
            id: 6,
            title: "Product",
          },
          {
            id: 7,
            title: "Operations",
          },
        ],
      },

      secondaryDescription: {
        id: 1,
        title:
          "This software can be used for any project and this software is the perfect solution to make…..",
        items: [
          {
            id: 1,
            title: "Project Initiation",
          },
          {
            id: 2,
            title: "Project Planning",
          },
          {
            id: 3,
            title: "Project Execution",
          },
          {
            id: 4,
            title: "Project Control and Validation",
          },
          {
            id: 5,
            title: "Project Closeout and Evaluation",
          },
        ],
      },
      // submenus: [
      //   {
      //     id: 1,
      //     title: "Marketing Executive",
      //     eventKey: "first",
      //     images: "/image/todoBoard5.png",
      //   },
      //   {
      //     id: 2,
      //     title: "Marketing Director",
      //     eventKey: "second",
      //     images: "/image/todoBoard5.png",
      //   },
      // ],
    },
    // {
    //   id: 5,
    //   isShow: true,
    //   title: "CRM",
    //   //   description:
    //   //     "Use Timeline to plan projects right the time. how the pieces fit together.",
    //   icon: faChartLine,
    //   color: "#FF9900",
    // },
    // {
    //   id: 6,
    //   isShow: true,
    //   title: "Freelancer",
    //   //   description:
    //   //     "Use Timeline to plan projects right the time. how the pieces fit together.",
    //   icon: faGlobe,
    //   color: "#FF7575",
    // },
    // {
    //   id: 7,
    //   isShow: true,
    //   title: "Any Project",
    //   //   description:
    //   //     "Use Timeline to plan projects right the time. how the pieces fit together.",
    //   icon: faClipboardList,
    //   color: "#ABCDFD",
    // },
  ],
};
