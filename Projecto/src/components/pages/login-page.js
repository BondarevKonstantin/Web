import React from 'react';
import { withRouter } from 'react-router-dom';

import { LoginForm, RegistrationForm } from '../forms';
import Row from '../row';

const LoginPage = () => {

    return (
        <Row
            left={<LoginForm />}
            right={<RegistrationForm />}
        />
    );
};

export default withRouter(LoginPage);
