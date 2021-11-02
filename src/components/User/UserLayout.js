import * as React from 'react';
import PageContainer from '../layout/Container';

function UserLayout(props) {
    return (
        <PageContainer>
            <div className="row mx-0 mt-4 justify-content-center">
                {props.children}
            </div>
        </PageContainer>
    );
}

export default React.memo(UserLayout);
