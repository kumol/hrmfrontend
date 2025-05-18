import React from 'react';
import axios from 'axios';
import moment from 'moment';
import RunningTd from "./RunningTd";

const Table = ({ users, logedUser, eventHandler }) => {
    const getRunning = (number) => {
        const seconds = moment.duration(number, 'seconds').hours();
        const hours = moment.duration(number, 'seconds').minutes();
        const minutes = moment.duration(number, 'seconds').seconds();
        let value = `${seconds < 10 ? `0${seconds}` : seconds}:${
            hours / 10 < 1 || hours == 0 ? `0${hours}` : hours
        }:${minutes < 10 ? `0${minutes}` : minutes}`;
        // getRunning(Date.now() - Date.now(props.clockinTime))
        return value;
    };

    return (
        <div style={styles.container}>
            <table style={styles.table}>
                <thead>
                <tr>
                    {[
                        'Name',
                        'Date',
                        'Starting Time',
                        'Working Status',
                        'Work Time',
                        'Out Time',
                        "Action"
                    ].map((header) => (
                        <th key={header} style={styles.header}>
                            {header}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={index} style={((index % 2) == 0) ? styles.even : styles.odd}>
                        <td style={styles.cell}>{user.name}</td>
                        <td style={styles.cell}>{user.date}</td>
                        <td style={styles.cell}>{user.startTime}</td>
                        <td style={styles.cell}>{user.isBreak ? "In Break" : user.startTime ? "Working" : "Absent"}</td>
                        <td style={styles.cell}>{getRunning(user.total || 0)}</td>
                        {/*<RunningTd cell={styles.cell} total={user.total} ></RunningTd>*/}
                        <td style={styles.cell}>{user.checkOut}</td>
                        <td style={styles.cell}>
                            {
                                user.id === logedUser.id ? user.isBreak ? <button
                                    style={styles.button}
                                    onClick={(e) => eventHandler(e, 'resume', user.id)}
                                >
                                    Resume
                                </button> : <button
                                    style={styles.button}
                                    onClick={(e) => eventHandler(e, 'pause', user.id)}
                                >
                                    Pause
                                </button> : null

                            }
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
//     //'#8976fd',
};

const styles = {
    container: {
        overflowX: 'auto',
        padding: '20px',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    },
    header: {
        backgroundColor: "#f3f1ff",
        color: 'black',
        padding: '10px',
        textAlign: 'center',
    },
    cell: { padding: '10px' },
    odd: {
        backgroundColor: '#eee',
    },
    even: {
        backgroundColor: '#fcfafa',
    },
    button: {
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
};

export default Table;
