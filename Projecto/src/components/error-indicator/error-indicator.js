import React from 'react';

import './error-indicator.css';

// Компонент возвращает пользователю сообщение об ошибке

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <span className="error-header">Error </span>
            <span>Something's not right</span>
        </div>
    );
};

export default ErrorIndicator;
