import PageContainer from "./Container";

function UserLayout(props){
    return (
        <PageContainer>
            <div className="row mx-0 mt-4 justify-content-center">
                {props.children}
            </div>
        </PageContainer>
    );
}

export default UserLayout;