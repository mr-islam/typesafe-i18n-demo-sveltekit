<script lang="ts">
	import LL from '$i18n/i18n-svelte'
	import Gallery from '$lib/Gallery.svelte'
	import IntroBullets from '$lib/IntroBullets.svelte'
	import Courses from '$lib/Courses.svelte'
	import Articles from '$lib/Articles.svelte'
	import Goals from '$lib/Goals.svelte'
	import Contact from '$lib/elements/Contact.svelte'

	console.log($LL.title)
</script>

<svelte:head>
	<title>{$LL.center() + ' ' + $LL.title()}</title>
</svelte:head>

<Gallery />
<IntroBullets />
<Courses />
<Articles />
<Goals />
<Contact />