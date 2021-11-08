import * as React from 'react';

function Text(props) {
    return <div className={props.variant}>{props.children}</div>;
}

export default React.memo(Text);
