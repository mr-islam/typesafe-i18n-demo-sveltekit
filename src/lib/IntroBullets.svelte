<script context="module">
	import LL, { locale } from '$i18n/i18n-svelte'
</script>

<div id="flex">
	<a class="box" id="box-1" href="/{$locale}/goals">
		<div>
			<p>
				{$LL.welcome.mission()}
			</p>
		</div>
	</a>

	<a class="box" id="box-4" href="/{$locale}/articles">
		<div>
			<p>
				{$LL.welcome.online()}
			</p>
		</div>
	</a>
	<a class="box" id="box-3" href="/{$locale}/contact">
		<div>
			<p>{$LL.welcome.contact()}:</p>
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

	P {
		color: var(--accent-color);
		padding: 15px 10px;
		margin: 10px;
	}

	a.box {
		/* margin: 5px; */
		border-radius: 12px;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		font-size: 1.5rem;
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
