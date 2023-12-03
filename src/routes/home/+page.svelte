<script>
	export let data;
</script>

<h1>home</h1>
<p>this is the home page.</p>

<svelte:component this={data.component} message={data.message} />
