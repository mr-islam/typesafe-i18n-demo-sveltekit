<script>
	import LL, { locale } from '$i18n/i18n-svelte'
	import Books from '$lib/elements/books.svelte'
</script>

<h1>المكتبة</h1>

<!-- convert wisdoms and articles to {#each} and run through the i18n dict -->
	<!-- <div>
			<a href="">
			<h2>الحكم والنصائح العامة</h2>
		</a>
		</div>

		<a>
			<h2>حكم القوم رضي الله عنهم</h2>
		</a> -->
	<div class="title" style="background-color: rgb(255, 245, 255);">
		<a href="library/wisdoms/">
			<h2>حكم الشيخ</h2>
		</a>
	</div>

	<div class="title" style="background-color: rgb(214, 247, 214);">
		<a href="library/articles/">
			<h2>مقالات الشيخ</h2>
		</a>
	</div>

	
<div class="books-slider">
	<br>	<br>

	<h1>الكتب</h1>
	<Books />
</div>

<style>
	h1,
	h2 {
		text-align: center;
		margin: 0;
	}
	div.title {
		background-color: rgb(193, 236, 255);
		max-width: 200px;
		margin: 20px auto;
		border-radius: 8px;
		padding: 5px;
		/* border: 1px solid rgb(65, 84, 91); */
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		}
	.books-slider {
		margin: 20px 20px;
		padding: 0 0;
		border-radius: 18px;
	}
</style>
