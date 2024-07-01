// import { useState } from "react";
import {
	MainBody,
	Body,
	Window,
	Titlebar,
	Tab,
	Content,
} from "./components/StyledComps";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.scss";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<MainBody>
				<div className="header" />
				<Body>
					<h1>Tetra Gold</h1>
					<Window>
						<Titlebar>
							<Tab $active={true}>Home</Tab>
							<Tab $active={false}>Squad</Tab>
						</Titlebar>
						<Content>Content</Content>
					</Window>

					{/* <GenericComp /> */}
				</Body>
				<div className="footer" />
			</MainBody>
		</>
	);
}

export default App;
