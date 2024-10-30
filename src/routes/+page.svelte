<script>
	import About from './About.svelte';
	import Contact from './Contact.svelte';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import Hero from './Hero.svelte';
	import Projects from './Projects.svelte';
	import Skills from './Skills.svelte';
	import ScrollAnimation from './ScrollAnimation.svelte';
</script>

<svelte:head>
	<title>Daniel Benício | Software Development & Cloud</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<ScrollAnimation delay={500}>
		<Header />
	</ScrollAnimation>
	<Hero />
	
	<ScrollAnimation>
			<About />
	</ScrollAnimation>
	
	<ScrollAnimation delay={200}>
			<Projects />
	</ScrollAnimation>
	
	<ScrollAnimation delay={400}>
			<Skills />
	</ScrollAnimation>
	
	<ScrollAnimation delay={600}>
			<Contact />
	</ScrollAnimation>
</section>

<Footer />

<style>
	section {
			padding: 2.75rem 8.375rem;
	}

	@media (max-width: 768px) {
			section {
					padding: 1rem 2rem;
			}
	}
</style>