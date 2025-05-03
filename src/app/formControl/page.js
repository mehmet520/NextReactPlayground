'use client';

import React, { useState } from "react";
import UserForm from './components/UserForm';
import './formControl.css'; // Import updated CSS for styling

function FormControl() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const updateField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="form-control-page">
      <h1>Formularsteuerungsseite</h1>
      <p>
        Diese Seite demonstriert die Zustandsverwaltung und kontrollierte Komponenten in React, indem Formulardaten dynamisch aktualisiert und angezeigt werden.
      </p>
      <pre className="form-data">{JSON.stringify(formData, null, 2)}</pre>
      <UserForm formData={formData} onFieldChange={updateField} />
    </div>
  );
}

export default FormControl;
