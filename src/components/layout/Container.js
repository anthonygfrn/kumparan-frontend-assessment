import * as React from 'react';

function PageContainer(props) {
    return <div className="container">{props.children};</div>;
}

export default React.memo(PageContainer);
