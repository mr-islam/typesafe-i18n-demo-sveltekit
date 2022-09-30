<script>
	import LL from '$i18n/i18n-svelte'
</script>

<h1>للاستفسار</h1>

<div id="contact">
	<p><strong>تواصل معنا عبر:</strong></p>
	<ul>
		<li>
			البريد الاكتروني: <br />
			<a href="mailto:markaz@ilm-marifah.com">markaz@ilm-marifah.com</a>
		</li>
		<br />
		<li>
			تليغرام: <br />
			<a href="https://t.me/naved_islam">https://t.me/naved_islam</a>
		</li>
	</ul>
</div>

<style>
	h1 {
		text-align: center;
	}
	#contact {
		user-select: text;
		margin: 0 auto;
		width: 400px;
		font-size: larger;
	}
	a {
		background-color: burlywood;
		padding: 2px 10px;
		border-radius: 8px;
		color: black;
		font-weight: bold;
		cursor: pointer;
	}
	a:hover,
	a:focus {
		background-color: rgb(240, 201, 150);
	}
</style>
