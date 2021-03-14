<template>
	<div id="app">
		<!-- Navbar -->
		<div class="w-100 border-bottom border-primary bg-dark">
			<Navbar class="w-100" />
		</div>

		<!-- Display the router Stuff -->
		<router-view />

		<!-- Footer -->
		<div class="mt-3 w-100 border-top border-primary bg-dark">
			<Footer class="w-100" />
		</div>
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import Navbar from './components/nav/Navbar'
	import Footer from './components/nav/Footer'

	// [EXPORT] //
	export default {
		name: 'App',
		components: {
			Navbar,
			Footer
		}
	}
</script>

<style>
	#app {
		font-family: minion-pro Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
