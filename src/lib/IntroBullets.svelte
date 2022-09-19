<script context="module">
	import LL from '$i18n/i18n-svelte'
</script>

<div id="flex">
	<div class="box" id="box-1">
		<p>
			{$LL.welcome.mission()}
		</p>
	</div>
	<div class="box" id="box-2">
		<p>
			{$LL.welcome.complete_curriculum()}
		</p>
	</div>
	<div class="box" id="box-3">
		<p>
			{$LL.welcome.articles()}
		</p>
	</div>
	<div class="box" id="box-4">
		<p>
			{$LL.welcome.online()}
		</p>
	</div>
</div>

<style>
	div#flex {
		display: flex;
		flex-direction: column;
		gap: 5px;
		flex: 1 1 auto;
	}

	P {
		color: var(--accent-color);
    margin: 15px 10px;
	}

	div.box {
		margin: 5px;
		border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	}

	div#box-1 {
		background-color: rgb(174, 255, 255);
	}
	div#box-2 {
		background-color: rgb(255, 255, 195);
	}
	div#box-3 {
		background-color: rgb(196, 255, 196);
	}
	div#box-4 {
		background-color: rgb(255, 209, 255);
	}

	@media only screen and (max-width: 600px) {
	}
</style>
