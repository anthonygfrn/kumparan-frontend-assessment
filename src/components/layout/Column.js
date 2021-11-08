import * as React from 'react';

function Column(props) {
    return (
        <div className={props.variant} key={props.key} style={props.style}>
            {props.children}
        </div>
    );
}

export default React.memo(Column);
