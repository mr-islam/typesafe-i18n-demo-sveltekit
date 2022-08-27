<script>
  import { t } from "svelte-intl-precompile";
  import { Modals, closeModal, openModal } from "svelte-modals";
  import Modal from "../components/Modal.svelte";
  import Books from "../elements/books.svelte";

  let simpleList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

<div class="container">
  <Modals>
    <div slot="backdrop" class="backdrop" on:click={closeModal} />
  </Modals>
  <div class="flex-row">
    <div class="img-left">
      <h1>{$t("shaykh.heading")}</h1>

      <img alt="Shaykh Abd al-Rahman" class="profile" src="master.jpg" />
      <p>{$t("shaykh.subheading")}</p>
      <p>{$t("shaykh.short_bio")}</p>
      <button
        id="bio"
        on:click={() => {
          openModal(Modal);
        }}>{$t("shaykh.button")}</button
      >
      <Books />
    </div>
    <div class="text-right">
      <div>
        <h1>{$t("goals.goal")}</h1>
        <h2>{$t("goals.title")}</h2>
      </div>
      <div>
        <ol>
          {#each simpleList as item}
            <li>&nbsp;&nbsp;{$t(`goals.${[item]}`)}</li>
          {/each}
        </ol>
      </div>
    </div>
  </div>
  <div id="contact">
    <br />
    <p>***</p>
    {$t("contact.contact_us")}<a href="mailto:markaz@ilm-marifah.com">
      {$t("contact.email")}
    </a>
    {$t("contact.or")}
    <a href="https://t.me/naved_islam">{$t("contact.telegram")}</a>
  </div>
</div>

<style>
  h1,
  h2,
  p,
  a {
    color: white;
  }
  h1 {
    margin-bottom: 20px;
  }
  div.container {
    background: #353640;
    padding: 5vh 0;
    color: white;
  }
  div.flex-row {
    padding: 0 3vw;
    justify-content: space-between;
    gap: 10px;
  }
  div.img-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 25%;
  }
  div.text-right {
    min-width: 50%;
  }

  img.profile {
    border-radius: 300px;
    max-width: 200px;
    border: 4px solid #efffe4;
  }
  h2,
  .img-left > p,
  #contact {
    text-align: center;
  }
  #contact > a,
  button#bio {
    background-color: burlywood;
    padding: 10px;
    border-radius: 8px;
    color: black;
    font-weight: bold;
    cursor: pointer;
  }
  #contact > a:hover,
  button#bio:hover,
  #contact > a:focus,
  button#bio:focus {
    background-color: rgb(240, 201, 150);
  }
  ol {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 10px;
    row-gap: 10px;
    list-style-type: none;
    justify-items: center;
  }
  li {
    font-size: 1.1em;
    padding-right: 10px;
    background-color: #4a5d33;
    border-radius: 8px;
    padding: 10px;
  }
  ol li {
    counter-increment: my-awesome-counter;
    /* display: flex; */
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
  }
  ol li::before {
    content: counter(my-awesome-counter);
    font-weight: bold;
    font-size: 1.5rem;
    margin-right: -0.5rem;
    line-height: 1;
    color: #efffe4;
    background-color: #353640;
    border-radius: 300px;
    padding: 3px 11px;
    margin: 0px 0px 0 0;
  }
  @media only screen and (max-width: 900px) {
    div.flex-row {
      padding: 0 3vw;
      flex-direction: column;
      align-items: center;
    }
    div.img-left {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 80%;
    }
  }

  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }
</style>
