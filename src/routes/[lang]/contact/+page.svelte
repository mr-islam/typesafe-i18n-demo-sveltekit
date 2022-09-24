<script>
	import LL from '$i18n/i18n-svelte'
</script>

<h1>الاستفسار</h1>

<div id="contact">
	<p>
		{$LL.contact.contact_us()}
		<a href="mailto:markaz@ilm-marifah.com">
			{$LL.contact.email()}
		</a>
		{$LL.contact.or()}
		<a href="https://t.me/naved_islam">{$LL.contact.telegram()}</a>
	</p>
</div>

<style>
	h1 {
		text-align: center;
	}
	#contact {
		text-align: center;
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
