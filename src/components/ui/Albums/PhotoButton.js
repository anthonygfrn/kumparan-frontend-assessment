import * as React from 'react';

function PhotoButton(props) {
    return <div className="small m-2">{props.children}</div>;
}

export default React.memo(PhotoButton);
