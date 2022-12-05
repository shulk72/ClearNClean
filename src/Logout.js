import {Link} from "react-router-dom";
import { useNavigate} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {
    Button,

    Form,
    Grid, Header as SemanticHeader,

    Modal,
    Segment
} from 'semantic-ui-react';
import axios from "axios";



function Logout() {
 const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [t, sett] = useState(false);
    const [r, setr] = useState(false);
    const [e, sete] = useState(false);
    const [g,setg] = useState(false);
    const [info, setinfo] = useState(false);
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [phone, setphone] = useState("");
    const [gender, setgender] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let [data, setdata] = useState("");
    let [name, setname] = useState("");



    const handleChange = () => {
        setOpen(true);
    }
    function y()  {
      localStorage.removeItem("login-data")
             navigate("/")

    }
    const q = () => {
        sett(true)
    }




    function check() {

        if ( !y) {
            return false
        } else {
            let e = localStorage.getItem("login-data");
            let dat = JSON.parse(e)
            data = {"p_id": dat.p_id,
                "p_fname": fname,
                "p_lname": lname,
                "p_role": name.p_role,
                "p_email": email,
                "p_phone": phone,
                "p_gender": gender2(gender),
                "p_password": password}
            if (fname ==="") {
              data.p_fname= name.p_fname
              console.log(fname);
            }
            if (lname===""){
                data.p_lname=name.p_lname;
            }
            if (email===""){
                data.p_email=name.p_email;

            }
            if (phone===""){
                data.p_phone=name.p_phone;
            }
            if (gender===""){
                data.p_gender=name.p_gender;
            }
            if (password===""){
                data.p_password=name.p_password;
            }
            axios.put('https://booking-system-pika.herokuapp.com/pika-booking/persons', data).then(res => {
                setdata(res.data);
                window.location.reload(false);
            })

            console.log(data);
            return true
        }
    }
    function gender1(parameter){
        switch(parameter) {
            case 1:
                return "Male"
            case 2:
                return "Female"

        }
    }
    function gender2(parameter){
        switch(parameter) {
            case "male":
                return 1
            case "female":
                return 2

        }
    }
    function Role(parameter) {
        switch (parameter) {
            case 1:
                return "Student"
            case 2:
                return "Professor"
            case 3:
                return "Staff"
            default:
                return "Visitor"
        }
    }
    useEffect(()=>{})
        return (
            <>


                <Modal
                    centered={false}
                    open={t}
                    onClose={() => sett(false)}
                    onOpen={() => sett(true)}
                >
                    <Modal.Header>Are you sure?</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={() => sett(false)}>No</Button>
                        <Button onClick={() => y()}>Yes</Button>
                    </Modal.Actions>
                </Modal>
                <Modal
                    centered={false}
                    open={g}
                    onClose={() => setg(false)}
                    onOpen={() => setg(true)}
                >
                    <Modal.Header>You have deleted your account</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Link to = "/" > <button>
                          Ok
                        </button>
                        </Link>
                    </Modal.Actions>
                </Modal>

                <Grid >
                    <Grid.Column style={{maxWidth: 200, marginTop: 20}}>

                        <Form>
                            <Segment>

                                <Form.Field>

                                    <Form.Button content='Log Out' primary onClick={q}/>
                                </Form.Field>
                            </Segment>
                        </Form>


                    </Grid.Column>
                </Grid>
            </>

        )


}
export default Logout;