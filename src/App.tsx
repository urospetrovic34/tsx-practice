import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Status } from "./components/Status";

function App() {

    return (
        <div className="App">
            <Status status='success'/>
            <Heading>You don't have to be a Hoe</Heading>
            <Oscar>
                <Heading>Jennifer Lawrence is a Who-R</Heading>
            </Oscar>
            <Greet name="Neon Sanders" messageCount={36} isLoggedIn={true}/>
            <Greet name="Boobara" isLoggedIn={true}/>
        </div>
    );
}

export default App;
