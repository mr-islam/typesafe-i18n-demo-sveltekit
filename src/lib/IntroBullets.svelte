<script>
	import LL, { locale } from '$i18n/i18n-svelte'
	import { onMount, afterUpdate } from 'svelte'

	let p_elements // This below: for custom styles (fonts mainly) based on language
	onMount(() => {
		p_elements = document.querySelectorAll('.intro-bullet')
		for (const p_element of p_elements) {
			p_element.classList.add($locale === 'ar' ? 'rtl' : 'ltr')
		}
	})
	afterUpdate(() => {
		for (const p_element of p_elements) {
			p_element.classList.add($locale === 'ar' ? 'rtl' : 'ltr')
		}
	})
</script>

<div id="flex">
	<a class="box" id="box-1" href="/{$locale}/goals">
		<div>
			<p class="intro-bullet">
				{$LL.welcome.mission()}
			</p>
		</div>
	</a>

	<a class="box" id="box-4" href="/{$locale}/articles">
		<div>
			<p class="intro-bullet">
				{$LL.welcome.online()}
			</p>
		</div>
	</a>
	<a class="box" id="box-3" href="/{$locale}/contact">
		<div>
			<p class="intro-bullet">
				{$LL.welcome.contact()}:
			</p>
		</div>
	</a>

	<!-- NOT READY YET 
    <a href="/{$locale}/curriculum">
		<div class="box" id="box-2">
			<p>
				{$LL.welcome.complete_curriculum()}
			</p>
		</div>
	</a> -->
</div>

<style>
	div#flex {
		display: flex;
		flex-direction: column;
		gap: 25px;
		height: 100%;
	}

	:global(p.rtl) {
		color: var(--accent-color);
		padding: 15px 10px;
		margin: 10px 30px;
		font-weight: bold;
		font-size: 1.5rem;
	}
	:global(p.ltr) {
		color: var(--accent-color);
		padding: 15px 10px;
		margin: 10px 30px;
		font-size: 1.2rem;
	}

	a.box {
		/* margin: 5px; */
		border-radius: 12px;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	}

	a#box-1 {
		background-color: rgb(174, 255, 255);
		display: block;
		flex: 1 1 auto;
		display: flex;
		align-items: center;
	}
	a#box-2 {
		background-color: rgb(255, 255, 195);
		display: block;
		flex: 1 1 auto;
		display: flex;
		align-items: center;
	}
	a#box-3 {
		background-color: rgb(196, 255, 196);
		display: block;
		flex: 1 1 auto;
		display: flex;
		align-items: center;
	}
	a#box-4 {
		background-color: rgb(255, 209, 255);
		display: block;
		flex: 1 1 auto;
		display: flex;
		align-items: center;
	}

	@media only screen and (max-width: 600px) {
	}
</style>
