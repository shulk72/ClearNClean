import React, { useEffect, useState} from 'react';
import axios from "axios";
import {
    Grid,
    Segment, Tab
} from 'semantic-ui-react'
import HomePage from "./HomePage";
import {Link} from "react-router-dom";
export default
function Dashboard(){

const [isAuth, setIsAuth] = useState(false)
    const panes = [

        {
            menuItem: 'Ticket',
        },
        {
            menuItem: 'Schedule',
        },
        {
            menuItem: 'UserStatistics',
        },
        {
            menuItem: 'Room Management',
        },
        {
            menuItem: 'Account',
        },
        {
            menuItem: 'List of Users',
        }
    ]

    return <>
    <h1>Logo</h1>
      <Tab   menu={{ fluid: true, vertical: true, tabular: true }}  panes={panes}/>
      </>

}
