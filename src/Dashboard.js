import React, { useEffect, useState} from 'react';
import axios from "axios";
import {
    Grid,
    Segment, Tab, Image
} from 'semantic-ui-react'
import HomePage from "./HomePage";
import Info from "./Info"
import Vehicles from "./Vehicles"
import Ticket from "./Ticket"
import Client from "./Client"
import {Link} from "react-router-dom";
import Logo from './/Assets/Log.jpg';
export default
function Dashboard(){

const [isAuth, setIsAuth] = useState(false)
    const panes = [

        {
            menuItem: 'Tickets', render: () => <Ticket/>
        },
        {
            menuItem: 'Info', render: () => <Info/>
        },
        {
            menuItem: 'Clients', render: () => <Client/>
        },

        {
            menuItem: 'Vehicles', render: () => <Vehicles/>
        }
    ]
 const [darkMode, setDarkMode] = React.useState(true);
 useEffect(() => {

document.body.classList.add('dark');
         document.body.classList.add("dark");

    }, [darkMode]);

    return <>
    <h1>  <Image src={Logo} size='small' rounded /></h1>
      <Tab   menu={{ fluid: true, vertical: true, tabular: true }}  panes={panes}/>
      </>

}
