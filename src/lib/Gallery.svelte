<script>
	import LL, { locale } from '$i18n/i18n-svelte'
	import { Splide, SplideSlide } from '@splidejs/svelte-splide'
	import '@splidejs/svelte-splide/css'

	import { onMount, afterUpdate } from 'svelte'
	import IntroBullets from '$lib/IntroBullets.svelte'
	
	let dir
	onMount(() => {
		dir = $locale === 'ar' ? 'rtl' : 'ltr'
	})
	afterUpdate(() => {
		dir = $locale === 'ar' ? 'rtl' : 'ltr'
	})
</script>

{#key dir}
	<div id="flex">
		<div id="intro">
			<IntroBullets />
		</div>

		<div class="container">
			<Splide
				aria-label="Image carousel"
				options={{
					rewind: true,
					width: 800,
					gap: '1rem',
					drag: true,
					autoplay: true,
					interval: 4000,
					pauseOnHover: true,
					pauseOnFocus: true,
					resetProgress: false,
					direction: dir, //see <script> above onMount()
					paginationDirection: dir,
					mediaQuery: 'max',
					breakpoints: {
						1000: {
							width: '100vw',
							height: '40vh',
						},
						600: {},
						450: {
							width: '100vw',
							height: '25vh',
							arrows: false,
						},
					},
				}}
			>
				<SplideSlide>
					<div class="center">
						<!-- <h1>{$LL.hero.header1()}</h1> -->
						<!-- <p>{$LL.hero.subheader1()}</p> -->
					</div>
					<img alt="pretty background for announcement background" src="/backgrounds/flowers.jpg" />
				</SplideSlide>
				<SplideSlide>
					<div class="center" />
					<img loading="lazy" alt="pretty background for announcement background" src="/backgrounds/cloud.jpg" />
				</SplideSlide>
			</Splide>
		</div>
	</div>
{/key}

<style>
	div#flex {
		display: flex;
		flex-direction: row;
		gap: 15px;
		margin: 0 15px;
	}
	div#intro {
		min-width: 30vw;
	}
	div.container {
		width: 82%;
		border-radius: 12px;
	}
	:global(div.swiper-button-prev, div.swiper-button-next) {
		background-color: var(--accent-color);
		color: white;
		padding: 35px;
		border-radius: 100px;
	}
	div.center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 100;
		text-align: 'center';
		min-width: 70vw;
		/* user-select: none; */
	}
	:global(.mySwiper) {
		border-radius: 12px;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
	}
	p {
		font-size: 1.5rem;
		color: var(--pure-white);
	}
	h1 {
		font-size: 3rem;
		font-weight: bold;
		color: var(--pure-white);
	}
	img {
		filter: blur(1px) brightness(70%);
		border-radius: 12px;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	div :global(.swiper) {
		width: 70%;
		height: 60vh;
		background-color: #ffffff;
		margin: 0;
	}

	div :global(.swiper-slide) {
		text-align: center;
		font-size: 18px;

		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}

	div :global(.swiper-slide img) {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media only screen and (max-width: 1000px) {
		div#flex {
			flex-direction: column-reverse;
		}
		div.container {
			top: 0;
		}
		div.container {
			width: 100%;
		}
	}
	@media only screen and (max-width: 600px) {
		div.center {
			min-width: 90vw;
			/* user-select: none; */
		}
		div.container {
			/* min-width: 100%; */
			/* min-height: 700px; */
			margin-top: 0vh;
			padding: 1rem 0.5rem;
		}

		p {
			font-size: 1.5rem;
			color: var(--pure-white);
			/* display: none; */
		}
		h1 {
			font-size: 2rem;
			font-weight: bold;
			color: var(--pure-white);
		}
	}
	@media only screen and (max-width: 450px) {
		div :global(.swiper) {
			width: 100%;
			height: 25vh;
			top: 0;
		}

		div.container {
			/* max-height: 82%; */
			padding: 0;
		}
	}
</style>
