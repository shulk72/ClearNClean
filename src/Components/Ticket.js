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
    const [ Material, setMaterial] = useState("");
    const [createdMessage, setCreatedMessage] = useState("");
  const [Measurement, setMeasurement] = useState("");
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
        if(  type==="" || company==="" || dept===""){
            console.log("Empty Field")
            setCreatedMessage("Failed to create room, invalid parameters");
        } else {
            console.log("Creating Room")
            let data = { "company": company,
                "r_name": name,
                "r_dept": dept,
                "r_type": type1(type)


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
   setMeasurement = "";
    }
    function getRoomData(){
        axios.get(`https://booking-system-pika.herokuapp.com/pika-booking/rooms/${roomID}`).then((res) => {
                setRoomData(res.data);
            }, (error) => {
                console.log(error);
            }
        );
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

    function updateRoom() {

            let data = {"r_id": roomID,
                "r_name": y,
                "r_building": i,
                "r_dept": permission,
                "r_type": type1(roompermission)}
            if (y===""){
                data.r_name= roomData.r_name
            }
            if (i === "") {
                data.r_building = roomData.r_building;
            }
            if (permission === "") {
                data.r_dept= roomData.r_dept;
            }
            if (roompermission=== "") {
                data.r_type= type1(roomData.r_type);
            }
            console.log(data)
            axios.put(`https://booking-system-pika.herokuapp.com/pika-booking/rooms`,
                data
            ).then((res) => {
                console.log(res);

                window.location.reload(false);
            }, (error) => {
                console.log(error);

            });

    }

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

    function Time(year,month, date, hours, minutes){
        if (minutes===0)
            return `${year}-${month +1}-${date} ${hours}:00:00`;
        else if (minutes< 10)
            return `${year}-${month +1}-${date} ${hours}:0${minutes}:00`;
        else
            return `${year}-${month +1}-${date} ${hours}:${minutes}:00`;
    }
    function markRoom(){
        console.log(st.getMonth())
        console.log(st.getDate())
        let s =Time(st.getFullYear(),st.getMonth(),st.getDate(),st.getHours(),st.getMinutes())
        console.log(s)
       let e = Time(et.getFullYear(),et.getMonth(),et.getDate(),et.getHours(),et.getMinutes())
        const data= {"room_id": roomID,  "st_dt": s,
            "et_dt": e, person_id: JSON.parse(localStorage.getItem('login-data')).p_id};
console.log(data)
        axios.post(`https://booking-system-pika.herokuapp.com/pika-booking/rooms/available`,
            data
        ).then((res) => {
            console.log(res);
            window.location.reload(false);
        },(error) => {
            console.log(error);
        });
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
                 <Typography variant="body2" color="textSecondary"> Direccion: {props.direction}_______ Numero: {props.phone} _______ Email:{}</Typography>
                    <Typography variant="body2" color="textSecondary">Ticket: {props.id}_______ Date: {props.date}</Typography>
                    <Typography variant="body2" color="textSecondary"> Client ID: {props.client} _______ Hora de Entrada: {props.hour1} </Typography>
                    <Typography variant="body2" color="textSecondary"> Company: {props.company} _______ Hora de Salida: {props.hour2}</Typography>
                    <Typography variant="body2" color="textSecondary"> Vehicle License Plate: {props.license}  _______       Model: {props.model}</Typography>
                     <Typography variant="body2" color="textSecondary"> Material: {props.Type} _______ Measurement type: {props.type}</Typography>
                      <Typography variant="body2" color="textSecondary"> Measurement: {props.measurement} _______ Cost: {props.cost}</Typography>
                      <Typography variant="body2" color="textSecondary"> Subtotal: {props.subtotal} </Typography>
                      <Typography variant="body2" color="textSecondary"> Tax: {props.tax} _______ Driver Name: {props.driver}</Typography>
                      <Typography variant="body2" color="textSecondary"> Total: {props.total} </Typography>
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
                                        onChange={e => setname(e.target.value)}
                                    />
                                    <Form.Input
                                        onChange={(e) => {setmodel(e.target.value);}}
                                        label='Model'
                                    />
                                  <Form.Input label=' Material'>
                                   <select defaultValue={"0"} style={{textAlign: "center"}} onChange={(e) => {setpermission(e.target.value);}}>
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
                                        <select defaultValue={"0"} style={{textAlign: "center"}} onChange={(e) => {setdept(e.target.value);}}>
                                            <option key={0} value={"0"}>Select Type</option>
                                            {
                                                [ 'Cubic Yards',
                                                                  'Tons'].map((item) => {return <option>{item}</option>})
                                            }
                                        </select>

                                    </Form.Input>
  <Form.Input
                                        onChange={(e) => {setMeasurement(e.target.value);}}
                                        label='Measurement'
                                    />

                                                            <Form.Input
                                                                        onChange={(e) => {setcomment(e.target.value);}}
                                                                        label='Comentario'
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
                        props.type === "update" && unavailability && !schedule &&
                        <Modal.Description>
                            Select Time Slot to mark unavailable: Start: &nbsp;
                            <DateTimePicker
                                onChange={(e) => handleChange(e)}
                                value={st}
                            />
                            End time:  &nbsp;
                            <DateTimePicker
                                onChange={(e) => handleChange1(e)}
                                value={et}
                            />
                            <br/>
                            Are you sure you want to mark this room as unavailable in the chosen time slot? You will not let anyone be able to book any meetings with this room at this time if marked
                            <br/>{<Button onClick={markRoom}>Mark As Unavailable</Button>}
                            <br/><br/>
                            Or select Time Slot to mark available, can be unavailable for an entire day if needed.
                            {unavailableTimeSlots.length > 0 &&
                                <select defaultValue={"0"} style={{textAlign: "center"}} onChange={(e) => {
                                    if (e.target.value !== "") {
                                        setToMarkAvailable(e.target.value);

                                        setInvalidTimeSlot(false);

                                    } else setInvalidTimeSlot(true)
                                }}>
                                    <option key={0} value={"0"}>Select Time Slot</option>
                                    {Array.from(Array(unavailableTimeSlots.length)).map((_, i) => (
                                        <option key={unavailableTimeSlots[i].ra_id} value={unavailableTimeSlots[i].ra_id}>{`${unavailableTimeSlots[i].start} - ${unavailableTimeSlots[i].end}`}</option>
                                    ))}
                                </select>
                            }
                            {unavailableTimeSlots.length === 0 && <p style={{fontSize:"1em"}}>This Room has no time slots marked as unavailable</p>}
                            {invalidTimeSlot && <div style={{color: "red"}}> Please select a time slot</div>}
                            <br/>
                            { unavailableTimeSlots.length > 0 &&
                                <p style={{fontSize: "1em"}}>Are you sure you want to mark this room as available in the chosen time slot? Anyone will be able to book any meetings with this room at this time if marked</p>
                            }

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