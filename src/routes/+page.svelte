<script lang="ts">
	let name: string = 'Max Mustermann';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<form on:submit|preventDefault>
	<label for="name">Name</label>
	<input type="text" id="name" bind:value={name} />
</form>

<div>
	Name:
	{name}
</div>

<style lang="scss">
	input {
		appearance: none;
	}
</style>
