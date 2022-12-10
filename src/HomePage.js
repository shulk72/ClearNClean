import { useNavigate} from "react-router-dom";
import React, { useState} from 'react';
import {
        Button,
        Divider,
        Form,
        Grid,
        Header,
        Modal,
        Segment, Image
} from 'semantic-ui-react';
import Logo from './/Assets/Log.jpg';
import axios from "axios";
function HomePage() {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data,setdata] =  useState([]);
    const handleChange = () => {
        setOpen(true);
    }
    const handleLogin = () => {
      navigate("/Dashboard")
    }
    const navigate = useNavigate();
    function check() {


        axios.get('https://cleanncleardb2.herokuapp.com/CleanNClear/users').then(res=>
        {
            setdata(res.data);

        })

        for(let i=0; i<data.length;i++){

        if (data[i].username === email && data[i].userpassword=== password||data[i].useremail === email && data[i].userpassword=== password){

             localStorage.removeItem("login-data")
                localStorage.setItem("login-data", JSON.stringify(data[i]))
                console.log(localStorage.getItem("login-data"))
            return false
        }
        }
        return true
    }
    return (
        <>
        <Segment>
            <Header dividing textAlign="center" size="huge">Welcome to ClearNClean</Header>

            <Modal
                centered={false}
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            >
            <Modal.Header>Invalid!</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    Your email or password is invalid please, try again.

                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setOpen(false)}>OK</Button>
        </Modal.Actions>
        </Modal>
    <Segment placeholder>
    <h1>  <Image src={Logo} size='small' rounded  centered/></h1>
        <Grid columns={1} relaxed='very' stackable>
        <Grid.Column>
            <Form>
                <Form.Input
                    icon='email'
                    iconPosition='left'
                    label='Email'
                    placeholder='Email'
                    value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <Form.Input
                    icon='lock'
                    iconPosition='left'
                    label='Password'
                    type='password'
                    value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <Button content='Login' primary onClick={check()? handleChange:handleLogin}/>
            </Form>
        </Grid.Column>
    </Grid>

</Segment>
</Segment>
</>
)
}
export default HomePage;
