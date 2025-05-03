'use client';
import React from "react";
import {MyProvider, useMyContext } from './ContextSimulatin';

function Display() {
    const { value } = useMyContext();

    return(
        <h2>Value: {value}</h2>
    )
}

function Updater() {
    const { setValue } = useMyContext();

    return <button onClick= { () => setValue( "🌍 Hallo Welt!")}>Update</button>
}

export default function UseContext () {

    return (
        <MyProvider >
            <Display />
            <Updater />
        </MyProvider>
    )
}