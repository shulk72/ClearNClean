import {Button, Form, Modal} from "semantic-ui-react";
import React, {useEffect, useState} from "react";
import {Card, CardHeader, CardContent, IconButton, Typography} from "@material-ui/core";
import {Grid} from 'semantic-ui-react';
import axios from "axios";


import {EditOutlined, MoreHorizOutlined} from "@material-ui/icons";



function Client(props) {

    const [open, setOpen] = useState();
    const [Building, setBuilding] = useState("");
    const [type, settype] = useState("");
    const [dept, setdept] = useState("");
    const [createdMessage, setCreatedMessage] = useState("");

    const [deleteMessage, setDeleteMessage] = useState("");
    const [roomData, setRoomData] = useState({});
    const [unavailability, setUnavailability] = useState(false);
    const [schedule, setSchedule] = useState(false);
    const [unavailableTimeSlots, setUnavailableTimeSlots] = useState([]);
    const[]= useState(false);
    const [toMarkAvailable, setToMarkAvailable] = useState("")
    const [invalidTimeSlot, setInvalidTimeSlot] = useState(false)
    const [roomSchedule, setRoomSchedule] = useState(new Date());
    const [allDay, setallDay] = useState([]);
    const [ CanShowSched,setCanShowSched] = useState(false);
    const [name,setname] = useState("");
    const[i,seti] = useState("");
    const roomID = props.Room_id;
    console.log(roomID)
    const [st, setst_dt] = useState("");
    let [et, setet_dt] = useState("");
   const [roompermission,setroompermision] =useState("");
    const [permission,setpermission] =useState("");
    const[y,sety]= useState("")


    function getVehicleData(){
        axios.get(`https://booking-system-pika.herokuapp.com/pika-booking/rooms/${roomID}`).then((res) => {
                setRoomData(res.data);
            }, (error) => {
                console.log(error);
            }
        );
    }

    useEffect(() => {
        if(typeof roomID !== "undefined") {
            getVehicleData();
        }
    }, []);



    return (

        <div>
            <Card elevation={3}>



                <CardContent>
                    <Typography variant="body2" color="textSecondary">Company:{props.RoomName}</Typography>
                    <Typography variant="body2" color="textSecondary"> Representive: {props.Building}</Typography>
                    <Typography variant="body2" color="textSecondary">ID: {props.Department}</Typography>


                </CardContent>
            </Card>





        </div>
    );
}

export default Client;