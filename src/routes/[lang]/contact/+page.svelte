<script>
	import LL from '$i18n/i18n-svelte'
</script>

<h1>{$LL.welcome.contact_title()}</h1>

<div id="contact">
	<p><strong>{$LL.contact.explain()}:</strong></p>
	<ul>
		<li>
			{$LL.contact.email()} <br />
			<a href="mailto:ilm.marifah.center@gmail.com" target="_blank">ilm.marifah.center@gmail.com</a>
		</li>
		<br />
		<li>
			{$LL.contact.telegram()} <br />
			<a href="https://t.me/ilm_marifah" target="_blank">t.me/ilm_marifah</a>
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
