import React, { useEffect, useState} from 'react';
import axios from "axios";
import {
    Grid,
    Segment, Form, Button, Modal, Container
} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import Rooms from "./Components/Ticket";
export default
function Ticket(){
   const [isAuth, setIsAuth] = useState(false)
       const [tickets, settickets] = useState([]);
       const data = localStorage.getItem('login-data');
       const dat = JSON.parse(data);
 const [darkMode, setDarkMode] = React.useState(false);

    function type1(parameter) {
        switch (parameter) {
            case 1:
                return 'Domestico'
            case 2:
                return 'Agricultura'
            case 3:
                return 'Escombros de Constuccion'
            case 4:
                return 'Vegetativo'
            case 5:
                return 'Comercial'
            case 6:
                return 'Electro Domestico'
            case 7:
                return 'Chatarra Vehicular'
            case 8:
                return 'Metal'
            case 9:
                return 'Madera'
            case 10:
                return 'Tierra'
            case 11:
                return 'Ataudes'
            case 12:
                return 'Animales Muertos'
            case 13:
                return 'Otros'
        }
    }
    function type2(parameter) {
            switch (parameter) {
                case 1:
                    return 'Cubic Yards'
                case 2:
                    return 'Tons'

            }
        }

    function getTicket(){
        axios.get('https://cleanncleardb2.herokuapp.com/CleanNClear/tickets').then((res) => {
                settickets(res.data);
                    console.log(res.data)

            }, (error) => {
                console.log(error);
            }
        );
    }
    useEffect(() => {

        getTicket();
         document.body.classList.add("dark");
        console.log(tickets)
    }, []);


return <>
     <Segment>
       <Segment placeholder>
 <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Tickets</h1>
                <Container>
                    <Grid container spacing={3}>
                        {Array.from(Array(tickets.length)).map((_, i) => (
                            <Rooms
                                tid ={`${tickets[i].tid}`}
                                date = {`${tickets[i].date}`}
                                model= {`${tickets[i].model}`}
                                material= {`${tickets[i].material}`}
                               measurementtype= {`${tickets[i].measurementtype}`}
                               measurement= {`${tickets[i].measurement}`}
                               brand ={`${tickets[i].brand}`}
                               firstname ={`${tickets[i].firstname}`}
                               lastname ={`${tickets[i].lastname}`}
                                v_id = {`${tickets[i].vid}`}
                               />
                        ))}
                        <Grid justify={"center"} container item xs={12} md={6} lg={4}>
                            <Rooms
                                roomName={`Create`}
                                building={`New Room`}
                                type={"create"}
                            />
                        </Grid>

                    </Grid>
                </Container>


</Segment>
</Segment>
</>



















}