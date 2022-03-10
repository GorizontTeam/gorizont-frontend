<script>
	import Header from '$lib/header/Header.svelte';
	import Loader from '$lib/Loader/index.svelte';
	import '../app.css';
	import { createClient, setClient } from '@urql/svelte';
	import { writable } from 'svelte/store';

	const client = createClient({
		url: 'http://127.0.0.1:8000/graphql/',
		// fetchOptions: () => {
		// 	const token = getToken();
		// 	return {
		// 		headers: { authorization: token ? `Bearer ${token}` : '' },
		// 	};
		// },
		fetchOptions: () => ({
			headers: {
				Authorization: $store?.token,
			}
		})
	});
	setClient(client);

	export let store = writable(null);

	console.log();
</script>
<Loader />
<Header />

<main style="padding-top: 100px">
	<slot />
</main>
