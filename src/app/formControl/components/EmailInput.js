'use client';

function EmailInput({value, onChange}) {

    return (
        <input 
        type="text"
        placeholder='EMail Adresi giriniz'
        value={value}
        onChange={(event) => onChange('email', event.target.value)} 
        />
    );
}

export default EmailInput;