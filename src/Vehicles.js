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

    function getvehicles(){
        axios.get(`https://cleanncleardb2.herokuapp.com/CleanNClear/vehicles`).then((res) => {
                setRooms(res.data);
                    console.log(res.data)

            }, (error) => {
                console.log(error);
            }
        );
    }
    useEffect(() => {

        getvehicles();
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

                                licenseplate = {`${rooms[i].licenseplate}`}
                                model= {`${rooms[i].model}`}
                                brand = {`${rooms[i].brand}`}
                                id = {`${rooms[i].vid}`}
                                weight = {`${rooms[i].weight}`}
                                type={"update"}/>
                        ))}

                        </Grid>


                </Container>

</Segment>
</Segment>
</>

}