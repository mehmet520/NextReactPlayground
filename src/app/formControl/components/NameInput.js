'use client';

export default function NameInput({value, onChange}) {

    return (
        <input 
        type="text"
        placeholder='Adinizi Giriniz'
        value={value}
        onChange={(e) => onChange('name', e.target.value)} 
        />
    );
}