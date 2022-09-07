<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Button from './Button.svelte';

	let count = 0;
	function handleClick() {
		count += 1;
	}
</script>

<Meta title="Atoms/Button" component={Button} />

<Template let:args>
	<div class="container">
		<Button {...args} on:click={handleClick}>
			You clicked: {count}
		</Button>
	</div>
</Template>

<Story name="Default" />

<style lang="scss">
	@use '$scss/restrictions.scss' as restrictions;

	div.container {
		@include restrictions.default;
	}
</style>
