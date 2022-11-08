import React, { useEffect, useState} from 'react';
import axios from "axios";
import {
    Grid,
    Segment, Tab
} from 'semantic-ui-react'
import HomePage from "./HomePage";
import Info from "./Info"
import Vehicles from "./Vehicles"
import Ticket from "./Ticket"
import {Link} from "react-router-dom";
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
            menuItem: 'Clients',
        },
        {
            menuItem: 'Reports',
        },
        {
            menuItem: 'Account',
        },
        {
            menuItem: 'Vehicles', render: () => <Vehicles/>
        }
    ]

    return <>
    <h1>Logo</h1>
      <Tab   menu={{ fluid: true, vertical: true, tabular: true }}  panes={panes}/>
      </>

}
