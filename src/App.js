import UserList from "./components/UserList";
import { Helmet } from "react-helmet";

function App() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Kumparan Assessment</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <UserList />
        </div>
    );
}

export default App;
