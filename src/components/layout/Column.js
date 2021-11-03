import * as React from 'react';

function Column(props) {
    return (
        <div className={props.variant} key={props.key}>
            {props.children}
        </div>
    );
}

export default React.memo(Column);
