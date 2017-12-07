import React, { Component } from "react";
import HomeScreen from "./home";
import Roles from "./rulesandRegulations";
import SideBar from "../config/SlideBar";
import News from "./news";
import Syllabus from "./syllabus";
import Splash from "./splash";
import { DrawerNavigator } from "react-navigation";
const HomeScreenRouter = DrawerNavigator(
    {
        News:{screen:News},
        Rules: { screen: Roles },
        Home: { screen: HomeScreen },
        Syllabus:{screen:Syllabus}
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);
export default HomeScreenRouter;
