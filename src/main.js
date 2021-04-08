import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Carlos',
		lastName:'Córdova'
	}
});

export default app;