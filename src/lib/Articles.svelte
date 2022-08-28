<script>
	import LL, { locale } from '$i18n/i18n-svelte'
</script>

<container>
  <h1>Articles</h1>
  <a target="_blank" href="/{$locale}/articles/fard-ayn"
    >{$LL.articles.fard_ayn()}</a
  >
  <a target="_blank" href="/{$locale}/articles/knowledge-good-intentions"
    >{$LL.articles.knowledge_good_intentions()}</a
  >
  <a target="_blank" href="/{$locale}/articles/knowledge-curing-laziness" id="about"
    >{$LL.articles.curing_laziness()}</a
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
