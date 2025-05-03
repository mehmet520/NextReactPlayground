'use client'

export default function UserCard(props) {

    return (
        <div>
            <img src={props.image} alt={props.title} style={{width:'35%', borderRadius:'8px'}} />
            <h2>{props.name}</h2>
            <p>Email: {props.email}</p>
            <button onClick={() => props.onSendEmail(props.email)}>Send Email</button>
        </div>
    );
}