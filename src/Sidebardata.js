import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Send Verified Leads",
    path: "/leadsForm",
    icon: <FaIcons.FaCheckCircle />,
    cName: "nav-text",
  },
  {
    title: "Chat",
    path: "/chat",
    icon: <AiIcons.AiFillWechat />,
    cName: "nav-text",
  },
  {
    title: "Donate",
    path: "/donate",
    icon: <FaIcons.FaDonate />,
    cName: "nav-text",
  },
  {
    title: "Feedback",
    path: "/feedback",
    icon: <FaIcons.FaThumbsUp />,
    cName: "nav-text",
  },

  
  {
    title: "About",
    path: "/about",
    icon: <AiIcons.AiFillInfoCircle />,
    cName: "nav-text",
  },

];
