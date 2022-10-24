<script>
	import LL, { locale } from '$i18n/i18n-svelte'
	import Books from '$lib/elements/books.svelte'

</script>

<div class="books-slider">
	<h1>الكتب</h1>
	<Books />
</div>
<!-- convert wisdoms and articles to {#each} and run through the i18n dict -->
<bigboy id="wisdoms">
	<container>
		<h1>{$LL.wisdoms.title()}</h1>
		<div target="_blank">{$LL.wisdoms.list.ijaza_1()}</div>
	</container>
	<container>
		<h1>{$LL.articles.title()}</h1>
		<a target="_blank" href="/{$locale}/articles/knowledge_good_intentions">
			{$LL.articles.knowledge_good_intentions.title()}
		</a>

	
	</container>

</bigboy>
<h1>الحكم والنصائح العامة</h1>
<h1>حكم القوم رضي الله عنهم</h1>
<h1>حكم الشيخه</h1>
<h1>مقالات الشيخ</h1>






<style>
	bigboy {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		background-color: var(--secondary-color);
		color: var(--text-color);
		padding: 5vh 0 15vh 0;
	}
	container {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--secondary-color);
		color: var(--text-color);
		gap: 2vh;
		border-radius: 12px;
	}
	a {
		border: 2px dashed gold;
	}
	container > div, container > a {
		margin: 0 5px;
		border-radius: 8px;
		border: 2px dashed gold;
		padding: 10px;
		background-color: white;
		box-shadow: rgba(44, 105, 70, 0.2) 0px 2px 8px 0px;
		color: var(--text-color)
	}
	a:hover,
	div:hover {
		box-shadow: rgba(44, 105, 70, 0.2) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
	}
	@media only screen and (max-width: 600px) {
		bigboy {
			flex-direction: column;
			padding: 2vh 0 8vh 0;
		}
	}
</style>
