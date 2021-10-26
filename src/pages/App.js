import Routes from "../navigation/Routes";
import TopNav from "../components/layout/Nav";
import { Helmet } from "react-helmet";

function App() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Kumparan Assessment</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <TopNav />
            <Routes />
        </div>
    );
}

export default App;
