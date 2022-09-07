<script lang="ts">
	import '$scss/main.scss';
</script>

<div class="container">
	<slot />
</div>

<style lang="scss">
	@use '$scss/restrictions.scss' as restrictions;

	.container {
		@include restrictions.default;
	}
</style>
