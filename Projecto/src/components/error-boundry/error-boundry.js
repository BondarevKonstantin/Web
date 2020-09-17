import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';

// Компонент для обработки ошибок.
// Выясняет, в каком блоке ошибка, и выводит вместо этого блока <ErrorIndicator />
// Использование: <ErrorBoundry> <App /> </ ErrorBoundry>

export default class ErrorBoundry extends Component {

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        // Возвращает вложенный элемент, если нет ошибки

        return this.props.children;
    };
};
