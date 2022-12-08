import {Button, Form, Modal} from "semantic-ui-react";
import React, {useEffect, useState} from "react";
import {Card, CardHeader, CardContent, IconButton, Typography} from "@material-ui/core";
import {Grid} from 'semantic-ui-react';
import axios from "axios";
import DateTimePicker from 'react-datetime-picker';
import DatePicker from 'react-date-picker';
import {EditOutlined, MoreHorizOutlined} from "@material-ui/icons";



function Ticket(props) {

    const [open, setOpen] = useState();
    const [company, setcompany] = useState("");
    const [client,setclient]= useState("");
    const [lastvisit,setlastvisit]= useState("");
    const [license,setlicense]= useState("");
    const [model,setmodel] = useState("");
    const [type, settype] = useState("");
    const [dept, setdept] = useState("");
    const [ material, setmaterial] = useState("");
    const [price,setprice]= useState("");
    const[vid,setvid]= useState("");
    const[brand,setbrand]= useState("");
    const[firstname,setfirstname]= useState("");
    const[lastname,setlastname]= useState("");
    const [createdMessage, setCreatedMessage] = useState("");
  const [measurement, setmeasurement] = useState("");
  const [Mtype, setMtype] = useState("");
  const [comment, setcomment] = useState("");
  const [compinfo,setcompinfo]= useState("");
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

    function createRoom(){
        if(  model==="" || brand==="" || company==="", material==="", measurement==="",Mtype==="", vid ===""){
            console.log("Empty Field")
            setCreatedMessage("Failed to create room, invalid parameters");
        } else {
            console.log("Creating Room")
            let data = {  "vid": vid ,
                          "model": model,
                          "brand": brand,
                          "firstname": firstname,
                          "lastname": lastname,
                          "company": company,
                          "material":material,
                          "measurementtype": Mtype,
                          "measurement": measurement,
                          "price" : 10

                }
            axios.post(`https://cleanncleardb2.herokuapp.com/CleanNClear/tickets`, data
            ).then(
                (res) => {
                    console.log(res);
                    setCreatedMessage("Room Successfully Created");
                    console.log(createdMessage);
                    window.location.reload(false);
                }, (error) => {
                    console.log(error);
                    setCreatedMessage("Failed to create room, invalid parameters");
                }
            );
        }
    }

function clear(){
        setcompany="";
     setmodel = "" ;
     setdept= "";
    setCreatedMessage="";
   setmeasurement = "";
    }
    function getRoomData(){
        axios.get(`https://booking-system-pika.herokuapp.com/pika-booking/rooms/${roomID}`).then((res) => {
                setRoomData(res.data);
            }, (error) => {
                console.log(error);
            }
        );
    }
function subtotal(t){
 return t*10
 }
 function tax(t){
 return subtotal(t)*0.115
 }
 function total(t){
 return subtotal(t) + tax(t)
 }

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

    useEffect(() => {
        if(typeof roomID !== "undefined") {
            getRoomData();
        }
    }, []);



    function deleteRoom(){
        axios.delete(`https://booking-system-pika.herokuapp.com/pika-booking/rooms/${roomID}`).then(
            (res) => {
                console.log(res)
                setDeleteMessage("Room deleted successfully");
                console.log(deleteMessage);
                window.location.reload(false);
            }, (error) =>{
                console.log(error);
                setDeleteMessage("Room could not be deleted");
                console.log(deleteMessage)
            }
        );
    }



    function markRoomAvailable(){
        console.log(toMarkAvailable)


        axios.delete(`https://booking-system-pika.herokuapp.com//pika-booking/rooms/unavailable/ra-id/${toMarkAvailable}`
        ).then((res) => {
            window.location.reload(false);
        },(error) => {
            console.log(error);
        });

    }

    function handleChange(date){
        setst_dt(date)

    }
    function handleChange1(date){
        setet_dt(date)

    }
    function handleScheduleChange(date){
        setRoomSchedule(date)
        setallDay([]);
    }


    function TypeTime(hours, minutes){

        let pastNoonIndicator = "";
        if(hours < 12){
            if(hours === 0) hours = 12;
            pastNoonIndicator = "AM";
        }
        else {
            if(hours > 12) hours -= 12;
            pastNoonIndicator = "PM";
        }
        if(minutes === 0){
            return `${hours}:00 ${pastNoonIndicator}`;
        } else {
            return`${hours}:${minutes} ${pastNoonIndicator}`;
        }
    }

    return (

        <div>
            <Card elevation={3}>
                {
                    props.type === "update" &&
                    <CardHeader
                        action={
                            <IconButton onClick={() => setOpen(true)}><MoreHorizOutlined/></IconButton>
                        }
                        title={props.roomName}
                        subheader={props.building}
                    />
                }

                {
                    props.type === "create" &&
                    <CardHeader
                        action={
                            <IconButton onClick={() => setOpen(true)}><EditOutlined/></IconButton>
                        }
                        title={props.roomName}
                        subheader={props.Building}
                    />
                }
                <CardContent>
                 <Typography variant="body2" color="textSecondary">  Numero: {props.phone}</Typography>
                    <Typography variant="body2" color="textSecondary">Ticket: {props.tid}_______ Date: {props.date}</Typography>
                    <Typography variant="body2" color="textSecondary"> Client ID: {props.client} </Typography>
                    <Typography variant="body2" color="textSecondary"> License Plate: {props.license} _______ Model: {props.model}</Typography>
                     <Typography variant="body2" color="textSecondary"> Material: {props.material} _______ Measurement type: {props.materialtype}</Typography>
                      <Typography variant="body2" color="textSecondary"> Measurement: {props.measurement} _______ Cost: $10.00</Typography>
                      <Typography variant="body2" color="textSecondary"> Subtotal: {subtotal(props.measurement)} </Typography>
                      <Typography variant="body2" color="textSecondary"> Tax: {tax(props.measurement)} _______ Driver Name: {props.driver}</Typography>
                      <Typography variant="body2" color="textSecondary"> Total: {total(props.measurement)} </Typography>
                </CardContent>
            </Card>
            <Modal centered={false} open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)}>
                {props.type === "create" &&<Modal.Header> Create New Ticket</Modal.Header>}



                <Modal.Content>
                    {
                        props.type === "create" &&
                        <Modal.Description>
                            <Grid.Column>
                                <Form>
                                Company Information:
                                   <Form.Input
                                                                        onChange={(e) => {setcompany(e.target.value);}}
                                                                        label='Company'
                                                                    />
                                   <Form.Input
                                                                        onChange={(e) => {setclient(e.target.value);}}
                                                                        label='Representive'
                                                                    />
                                   <Form.Input
                                                                        onChange={(e) => {setlastvisit(e.target.value);}}
                                                                        label='Last Visit'
                                                                    />
                                Vehicle Information:
                                    <Form.Input
                                        label="License Plate"
                                        value={name}
                                        onChange={e => setlicense(e.target.value)}
                                    />
                                    <Form.Input
                                        onChange={(e) => {setmodel(e.target.value);}}
                                        label='Model'
                                    />
                                  <Form.Input label=' Material'>
                                   <select defaultValue={"0"} style={{textAlign: "center"}} onChange={(e) => {setmaterial(e.target.value);}}>
                                    <option key={0} value={"0"}>Select Type</option>
                                                                    {  ['Domestico',
                                                                                            'Agricultura',
                                                                                             'Escombros de Constuccion',
                                                                                              'Vegetativo',
                                                                                           'Comercial',
                                                                                               'Electro Domestico',
                                                                                              'Chatarra Vehicular',
                                                                                             'Metal',
                                                                                             'Madera',
                                                                                             'Tierra'
                                                                                               ,'Ataudes'
                                                                                               , 'Animales Muertos', 'Otros'].map((item) => {return <option>{item}</option>})
                                                                              }
                                                                          </select>

                                    </Form.Input>
                                    <Form.Input label='Measurement type'>
                                        <select defaultValue={"0"} style={{textAlign: "center"}} onChange={(e) => {setMtype(e.target.value);}}>
                                            <option key={0} value={"0"}>Select Type</option>
                                            {
                                                [ 'Cubic Yards',
                                                                  'Tons'].map((item) => {return <option>{item}</option>})
                                            }
                                        </select>

                                    </Form.Input>
  <Form.Input
                                        onChange={(e) => {setmeasurement(e.target.value);}}
                                        label='Measurement'
                                    />


                                                                </Form>

                            </Grid.Column>
                        </Modal.Description>
                    }

                    {
                        props.type === "update" && !unavailability && !schedule &&
                        <Modal.Description>
                            <Grid.Column>
                                <Form>

                                    <Form.Input
                                        fluid
                                        name="Room Name"
                                        placeholder="Insert Room Name"
                                        label="Room Name"
                                        value={y}
                                        onChange={e => sety(e.target.value)}
                                    />
                                    <Form.Input
                                        fluid
                                        name="Building"
                                        placeholder="Insert Building"
                                        label="building"
                                        value={i}
                                        onChange={e => seti(e.target.value)}
                                    />
                                    <Form.Input label='Department'>
                                        <select defaultValue={"0"} style={{textAlign: "center"}} onChange={(e) => {setpermission(e.target.value);}}>
                                            <option key={0} value={"0"}>Select Type</option>
                                            {

                                                ["ece","mate", "adem","fisi"].map((item) => {return <option>{item}</option>})
                                            }
                                        </select>
                                    </Form.Input>
                                    <Form.Input label='Type'>
                                        <select defaultValue={"0"} style={{textAlign: "center"}} onChange={(e) => {setroompermision(e.target.value);}}>
                                            <option key={0} value={"0"}>Select Type</option>
                                            {

                                                    ['laboratory','classroom', 'office','study_space','conference_hall'].map((item) => {return <option>{item}</option>})
                                            }
                                        </select>

                                    </Form.Input>
                                </Form>
                            </Grid.Column>
                        </Modal.Description>
                    }



                    {
                        props.type === "update" && schedule && !unavailability &&
                        <Modal.Description>
                            Select Day for Room Schedule: &nbsp;
                            <DatePicker
                                onChange={(e) => handleScheduleChange(e)}
                                value={roomSchedule}
                            />
                            <br/><br/>
                            {
                                allDay.length > 0 &&
                                <table style={{marginLeft: "auto", marginRight: "auto"}}>
                                    <thead>
                                    <tr>
                                        <th style={{padding:"5px", border: "1px solid black"}} scope={"col"}>Start Time</th>
                                        <th style={{padding:"5px", border: "1px solid black"}} scope={"col"}>End Time</th>
                                        <th style={{padding:"5px", border: "1px solid black"}} scope={"col"}>Available?</th>
                                        <th style={{padding:"5px", border: "1px solid black"}} scope={"col"}>Who Booked?</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {
                                        allDay.map(item => {
                                                return (
                                                    <tr>
                                                        <td style={{padding:"5px", border: "1px solid black"}}>{TypeTime(item.start.getHours(), item.start.getMinutes())}</td>
                                                        <td style={{padding:"5px", border: "1px solid black"}}>{TypeTime(item.end.getHours(), item.end.getMinutes())}</td>
                                                        <td style={{padding:"5px", border: "1px solid black"}}>{item.b_name==="unavailable"? "No": "Yes"}</td>
                                                        <td style={{padding:"5px", border: "1px solid black"}}>{item.p_fname==="n/a"?'No host':`${item.p_fname}_${item.p_lname}`}</td>
                                                    </tr>
                                                )
                                            }
                                        )
                                    }
                                    </tbody>
                                </table>
                            }

                        </Modal.Description>
                    }

                    {props.type === "update" && !unavailability && !schedule && <Button onClick={deleteRoom} style={{marginTop: "15px"}}>Delete</Button>}
                    {props.type === "update" && unavailability  && unavailableTimeSlots.length > 0 && <Button onClick={markRoomAvailable}>Mark As Available</Button>}




                </Modal.Content>

                <Modal.Actions>
                    {props.type === "create" && <Button onClick={createRoom}>Submit</Button>}
                    {props.type === "create" && <Button onClick={clear}>Clear</Button>}

                </Modal.Actions>
            </Modal>
        </div>
    );
}

export default Ticket;