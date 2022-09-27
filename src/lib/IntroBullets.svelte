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
		<div class="main-title">هدفنا</div>
		<div>
			<p class="intro-bullet">
				{$LL.welcome.mission()}
			</p>
		</div>
	</a>

	<a class="box" id="box-4" href="/{$locale}/articles">
		<div class="main-title">المكتبة</div>
		<div>
			<p class="intro-bullet">
				{$LL.welcome.online()}
			</p>
		</div>
	</a>

	<a class="box" id="box-3" href="/{$locale}/contact">
		<div class="main-title">للاستفسار</div>
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
		gap: 20px;
		height: 100%;
	}

	p {
		padding: 0 2.5px;
		margin: 5px 5px;
		color: inherit;
	}

	:global(p.rtl) {
		color: var(--accent-color);
		font-weight: bold;
		font-size: 1.4rem;
	}
	:global(p.ltr) {
		color: var(--accent-color);
		font-size: 1.2rem;
	}

	a.box {
		/* margin: 5px; */
		border-radius: 12px;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		display: block;
		flex: 1 1 auto;
		display: flex;
		align-items: center;
		border-width: 5px;
		border-style: solid;
	}
	a > div.main-title {
		border-width: 1px;
		border-style: solid;
		margin: 0 10px;
		padding: 10px;
		border-radius: 12px;
	}
	a#box-1 {
		border-color: #017878;
		background-color: #ecffff;
		color: #017878;
	}
	a#box-1 > div.main-title {
		border-color: #017878;
		background-color: #017878;
		color: #ecffff;
	}
	a#box-2 {
		border: 10px solid rgb(255, 255, 195);
	}
	a#box-2 > div.main-title {
		border-color: #017878;
		background-color: #017878;
		color: #ecffff;
	}
	a#box-3 {
		border-color: rgb(118, 118, 0);
		background-color: rgb(255, 255, 227);
		color: rgb(118, 118, 0);
	}
	a#box-3 > div.main-title {
		border-color: rgb(118, 118, 0);
		background-color: rgb(118, 118, 0);
		color: rgb(255, 255, 227);
	}
	a#box-4 {
		border-color: rgb(173, 0, 173);
		background-color: rgb(255, 245, 255);
		color: rgb(173, 0, 173);
	}
	a#box-4 > div.main-title {
		border-color: rgb(173, 0, 173);
		background-color: rgb(173, 0, 173);
		color: rgb(255, 245, 255);
	}

	@media only screen and (max-width: 600px) {
	}
</style>
