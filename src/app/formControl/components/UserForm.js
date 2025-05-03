'use client';

import NameInput from './NameInput';
import EmailInput from './EmailInput';

function UserForm ({formData, onFieldChange}) {
    return (
        <>
            <NameInput value={formData.name} onChange={onFieldChange}/>
            <EmailInput value={formData.email} onChange={onFieldChange} />
        </>
    );
}

export default UserForm;