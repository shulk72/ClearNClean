import React, { useEffect, useState} from 'react';
import axios from "axios";
import {
    Grid,
    Segment, Form, Button, Modal
} from 'semantic-ui-react'
import {Link} from "react-router-dom";
export default

function Vehicles(){
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

</Segment>
</Segment>
</>

}