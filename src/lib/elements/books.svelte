<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide'
	import '@splidejs/svelte-splide/css/core'

	import LL, { locale } from '$i18n/i18n-svelte'
	import { onMount, afterUpdate } from 'svelte'

	let dir
	onMount(() => {
		dir = $locale === 'ar' ? 'rtl' : 'ltr'
	})
	afterUpdate(() => {
		dir = $locale === 'ar' ? 'rtl' : 'ltr'
	})
</script>

{#key dir}
	<div>
		<Splide
			aria-label="Image carousel"
			options={{
				rewind: true,
				arrows: false,
				pagination: false,
				width: '240px',
				height: '334px',
				gap: '1rem',
				drag: true,
				autoplay: true,
				interval: 2500,
				pauseOnHover: true,
				pauseOnFocus: true,
				resetProgress: false,
				direction: dir, //see <script> above onMount()
				paginationDirection: dir,
				mediaQuery: 'max',
				breakpoints: {
					600: {
						width: '158.1px',
						height: '220px',
					},
				},
			}}
		>
			<SplideSlide>
				<img loading="lazy" src="/books/tasawwuf-kamilah.jpg" alt="kamilah" />
			</SplideSlide>
			<SplideSlide>
				<img loading="lazy" src="/books/tasawwuf-fuyud.jpg" alt="fuyud" />
			</SplideSlide>
			<SplideSlide>
				<img loading="lazy" src="/books/fiqh-maslak.jpg" alt="maslak" />
			</SplideSlide>
			<SplideSlide>
				<img loading="lazy" src="/books/sawanih.jpg" alt="sawanih" />
			</SplideSlide>
			<SplideSlide>
				<img loading="lazy" src="/books/tasawwuf-qawanin.jpg" alt="qawanin" />
			</SplideSlide>
			<SplideSlide>
				<img loading="lazy" src="/books/tasawwuf-rawdah.jpg" alt="rawdah" />
			</SplideSlide>
			<SplideSlide>
				<img loading="lazy" src="/books/aqidah-sharh-nazm.jpg" alt="majmu" />
			</SplideSlide>
			<SplideSlide>
				<img loading="lazy" src="/books/tasawwuf-tuhfah.jpg" alt="tuhfah" />
			</SplideSlide>
			<SplideSlide>
				<img loading="lazy" src="/books/fiqh-manar.jpg" alt="manar" />
			</SplideSlide>
			<SplideSlide>
				<img loading="lazy" src="/books/aqidah-miftah.jpg" alt="miftah" />
			</SplideSlide>
			<SplideSlide>
				<img loading="lazy" src="/books/suyuti.jpg" alt="suyuti" />
			</SplideSlide>
		</Splide>

		<p>
			{$LL.contact.books.text()}
			<a href="tel:+9613040478">{$LL.contact.books.number()}</a>
		</p>
	</div>
{/key}

<style>
	p {
		border: 1px solid burlywood;
		padding: 6px;
		border-radius: 12px;
		text-align: center;
	}
	a {
		font-weight: bold;
	}
	img {
		max-width: 100%;
	}
	div :global(.swiper-slide) {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 12px;
		font-size: 22px;
		font-weight: bold;
		color: #fff;
		background-color: #7e7e7e;
	}

</style>
