import React, { useState } from 'react';
import View from './service-components/view';
import Form from './service-components/form';
import UpdateForm from './service-components/form_update';

const Services = () => {
    const [currentView, setCurrentView] = useState('listView'); // Initialize to list view

    const handleListClick = () => {
        setCurrentView('listView'); // Show the list view
    };

    const handleFormClick = () => {
        setCurrentView('formView'); // Show the form view
    };

    const handleUpdateClick = () => {
        setCurrentView('updateView'); // Show the update form view
    };

    return (
        <>
            {currentView === 'listView' && (
                <View onButtonClick={handleFormClick} onsingleClick={handleUpdateClick} />
            )}
            {currentView === 'formView' && (
                <Form />
            )}
            {currentView === 'updateView' && (
                <UpdateForm />
            )}
        </>
    );
}

export default Services;
