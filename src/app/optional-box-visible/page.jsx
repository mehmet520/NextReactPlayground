'use client'

import {useState } from 'react'
import OptionalBox from './OptionalBox'
import LoggableBox from './LoggableBox'

export default function OptionalBoxVisiblePage() {
    const [showDetails, setShowDetails ] = useState(false)

    return (
        <main style={{padding: '2rem', fontFamily: 'sans-serif'}}>
            <h1>📦 OptionalBox Sichtbarkeitsbeispiel</h1>
            <button onClick={ () => setShowDetails( prev => !prev)}>
                {showDetails ? 'Details verbergen' : 'Details anzeigen'}
            </button>
            {/* Wenn die Kisten sichtbar sind, werden sie gerendert. */}
            <OptionalBox visible={showDetails}/>
            <LoggableBox visible= {showDetails} />

        </main>
    )
}