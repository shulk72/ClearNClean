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

    function createRoom(){
        if(  model==="" || brand==="" || company===""||material===""|| measurement===""||Mtype===""|| firstname===""|| lastname===""|| vid ===""){
            console.log("Empty Field")
            setCreatedMessage("Failed to create room, invalid parameters");
        } else {
            console.log("Creating Ticket")
            let data = {
                           "vid" : Number(vid),
                          "model": model,
                          "brand": brand,
                          "company": company,
                           "firstname": firstname,
                          "lastname": lastname,
                          "company": company,
                          "material":material,
                         "measurementtype": Mtype,
                          "measurement": Number(measurement),
                          "price" : 10,
                          "date": Date().toLocaleString().substr(0, 29),
                          "tid": 2



                }
                console.log(data)

            axios.post('https://cleanncleardb2.herokuapp.com/CleanNClear/tickets', data
            ).then(
                (res) => {
                    console.log(res.data);
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

        setcompany("");
     setmodel("") ;
     setmaterial("");
     setMtype("");
     setfirstname("");
     setlastname("");
     setbrand("");
     setvid("");
     setlicense("");
    setCreatedMessage("");
   setmeasurement("");

    }
    function getRoomData(){

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



    useEffect(() => {
        if(typeof roomID !== "undefined") {
            getRoomData();
        }
    }, []);









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
                    <Typography variant="body2" color="textSecondary">Ticket: {props.tid}_______ Date: {props.date}</Typography>
                    <Typography variant="body2" color="textSecondary"> License Plate: {props.license} _______ Model: {props.model}</Typography>
                     <Typography variant="body2" color="textSecondary"> Material: {props.material} _______ Measurement type: {props.measurementtype}</Typography>
                      <Typography variant="body2" color="textSecondary"> Measurement: {props.measurement} _______ Cost per {props.measurementtype}: $10.00</Typography>
                      <Typography variant="body2" color="textSecondary"> Subtotal: ${subtotal(props.measurement)}.00 </Typography>
                      <Typography variant="body2" color="textSecondary"> Tax: ${tax(props.measurement)} _______</Typography>
                      <Typography variant="body2" color="textSecondary"> Total: ${total(props.measurement)} </Typography>
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
                                :
                                   <Form.Input
                                                                        onChange={(e) => {setcompany(e.target.value);}}
                                                                        label='Company'
                                                                    />
                                   <Form.Input
                                                                        onChange={(e) => {setfirstname(e.target.value);}}
                                                                        label='First name '
                                                                    />
                                 <Form.Input
                                    onChange={(e) => {setlastname(e.target.value);}}
                                           label='Last name '
                                                                                                />
                                Vehicle Information:
 <Form.Input
                                        onChange={(e) => {setvid(e.target.value);}}
                                        label='Vehicle id'
                                    />
                                    <Form.Input
                                        onChange={(e) => {setmodel(e.target.value);}}
                                        label='Model'
                                    />
                                     <Form.Input
                                                 onChange={(e) => {setbrand(e.target.value);}}
                                                                            label='Brand'
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
                                                [ ' Yards',
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
                </Modal.Content>

                <Modal.Actions>
                    {props.type === "create" && <Button onClick={createRoom}>Submit</Button>}


                </Modal.Actions>
            </Modal>
        </div>
    );
}

export default Ticket;