<script>
	import About from "./components/About.svelte";
	import Text from "./components/Text.svelte";
	import Person from "./components/Person.svelte";
	import Skills from "./components/Skills.svelte";
	import Input from "./components/Input.svelte";
	export let name;
	export let lastName;

	let slogo = "https://arepa.s3.amazonaws.com/svelte-logo.png";

	const data = {
		name: "Carlos",
		lastName: "Córdova",
		age: 25,
	}

</script>


<style>
	:global(body){
		background: #ffebe4;
		color: rgb(81, 94, 94);
		
	}

	:global(:root){
		--theme-color: rgb(230, 157, 2);

	}

	:global(body.dark-mode){
		background-color:rgb(31, 35, 36);
		color: #ffebe4;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	main img {
		width: 30%;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>Hello {name} {lastName}!</h1>
	<About/>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<Text/>
	<Person name={data.name} lastName={data.lastName} age={data.age}/>
	<Person {...data}/>

	<Text anotherText="Prueba de props"/>
	<Skills/>
	
	<Input/>
	<img src={slogo} alt="svelte">
</main>
