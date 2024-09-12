import React, { useState } from 'react';
import View from './service-components/view';
import Form from './service-components/form';
import UpdateForm from './service-components/form_update';

const Services = () => {
    const [currentView, setCurrentView] = useState('listView'); 

    const handleListClick = () => {
        setCurrentView('listView'); 
    };

    const handleFormClick = () => {
        setCurrentView('formView'); 
    };

    const handleUpdateClick = () => {
        setCurrentView('updateView'); 
    };

    const handleFormSuccess = () => {
        setCurrentView('listView'); 
    };

    return (
        <>
            {currentView === 'listView' && (
                <View onButtonClick={handleFormClick} onsingleClick={handleUpdateClick} />
            )}
            {currentView === 'formView' && (
                <Form onSuccess={handleFormSuccess} />  
            )}
            {currentView === 'updateView' && (
                <UpdateForm />
            )}
        </>
    );
};

export default Services;
