import * as React from 'react';

function Text(props) {
    return <span className={props.variant}>{props.children}</span>;
}

export default React.memo(Text);
