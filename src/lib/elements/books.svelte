<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import { locale } from "svelte-intl-precompile";
  import { onMount, afterUpdate } from "svelte";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/effect-cards";
  import "swiper/css/pagination";

  import SwiperCore, { Autoplay, EffectCards } from "swiper";
  SwiperCore.use([EffectCards, Autoplay]);

  let dir;
  onMount(() => {
    dir = $locale === "ar" ? "rtl" : "ltr";
  });
  afterUpdate(() => {
    dir = $locale === "ar" ? "rtl" : "ltr";
  });
</script>

{#key dir}
  <div>
    <Swiper
      {dir}
      effect={"cards"}
      grabCursor={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
    >
      <SwiperSlide>
        <img loading="lazy" src="/books/tasawwuf-fuyud.jpg" alt="fuyud" />
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" src="/books/fiqh-maslak.jpg" alt="maslak" />
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" src="/books/sawanih.jpg" alt="sawanih" />
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" src="/books/tasawwuf-qawanin.jpg" alt="qawanin" />
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" src="/books/tasawwuf-rawdah.jpg" alt="rawdah" />
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" src="/books/aqidah-sharh-nazm.jpg" alt="majmu" />
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" src="/books/tasawwuf-tuhfah.jpg" alt="tuhfah" />
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" src="/books/fiqh-manar.jpg" alt="manar" />
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" src="/books/aqidah-miftah.jpg" alt="miftah" />
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" src="/books/suyuti.jpg" alt="suyuti" />
      </SwiperSlide>
    </Swiper>
  </div>
{/key}

<style>
  img {
    max-width: 100%;
  }
  div :global(.swiper) {
    z-index: 1;
    margin-top: 40px;
    width: 240px;
    height: 334px;
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
  @media only screen and (max-width: 600px) {
    div :global(.swiper) {
      width: 144px;
      height: 200px;
    }
  }
</style>
