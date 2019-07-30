import React from 'react';

/**
 * Component which render categories and tasks list components
 *
 * @param {Object} props
 */

export default function Main(props) {
    return (
        <main>
            {props.children}
        </main>
    );
}
