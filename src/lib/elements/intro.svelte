<script context="module">
  import { t } from "svelte-intl-precompile";
</script>

<div class="paras-about">
  <div>
    <div>
      <span>🔗</span>
      <p>{$t("welcome.mission")}</p>
    </div>
    <div>
      <span>🪐</span>

      <p>
        {$t(
          "welcome.complete_curriculum"
        )}
      </p>
    </div>
    <div>
      <span>📜</span>

      <p>
        {$t(
          "welcome.articles"
        )}
      </p>
    </div>
    <div>
      <span>🖥️</span>

      <p>
        {$t(
          "welcome.online"
        )}
      </p>
    </div>
  </div>
</div>

<style>
  P {
    color: var(--pure-white);
  }
  div.paras-about {
    background: var(--accent-color);
    width: 100%;
    margin: 0 0 56px 0;
    /* max-height: 10vh; */
  }
  div.paras-about > div {
    padding: 5vh 5vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10vw;
    place-content: center;
    /* place-items: center; */
  }
  div.paras-about > div > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  span {
    padding: 10px 10px 10px 10px;
    margin: 0 10px;
    background: var(--primary-color);
    border-radius: 360px;
  }

  @media only screen and (max-width: 600px) {
    div.paras-about {
      background: var(--accent-color);
      min-width: 100%;
      margin: 0 0 56px 0;
    }
    div.paras-about > div {
      padding: 5vh 5vw;
      grid-template-columns: 1fr;
    }
  }
</style>
