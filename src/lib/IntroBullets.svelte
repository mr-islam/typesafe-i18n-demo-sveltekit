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
		<div class="main-title">
			<svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 24 24">
				<circle cx="13" cy="14" r="10" fill="#FFAB91" />
				<path
					width="30"
					height="30"
					fill="#000"
					d="M6 12c0 2.206 1.794 4 4 4 1.761 0 3.242-1.151 3.775-2.734l2.224-1.291.001.025c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6c1.084 0 2.098.292 2.975.794l-2.21 1.283c-.248-.048-.503-.077-.765-.077-2.206 0-4 1.794-4 4zm4-2c-1.105 0-2 .896-2 2s.895 2 2 2 2-.896 2-2l-.002-.015 3.36-1.95c.976-.565 2.704-.336 3.711.159l4.931-2.863-3.158-1.569.169-3.632-4.945 2.87c-.07 1.121-.734 2.736-1.705 3.301l-3.383 1.964c-.29-.163-.621-.265-.978-.265zm7.995 1.911l.005.089c0 4.411-3.589 8-8 8s-8-3.589-8-8 3.589-8 8-8c1.475 0 2.853.408 4.041 1.107.334-.586.428-1.544.146-2.18-1.275-.589-2.69-.927-4.187-.927-5.523 0-10 4.477-10 10s4.477 10 10 10c5.233 0 9.521-4.021 9.957-9.142-.301-.483-1.066-1.061-1.962-.947z"
				/>
			</svg>
		</div>
		<div>
			<p class="intro-bullet">
				<strong>{$LL.welcome.mission_title()}</strong>{': ' + $LL.welcome.mission()}
			</p>
		</div>
	</a>

	<a class="box" id="box-4" href="/{$locale}/library">
		<div class="main-title">
			<svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 24 24">
				<rect x="8" y="5" width="20" height="30" fill="#8FF499" />
				<path
					width="30"
					height="30"
					d="M5.495 2h16.505v-2h-17c-1.657 0-3 1.343-3 3v18c0 1.657 1.343 3 3 3h17v-20h-16.505c-1.375 0-1.375-2 0-2zm.505 4h14v16h-14v-16z"
				/>
			</svg>
		</div>
		<div>
			<p class="intro-bullet">
				<strong>{$LL.welcome.online_title()}</strong>{': ' + $LL.welcome.online()}
			</p>
		</div>
	</a>

	<a class="box" id="box-3" href="/{$locale}/contact">
		<div class="main-title">
			<svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 24 24">
				<rect x="3" y="3" rx="10" ry="10" width="20" height="20" fill="#FFE082" />
				<path
					width="30"
					height="30"
					d="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z"
				/>
			</svg>
		</div>
		<div>
			<p class="intro-bullet">
				<strong>{$LL.welcome.contact_title()}</strong>{': ' + $LL.welcome.contact()}
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
		/* font-weight: bold; */
		font-size: 1.4rem;
	}
	:global(p.ltr) {
		color: var(--accent-color);
		font-size: 1.2rem;
	}

	/* .box + .box {
		border-top: 1px solid #b3b3b3;
	} */
	a#box-1 > div > p > strong {
		color: #ea5c30;
	}
	a#box-4 > div > p > strong {
		color: #1b8926;
	}
	a#box-3 > div > p > strong {
		color: #d6a71b
	}
	a.box {
		/* margin: 5px; */
		display: block;
		flex: 1 1 auto;
		display: flex;
		align-items: center;
		border-width: 0px;
		border-style: none;
		justify-content: space-around;
		/* important: so no need to cancel each element below*/
		color: #444 !important;
		background-color: white !important;
		border-radius: 12px !important;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	}
	a > div.main-title {
		/* border-width: 1px;
		border-style: solid; */
		margin: 0 10px;
		padding: 2px;
		border-radius: 12px;
	}
	a#box-1 {
		/* border-color: green; */
		background-color: rgb(214, 247, 214);
		color: #4a5d33;
	}

	a#box-2 {
		/* border: 10px solid rgb(255, 255, 195); */
	}

	a#box-3 {
		/* border-color: rgb(118, 118, 0); */
		background-color: rgb(255, 255, 227);
		color: rgb(118, 118, 0);
	}

	a#box-4 {
		/* border-color: rgb(173, 0, 173); */
		background-color: rgb(255, 245, 255);
		color: rgb(173, 0, 173);
	}

	@media only screen and (max-width: 450px) {
		a.box {
			/* margin: 5px; */
			border-radius: 12px;
			display: block;
			flex: 1 1 auto;
			display: flex;
			align-items: center;
		}
		:global(p.rtl) {
			font-weight: normal;
			font-size: 1.3rem;
		}
		:global(p.ltr) {
			font-size: 1.1rem;
		}
	}
</style>
