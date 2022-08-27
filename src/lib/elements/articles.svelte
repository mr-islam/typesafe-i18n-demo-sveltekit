<script>
  import { locale, t } from "svelte-intl-precompile";
</script>

<container>
  <h1>Articles</h1>
  <a target="_blank" href="/articles/{$locale}/fard-ayn"
    >{$t("articles.fard-ayn")}</a
  >
  <a target="_blank" href="/articles/{$locale}/knowledge-good-intentions"
    >{$t("articles.knowledge-good-intentions")}</a
  >
  <a target="_blank" href="/articles/{$locale}/curing-laziness" id="about"
    >{$t("articles.curing-laziness")}</a
  >
</container>

<style>
  container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--secondary-color);
    color: var(--text-color);
    padding: 5vh 0 15vh 0;
    gap: 2vh;
  }
  a {
    margin: 0 5px;
    border-radius: 8px;
    border: 2px dashed gold;
    padding: 10px;
    background-color: white;
    box-shadow: rgba(44, 105, 70, 0.2) 0px 2px 8px 0px;
  }
  a:hover {
    text-decoration: underline dashed gold 2px;
    box-shadow: rgba(44, 105, 70, 0.2) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  
</style>
