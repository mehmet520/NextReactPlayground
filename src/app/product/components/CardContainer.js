'use client'
export default function CardContainer(props) {
    const containerStyle = {
        padding: '20px',
        margin: '15px',
        border:'2px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#2424e4',
        color: 'lightgreen'
    };

    return (
    <div style={containerStyle}>
        {props.children}
    </div>
    )
}