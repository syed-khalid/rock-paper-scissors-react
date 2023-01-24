import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const choices = ["rock", "paper", "scissor"];

	const [userChoice, setUserChoice] = useState(null);
	const [computerChoice, setComputerChoice] = useState(null);
	const [result, setResult] = useState(null);

	const handleClick = (value) => {
		setUserChoice(value);
		generateComputerChoice();
	};

	const generateComputerChoice = () => {
		const randomNumber = Math.floor(Math.random() * choices.length);
		const randomChoice = choices[randomNumber];
		setComputerChoice(randomChoice);
	};

	const generateResult = () => {
		switch (userChoice + computerChoice) {
			case "rockscissor":
			case "paperrock":
			case "scissorpaper":
				setResult("User Wins");
				break;

			case "rockpaper":
			case "paperscissor":
			case "scissorrock":
				setResult("Computer Wins");
				break;

			case "rockrock":
			case "paperpaper":
			case "scissorscissor":
				setResult("Draw");
				break;
		}
	};

	useEffect(() => {
		generateResult();
	}, [computerChoice, userChoice]);

	return (
		<div className='App'>
			<h1>User Choice is: {userChoice}</h1>
			<h1>Computer Choice is: {computerChoice}</h1>

			{choices.map((choice, index) => (
				<button key={index} onClick={() => handleClick(choice)}>
					{choice}
				</button>
			))}

			<h1>Result: {result}</h1>
		</div>
	);
}

export default App;

