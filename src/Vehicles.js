import React, { useEffect, useState} from 'react';
import axios from "axios";
import {
    Grid,
    Segment, Form, Button, Modal, Container
} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import Rooms from "./Components/Vehicles";
export default

function Vehicles(){
       const [isAuth, setIsAuth] = useState(false)
       const [rooms, setRooms] = useState([]);
       const data = localStorage.getItem('login-data');
       const dat = JSON.parse(data);

    function type1(parameter) {
        switch (parameter) {
            case 1:
                return 'laboratory'
            case 2:
                return 'classroom'
            case 3:
                return 'office'
            case 4:
                return 'study_space'
            case 5:
                return 'conference_hall'
        }
    }
    function getRooms(){
        axios.get(`https://cleanncleardb2.herokuapp.com/CleanNClear/vehicles`).then((res) => {
                setRooms(res.data);
                    console.log(res.data)

            }, (error) => {
                console.log(error);
            }
        );
    }
    useEffect(() => {

        getRooms();
        console.log(rooms)
    }, []);
return <>
     <Segment>
       <Segment placeholder>

                <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Vehicles</h1>
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