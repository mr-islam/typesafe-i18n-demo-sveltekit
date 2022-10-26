<script>
	import LL, { locale } from '$i18n/i18n-svelte'

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
					{#each simpleList as item, index}
						<li class="item_{index} {$locale}">&nbsp;&nbsp;{$LL.goals[item]()}</li>
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
		color: var(--text-color);
	}
	h1 {
		margin-bottom: 20px;
		text-align: center;
	}
	h2 {
		text-align: center;
	}
	div.container {
		padding: 5vh 0;
		color: black;
	}
	div.flex-row {
		padding: 0 3vw;
		justify-content: space-between;
		gap: 10px;
	}
	div.text-right {
		margin: 0 auto;

	}

	img.profile {
		border-radius: 300px;
		max-width: 200px;
		border: 4px solid #efffe4;
	}
	h2,
	ol {
		list-style-type: none;
		justify-items: center;
	}
	li {
		padding-right: 10px;
		border-radius: 8px;
		margin: 15px 0;
		padding: 20px 20px;
		max-width: 700px;
		/* border: 4px solid; */
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	}
	li.en {
		font-size: 1.2em;
		line-height: 140%;
	}
	li.ar {
		font-size: 1.5em;
		line-height: 180%;
		/* font-weight: bold; */
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
		font-size: 1.3rem;
		margin-right: -0.5rem;
		line-height: 1;
		color: rgba(45, 45, 45, 0.769);
		background-color: rgba(255, 255, 255, 0.769);
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
	li.item_0 {
		background-color: #61ffa344;
	}
	li.item_1 {
		background-color: #EBBAB944;
	}
	li.item_2 {
		background-color: #A2FDFF44;
	}
	li.item_3 {
		background-color: #A7B7FF44;
	}
	li.item_4 {
		background-color: #FFC5A744;
	}
	li.item_5 {
		background-color: #EEFFB244;
	}
	li.item_6 {
		background-color: #61FFA344;
	}
	li.item_7 {
		background-color: #EBBAB944;
	}
	li.item_8 {
		background-color: #A2FDFF44;
	}
	li.item_9 {
		background-color: #A7B7FF44;
	}
</style>
