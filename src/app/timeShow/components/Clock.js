'use client';

function Clock({time, date, timeZone}) {

    return (
        <>
            <h2>Saat: {time}</h2>
            <h3>Tarih: {date}</h3>
            <p>Saat Dilimi: {timeZone}</p>
        </>
    );
}

export default Clock;