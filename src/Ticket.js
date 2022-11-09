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
       const [rooms, setRooms] = useState([]);
       const data = localStorage.getItem('login-data');
       const dat = JSON.parse(data);

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
        axios.get(`https://booking-system-pika.herokuapp.com/pika-booking/rooms`).then((res) => {
                setRooms(res.data);
                    console.log(res.data)

            }, (error) => {
                console.log(error);
            }
        );
    }
    useEffect(() => {

        getTicket();
        console.log(rooms)
    }, []);


return <>
     <Segment>
       <Segment placeholder>
 <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Tickets</h1>
                <Container>
                    <Grid container spacing={3}>
                        {Array.from(Array(rooms.length)).map((_, i) => (
                            <Rooms

                                RoomName = {`${rooms[i].r_name}`}
                                Building= {`${rooms[i].r_building}`}
                                Department= {`${rooms[i].r_department}`}
                                Type= {`${type1(rooms[i].r_type)}`}
                                Room_id = {rooms[i].r_id}
                                type={"update"}/>
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