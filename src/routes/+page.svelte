<script>
	import About from './About.svelte';
	import Header from './Header.svelte';
	import Hero from './Hero.svelte';
	import Projects from './Projects.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Header />
	<Hero />
	<About />
	<Projects />
</section>

<style></style>
