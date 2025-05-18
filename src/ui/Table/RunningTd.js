import React, {useEffect, useState} from "react";
import moment from "moment/moment";

const RunningTd = (props) => {
    console.log(props.cell)
    console.log(props);
    console.log(props.children)
    const [timer, setTimer] = useState(null);
    const getRunning = (number) => {
        setTimer(number);
        const seconds = moment.duration(number, 'seconds').hours();
        const hours = moment.duration(number, 'seconds').minutes();
        const minutes = moment.duration(number, 'seconds').seconds();
        let value = `${seconds < 10 ? `0${seconds}` : seconds}:${
            hours / 10 < 1 || hours == 0 ? `0${hours}` : hours
        }:${minutes < 10 ? `0${minutes}` : minutes}`;
        // getRunning(Date.now() - Date.now(props.clockinTime))
        return value;
    };
    useEffect(()=>{
        setTimeout(()=>setTimer(timer+1), 1000);
    }, [timer])
    return (
            <td style={props.cell}>{getRunning(props.total || 0)}</td>
    )
};

export default RunningTd;