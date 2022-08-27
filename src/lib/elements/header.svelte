<script context="module">
  import { t, locale, locales } from "svelte-intl-precompile";
import { append } from "svelte/internal";

  function scrollToTitle(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
</script>

<header>
  <a href="/">
    <img alt="Logo of Arabic calligraphy" id="logo" src="/logo-new.jpg" />
  </a>

  <div style="text-align: center;">
    {#if $t("center") !== ""}
      <span>{$t("center")}</span>
    {/if}
    <h1>{$t("title")}</h1>
    <span>{$t("slogan")}</span>
  </div>

  <div class="flex-column">
    <div>
      <a
        on:click={() => {
          scrollToTitle("courses");
        }}
        href="#">{$t("courses.title")}</a
      >
      &middot
      <a
        on:click={() => {
          scrollToTitle("articles");
        }}
        href="#">{$t("articles.title")}</a
      >
      &middot
      <a
        on:click={() => {
          scrollToTitle("about");
        }}
        href="#">{$t("about.title")}</a
      >
    </div>
    <select
      id="select-lang"
      on:change={() => {
        $locale =
          document.getElementById("select-lang").selectedOptions[0].value;
      }}
      >
      <option value={"ar"}>العربية</option>
      <option value={"en"}>English</option>
    </select>
  </div>
</header>

<style>
  header {
    background-color: var(--pure-white);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 4px solid var(--primary-color);
    left: 30vw;
    padding: 10px 0;
    z-index: 5;
  }
  img#logo {
    border: 1px black solid;
    border-radius: 360px;
    max-width: 5vw;
    margin: 5px 12px 2px 5px;
    margin-left: 70px;
  }
  div > div > a {
    background-color: var(--accent-color);
    color: var(--primary-color);
    padding: 5px;
    margin: 5px;
    border-radius: 4px;
  }
  
  div.flex-column {
    margin: 20px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 600px) {
    img#logo {
      max-width: 8vw;
      margin: 10px;
    }
    header {
      position: relative;
      flex-direction: column;
      left: 0;
      min-width: 100%;
      border-radius: 0px;
      top: 0px;
      border: 0px;
      padding-top: 10px;
    }
    h1 {
      font-size: 0.8rem;
    }
    div.flex-column {
      flex-direction: column;
    }
  }
  select {
    margin: 10px;
  }
  h1 {
    font-size: 1.5rem;
    margin: 0;
  }
</style>
