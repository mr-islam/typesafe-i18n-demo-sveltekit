<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import { t, locale } from "svelte-intl-precompile";
  import { onMount, afterUpdate } from "svelte";

  import "swiper/css";
  import "swiper/css/navigation";

  import SwiperCore, { Autoplay, Navigation } from "swiper";

  SwiperCore.use([Navigation, Autoplay]);

  let dir;
  onMount(() => {
    dir = $locale === "ar" ? "rtl" : "ltr";
  });
  afterUpdate(() => {
    dir = $locale === "ar" ? "rtl" : "ltr";
  });
</script>


<svelte:head>
 <title>{$t("title")}</title>
</svelte:head>

{#key dir}
  <div class="container">
    <Swiper
      {dir}
      navigation={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      class="mySwiper"
    >
      <SwiperSlide>
        <div class="center">
          <h1>{$t("hero.header1")}</h1>
          <p>{$t("hero.subheader1")}</p>
        </div>
        <img alt="pretty background for announcement background" src="/backgrounds/flowers.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <div class="center">
          <h1>{$t("hero.header1")}</h1>
          <p>{$t("hero.subheader1")}</p>
        </div>
        <img alt="pretty background for announcement background" src="/backgrounds/cloud.jpg" />
      </SwiperSlide>
      <SwiperSlide
        ><div class="center">
          <h1>{$t("hero.header1")}</h1>
          <p>{$t("hero.subheader1")}</p>
        </div>
        <img alt="pretty background for announcement background" src="/backgrounds/garden.jpg" /></SwiperSlide
      >
      <SwiperSlide
        ><div class="center">
          <h1>{$t("hero.header1")}</h1>
          <p>{$t("hero.subheader1")}</p>
        </div>
        <img alt="pretty background for announcement background" src="/backgrounds/flowers.jpg" /></SwiperSlide
      >
    </Swiper>
  </div>
{/key}

<style>
  :global(div.swiper-button-prev, div.swiper-button-next) {
    color: rgb(65, 255, 65);
  }
  div.center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    text-align: "center";
    min-width: 70vw;
    /* user-select: none; */
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
  }
  div.container {
    /* min-width: 100%; */
    /* min-height: 700px; */
    /* margin-top: 10vh; */
  }
  div :global(.swiper) {
    width: 100%;
    height: 70vh;
    background-color: #4a5d33;

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
  @media only screen and (max-width: 600px) {
    div.center {
      min-width: 90vw;
      /* user-select: none; */
    }
    div.container {
      /* min-width: 100%; */
      /* min-height: 700px; */
      margin-top: 0vh;
    }
    div :global(.swiper) {
      width: 100%;
      height: 40vh;
      top: 0;
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
</style>
