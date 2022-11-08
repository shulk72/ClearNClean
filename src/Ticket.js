import React, { useEffect, useState} from 'react';
import axios from "axios";
import {
    Grid,
    Segment, Form, Button, Modal
} from 'semantic-ui-react'
import {Link} from "react-router-dom";
export default

function Ticket(){
    const [r, setr] = useState(false);
    const [t, sett] = useState(false);
    const [b, setb] = useState(false);
    const [dates, setDates] = useState([]);
    const [open, setOpen] = useState(false);
    const [booking, setbooking] = useState(false);
    const [book, setbook] = useState(false);
    const [unavailable, setavailable] = useState(false);
    const [unavail, setavail] = useState(false);
    const [mark,setmark] = useState(false);
    const [st_dt, setst_dt] = useState("");
    let [et_dt, setet_dt] = useState("");
    const[room_id,setroom_id] = useState("");
    const[invitee,setinvitee]=  useState("");
    const [g,setg]= useState(false);
    const [its,setits] = useState(false)
    const [Selected,SetSelect] = useState(false)
    const [free, setfree] = useState(false);
    const [updatebooking,setupdatebooking] = useState(false);
    const[deletebooking,setdeletebooking] =useState(false)
    const [updateunavailable,setupunavailable]= useState(false);
    const [deleteunavailable,setdeleteupunavailable]= useState(false);
    const [listfree,setlistfree]=useState([]);
    const [listfr,setlistfr]=useState([]);
    const [host,sethost] = useState([]);
 const [a,seta] =useState(false)
    let e = localStorage.getItem("login-data");
    let   dat = JSON.parse(e)
    const[un,setun] =  useState("");
    const [ba_id,setba_id] = useState("");
    const [New,setnew] = useState("");
    const[und,setund]= useState(false);
    const[delebook,setdelebook] = useState(false);
    const [rooms, setRooms] = useState([]);
    const[k,setk] = useState(false);
    const[y,sety] = useState(false);
    const[ts,sets]= useState([]);
    const[s,setl]= useState([]);
    const[h,seth]= useState(false);
    const[date,setdate]=useState("")
    const[sh,setlh]= useState(false);
    const[z,setz]=useState(false);
    const[all,setall]= useState([]);
    const[ty,setty]= useState([]);
const [he,sethe]=useState(false)
    const [pe,setpe] =useState("")
    const [je,setje]=useState(false)
    const [userday,setuserday] =useState(false)
    const [room,setroom] =useState(false)
    const[ho,setho]= useState(false);
    const[hosted,sethosted]= useState(false);
    const[ed,seted]= useState(false);
    const[hstd,sethstd]= useState(false);
    const[ost,setost]= useState(false);

function first() {
        if(ba_id===""||st_dt === "" || et_dt === "" || room_id === "" || invitee === ""){
            return false
        }
        return true
    }

return <>
     <Segment>
       <Segment placeholder>

<Button fluid onClick={() => {setOpen(true)}}> Create Ticket </Button>
        <Modal
            centered={false}
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Modal.Header> Insert information for ticket</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Form>
                        <Form.Field>
                            <Form.Input
                                placeholder=" Vehicle"
                                label="Vehicle"
                                value={ba_id}
                                onChange={e => setba_id(e.target.value)}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input
                                fluid
                                name="Yard In"
                                placeholder="Insert Yard In"
                                label="Yard In"
                                value={st_dt}
                                onChange={e => setst_dt(e.target.value)}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input
                                fluid
                                name="Weight In"
                                placeholder="Weight In"
                                label="Weight In"
                                value={et_dt}
                                onChange={e => setet_dt(e.target.value)}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input label='Material Type'>
                                <select defaultValue={"0"} style={{textAlign: "center"}} onChange={(e) => {setroom_id(e.target.value)}}>
                                    <option key={0} value={"0"}>Select Room</option>
                                    {rooms.map(item => {
                                        return (<option key={item.r_id} value={item.r_id}>{item.r_name}</option>)
                                    })}
                                </select>
                            </Form.Input>
                        </Form.Field>
                        <Button content='Submit' icon='signup' size='big' onClick={() => (first()?sety(true): sett(true))}/>
                    </Form>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
            </Modal.Actions>
        </Modal>
</Segment>
</Segment>
</>



















}