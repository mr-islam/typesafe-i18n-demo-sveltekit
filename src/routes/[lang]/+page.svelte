<script lang="ts">
	import LL from '$i18n/i18n-svelte'
	import Gallery from "$lib/Gallery.svelte";
	import IntroBullets from '$lib/IntroBullets.svelte';
	import Courses from '$lib/courses.svelte';
	
	console.log($LL.title)
</script>

<svelte:head>
	<title>{$LL.title()}</title>
</svelte:head>

<Gallery />
<IntroBullets />
<Courses />