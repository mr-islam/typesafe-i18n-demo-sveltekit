<script>
	import LL from '$i18n/i18n-svelte'

	let simpleList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
</script>

<div id="goals" class="container">
	<div class="flex-row">
		
		<div class="text-right">
			<div>
				<h1>{$LL.goals.goal()}</h1>
				<h2>{$LL.goals.title()}</h2>
			</div>
			<div>
				<ol>
					{#each simpleList as item}
						<li>&nbsp;&nbsp;{$LL.goals[item]()}</li>
					{/each}
				</ol>
			</div>
		</div>
	</div>

	<br />
</div>

<style>
	h1,
	h2,
	p {
		color: white;
	}
	h1 {
		margin-bottom: 20px;
		text-align: center;
	}
	div.container {
		background: #353640;
		padding: 5vh 0;
		color: white;
	}
	div.flex-row {
		padding: 0 3vw;
		justify-content: space-between;
		gap: 10px;
	}
	div.text-right {
		min-width: 50%;
	}

	img.profile {
		border-radius: 300px;
		max-width: 200px;
		border: 4px solid #efffe4;
	}
	h2,
	ol {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		column-gap: 10px;
		row-gap: 10px;
		list-style-type: none;
		justify-items: center;
	}
	li {
		font-size: 1.1em;
		padding-right: 10px;
		background-color: #4a5d33;
		border-radius: 8px;
		padding: 10px;
	}
	ol li {
		counter-increment: my-awesome-counter;
		/* display: flex; */
		flex-direction: column-reverse;
		align-items: center;
		justify-content: space-between;
	}
	ol li::before {
		content: counter(my-awesome-counter);
		font-weight: bold;
		font-size: 1.5rem;
		margin-right: -0.5rem;
		line-height: 1;
		color: #efffe4;
		background-color: #353640;
		border-radius: 300px;
		padding: 3px 11px;
		margin: 0px 0px 0 0;
	}
	@media only screen and (max-width: 900px) {
		div.flex-row {
			padding: 0 3vw;
			flex-direction: column;
			align-items: center;
		}
		ol {
			padding: 0;
		}
	}
</style>
