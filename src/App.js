import React, { useState } from 'react'
import './App.css'
import Pokemon from './Pokemon'

const pokemons = ['bulbasaur', 'pikachu', 'ditto', 'bulbasaur']

function App() {
	const [pollingInterval, setPollingInterval] = useState(0)

	const onPollingIntervalChange = (e) =>
		setPollingInterval(Number(e.target.value))

	const renderedPokemons = pokemons.map((pokemon, index) => (
		<Pokemon 
			key={index}
			name={pokemon}
			pollingInterval={pollingInterval}
		/>
	))
	
	return (
		<div className="App">
			<select onChange={onPollingIntervalChange} >
				<option value={0}>Off</option>
				<option value={1000}>1s</option>
				<option value={5000}>5s</option>
			</select>
			<div>
				{renderedPokemons}
			</div>
		</div>
	)
}

export default App
