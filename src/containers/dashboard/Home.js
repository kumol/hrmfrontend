import axios from 'axios';
import Header from "../../ui/layouts/header/Header";
import Table from "../../ui/Table/Table";
import moment from "moment";
import {useEffect, useState} from "react";
import User from "../../ui/User/User";
const baseUrl = "https://hrmbackend-itic.onrender.com"

const Home = () => {
    const [users, setUsers] = useState([]);

    const eventHandler = async (e, type, userId) => {
        e.preventDefault();

        let logedUser = JSON.parse(localStorage.getItem("user"));
        let body = {
            action: type,
            time: moment().format('YYYY-MM-DD HH:mm:ss'),
            userId: logedUser.id,
            orgId: logedUser.org_id,
        };
        console.log(body);
        try {
            let data = await axios.post(`${baseUrl}/api/site/check`, body);
            if (data.status === 200) {
                fetchUser();
            } else {
                alert('there is an issue');
            }
        } catch (err) {
            alert('there is an issue');
        }
    };
    const fetchUser = async()=>{
        let id = "2";
        let time = moment().format("YYYY-MM-DD HH:mm:ss");
        let response = await axios.get(`${baseUrl}/api/site/user/report/${id}?time=${time}`);

        if(response.status === 200){
            setUsers(response.data.data || [])
        }
    }
    const activityHandler = async(e, action)=>{
        try{
            e.preventDefault()
            let user = JSON.parse(localStorage.getItem("user"));

            if(!user){
                alert("There is no user.");
                return;
            }
            let data = { action:action, time: moment().format("YYYY-MM-DD HH:mm:ss"), userId: user.id, orgId: user.org_id };
            let response = await axios.post(`${baseUrl}/api/site/check`, data);
            if(response.status === 200){
                fetchUser()
            }
        } catch (err){
            alert(err.message);
        }
    }
    const handleSubmit = async (e, userId) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${baseUrl}/api/site/user/fetch`,
                { id: userId }
            );
            if(response.status === 200 && response.data.success === true){
                localStorage.setItem('user', JSON.stringify(response.data.data));
                fetchUser();
            }
        } catch (error) {
            console.error('Error submitting user ID:', error);
        }
    };
    const getUser = ()=>{
        console.log(JSON.parse(localStorage.getItem('user')));
    }
    const logOut = ()=>{
        localStorage.removeItem("user")
        fetchUser()
    }
    useEffect( () => {
        fetchUser();
    },[])
    return (
        <>
            <Header></Header>
            {
                localStorage.getItem("user") ? < div style={{ width:"100vw", padding: "30px"}}>
                    <button style={styles.button} onClick={(e) => activityHandler(e, "start")}>
                        Start
                    </button>
                    <button style={styles.button} onClick={(e) => activityHandler(e, "end")}>Check Out</button>
                </div> : null
            }

            {
                localStorage.getItem("user") && localStorage.getItem("user") != undefined  ? <Table users={users} logedUser={JSON.parse(localStorage.getItem("user"))}
                                                      eventHandler={(e, type) => eventHandler(e, type)}></Table> : <User handleSubmit={(e, userId)=>handleSubmit(e, userId)} ></User>
            }
            {/*<button style={styles.button} onClick={()=>getUser()}> fetch user</button>*/}
            <button style={styles.button} onClick={()=> logOut()}>Log Out</button>
        </>
    )
}

const styles = {
    button: {
//         display: "inline-flex",
//         height: "46px",
//         padding: "12px 30px",
//         justifyContent: "center",
// alignItems: "center",
// gap: "8px",
// flexShrink: 0,
//         borderRadius: "50px",
// background: "#8976FD",

        backgroundColor: '#5e5de3',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '4px',
        cursor: 'pointer',
        margin: '0 5px',
    },
    button53: {
        backgroundColor: '#8976fd',
        color: '#ffffff',
    },
}

export default Home;