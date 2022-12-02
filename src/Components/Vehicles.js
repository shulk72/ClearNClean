import {Button, Form, Modal} from "semantic-ui-react";
import React, {useEffect, useState} from "react";
import {Card, CardHeader, CardContent, IconButton, Typography} from "@material-ui/core";
import {Grid} from 'semantic-ui-react';
import axios from "axios";


import {EditOutlined, MoreHorizOutlined} from "@material-ui/icons";



function Vehicles(props) {

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
        axios.get(`https://cleanncleardb2.herokuapp.com/CleanNClear/vehicles/${roomID}`).then((res) => {
                setRoomData(res.data);
            }, (error) => {
                console.log(error);
            }
        );
    }
function type1(parameter){
        switch(parameter) {
            case 'laboratory':
                return 1
            case 'classroom':
                return 2
            case 'office':
                  return 3
            case'study_space':
                return 4
            case
                'conference_hall':
                return 5
        }

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
                    <Typography variant="body2" color="textSecondary">License Plate:{props.RoomName}</Typography>
                                     <Typography variant="body2" color="textSecondary"> Model: {props.Building}</Typography>
                                     <Typography variant="body2" color="textSecondary">Driver: {props.Department}</Typography>


                </CardContent>
            </Card>





        </div>
    );
}

export default Vehicles;