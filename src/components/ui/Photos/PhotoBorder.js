import * as React from 'react';

function PhotoBorder(props) {
    return <div className="border border-dark h-100">{props.children}</div>;
}

export default React.memo(PhotoBorder);
