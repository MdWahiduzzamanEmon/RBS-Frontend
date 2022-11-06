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
import image1 from "../../../public/image/todoBoard5.png";

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
      title: "Engineering Team",
      eventKey: "engineering-team",
      //   description:
      //     "Use Timeline to plan projects right the time. how the pieces fit together.",
      icon: faHouse,
      color: "#6C6CFF",
      submenus: [
        {
          id: 1,
          title: "Marketing Executive",
          eventKey: "first",
          images: image1,
          description:
            "FirstUse Timeline to plan projects right the time. how the pieces fit together.",

          // options:
        },
        {
          id: 2,
          title: "Marketing Director",
          eventKey: "second",
          images: image1,
          description:
            "SecondUse Timeline to plan projects right the time. how the pieces fit together.",
        },
      ],
    },
    {
      id: 2,
      isShow: true,
      title: "Real Estate & Construction Project",
      eventKey: "real-state",
      //   description:
      //     "Use Timeline to plan projects right the time. how the pieces fit together.",
      icon: faCode,
      color: "#00C875",
      submenus: [
        {
          id: 1,
          title: "Marketing Executive",
          eventKey: "first",
          images: "/image/todoBoard5.png",
        },
        {
          id: 2,
          title: "Marketing Director",
          eventKey: "second",
          images: "/image/todoBoard5.png",
        },
      ],
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
      submenus: [
        {
          id: 1,
          title: "Marketing Executive",
          eventKey: "first",
          images: "/image/todoBoard5.png",
        },
        {
          id: 2,
          title: "Marketing Director",
          eventKey: "second",
          images: "/image/todoBoard5.png",
        },
      ],
    },
    {
      id: 4,
      isShow: true,
      title: "Sales & Marketing",
      eventKey: "sales-marketing",
      //   description:
      //     "Use Timeline to plan projects right the time. how the pieces fit together.",
      icon: faBullhorn,
      color: "#00D2D2",
      submenus: [
        {
          id: 1,
          title: "Marketing Executive",
          eventKey: "first",
          images: "/image/todoBoard5.png",
        },
        {
          id: 2,
          title: "Marketing Director",
          eventKey: "second",
          images: "/image/todoBoard5.png",
        },
      ],
    },
    {
      id: 5,
      isShow: true,
      title: "Others",
      eventKey: "others",
      //   description:
      //     "Use Timeline to plan projects right the time. how the pieces fit together.",
      icon: faBullhorn,
      color: "#00D2D2",
      submenus: [
        {
          id: 1,
          title: "Marketing Executive",
          eventKey: "first",
          images: "/image/todoBoard5.png",
        },
        {
          id: 2,
          title: "Marketing Director",
          eventKey: "second",
          images: "/image/todoBoard5.png",
        },
      ],
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
