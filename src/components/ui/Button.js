import React from 'react';
import Button from 'react-bootstrap/Button';

const Buttons = (props) => {
    // const buttonContent = React.useMemo(
    //     () => (props.text ? props.text : props.children ? props.children : ''),
    //     props
    // );

    return (
        <Button
            className={props.variant}
            onClick={props.onClick}
            style={props.style}
            type={props.type}
        >
            <div>{props.children}</div>
        </Button>
    );
};

export default Buttons;
