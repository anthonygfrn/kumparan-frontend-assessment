import React from 'react';

function Title({ title, variant }) {
    return <div className={variant}>{title}</div>;
}

export default React.memo(Title);
