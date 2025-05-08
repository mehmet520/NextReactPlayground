'use client'

export default function OptionalBox(props) {
    if (!props.visible) return null;

    return (
        <div>
            <h3>Details</h3>
            <p>Dieser Inhalt ist nur sichtbar, wenn visible true ist.</p>
        </div>
    )
}