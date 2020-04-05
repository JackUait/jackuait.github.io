import React from "react";
import "./App.css";
import ActionButton from "./modules/ActionButton/ActionButton";
import InfoField from "./modules/InfoField/InfoField";
import quotes from "./quotes";
import Option from "./modules/Option/Option";
import themes from "./themes";
import Signature from "./modules/Signature/Signature";

class App extends React.Component {
	state = {
		quotes,
		themes,
		currentQuote: "",
		currentTheme: "greatQuotes",
	};

	displayQuote = () => {
		let randomNumber =
			Math.ceil(
				Math.random() * this.state.quotes[this.state.currentTheme].length,
			) - 1;
		this.setState((prevState) => ({
			currentQuote: this.state.quotes[this.state.currentTheme][randomNumber],
		}));
	};

	handleChange = (event) => {
		const { value } = event.target;
		this.setState({
			currentTheme: value,
		});
	};

	render() {
		const options = this.state.themes.map((theme, id) => (
			<Option
				key={id}
				name="currentTheme"
				checked={this.state.currentTheme === theme.value}
				onChange={this.handleChange}
				value={theme.value}
				text={theme.text}
			/>
		));

		return (
			<div className="App">
				<InfoField
					text={this.state.currentQuote ? this.state.currentQuote : null}
				/>
				<ActionButton text="Хочу цитату!" onClick={this.displayQuote} />
				<div
					name="currentTheme"
					className={"themeChanger"}
					onChange={this.handleChange}
				>
					<Signature text="Какие цитаты показывать?" />
					{options}
				</div>
			</div>
		);
	}
}

export default App;
