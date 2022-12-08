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

    const [ CanShowSched,setCanShowSched] = useState(false);
    const [name,setname] = useState("");
    const[i,seti] = useState("");
    const roomID = props.vid;
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



    useEffect(() => {
        if(typeof roomID !== "undefined") {
            getVehicleData();
        }
    }, []);



    return (

        <div>
            <Card elevation={3}>



                <CardContent>
                    <Typography variant="body2" color="textSecondary">License Plate:{props.licenseplate}</Typography>
                                     <Typography variant="body2" color="textSecondary"> Model: {props.model}</Typography>
                                     <Typography variant="body2" color="textSecondary">Brand: {props.brand}</Typography>
                                        <Typography variant="body2" color="textSecondary">Weight: {props.weight}</Typography>


                </CardContent>
            </Card>





        </div>
    );
}

export default Vehicles;