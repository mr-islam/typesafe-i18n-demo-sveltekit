<script lang="ts">
	import LL from '$i18n/i18n-svelte'
	import Gallery from '$lib/Gallery.svelte'
	import Courses from '$lib/Courses.svelte'

	console.log($LL.title)
</script>

<svelte:head>
	<title>{$LL.center() + ' ' + $LL.title()}</title>
</svelte:head>

<Gallery />
<Courses />
