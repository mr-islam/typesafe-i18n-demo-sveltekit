<script>
  import CourseCard2 from "../components/CourseCard2.svelte";

  import { t, locales } from "svelte-intl-precompile";

  console.log($locales);

  function scrollToTitle() {
    document
      .getElementById("section-title")
      .scrollIntoView({ behavior: "smooth" });
  }
  function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }

  let courses = [
    {
      tags: ["nazari", "fard"],
      level: 1,
      id: "tajwid-qaida",
      action: "now",
      price: "",
      registration: "",
    },
    {
      id: "tajwid-hidayatrahman",
      tags: ["nazari"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tajwid-thani",
      tags: ["nazari"],
      level: 3,
      book: "",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tajwid-jazari",
      tags: ["nazari"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tajwid-amma",
      tags: ["amali"],
      src: "",
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tajwid-reading",
      tags: ["amali"],
      level: 3,
      book: "",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tajwid-reciting",
      tags: ["amali"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },
    {
      tags: ["hadith-matn"],
      level: 1,
      id: "hadith-nawawi",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-adab",
      tags: ["hadith-matn"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-riyad",
      title: $t("Hadith: Text 3"),
      desc: $t(""),
      tags: ["hadith-matn"],
      src: "/books/riyad.jpg",
      level: 3,
      book: "",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-bukhari",
      tags: ["hadith-matn"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-muslim",
      tags: ["hadith-matn"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-tirmidhi",
      tags: ["hadith-matn"],
      level: 5,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-abudawud",
      tags: ["hadith-matn"],
      level: 5,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-ibnmajah",
      tags: ["hadith-matn"],
      level: 5,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-nasai",
      tags: ["hadith-matn"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-musnad",
      tags: ["hadith-matn"],
      level: 5,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-darimi",
      tags: ["hadith-matn"],
      level: 5,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-muwatta",
      tags: ["hadith-matn"],
      level: 5,
      action: "later",
      price: "",
      registration: "",
    },
    {
      tags: ["ahkam"],
      level: 2,
      id: "fiqh-maslak",
      action: "later",
      price: "",
      registration: "",
    },
    {
      tags: ["ahkam", "fard"],
      level: 1,
      id: "fiqh-nur",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-quduri",
      tags: ["fard"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-lubab",
      tags: ["ahkam"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-bayquni",
      tags: ["hadith-ulum"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-nuzhah",
      tags: ["hadith-ulum"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-salah",
      tags: ["hadith-ulum"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah-ahl-sunnah",
      tags: ["fard"],
      level: 0,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah-sharh-nazm",
      tags: ["aqidah"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah-tali",
      tags: ["aqidah"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah-miftah",
      tags: ["aqidah"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah-jawharah",
      tags: ["aqidah"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah-taftazani",
      tags: ["aqidah"],
      level: 5,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "aqidah-tahrir",
      tags: ["aqidah"],
      level: 6,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-hidayah",
      tags: ["ahkam"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-rad",
      tags: ["ahkam"],
      level: 5,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-maram",
      tags: ["dalil"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-ila",
      tags: ["dalil"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-ghamz",
      tags: ["qawaid"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-isad",
      tags: ["qawaid"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-sharhmanar",
      title: $t("Fiqh: Rules 2"),
      desc: $t("A poem and explanation on the rulings of giving rulings"),
      tags: ["usul"],
      src: "/books/sharhmanar.jpg",
      level: 2,
      book: "Sharh al-Manar",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-talwih",
      tags: ["usul"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-zaydan",
      tags: ["qawaid"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-zad",
      tags: ["usul"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "fiqh-manar",
      title: $t(""),
      desc: $t("A poem and explanation on the rulings of giving rulings"),
      tags: ["usul"],
      src: "/books/manar.jpg",
      level: 1,
      book: "Sharh al-Manar",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "ulumQuran-ulum",
      tags: ["ulumQuran"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "ulumQuran-zubdah",
      tags: ["ulumQuran"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tafsir-durrah",
      tags: ["zahir"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tafsir-nasafi",
      tags: ["zahir"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tafsir-baydawi",
      tags: ["zahir"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tafsir-qurtubi",
      tags: ["zahir"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "hadith-tadrib",
      tags: ["hadith-ulum"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-rawdah",
      tags: ["suluk"],
      level: 0,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-tuhfah",
      tags: ["fard", "suluk"],
      level: 6,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-taj",
      tags: ["suluk"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-fuyud",
      tags: ["fard", "suluk"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-qasd",
      tags: ["suluk"],
      level: 5,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-uyub",
      tags: ["suluk"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-bidayah",
      tags: ["suluk"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-manazil",
      tags: ["suluk"],
      level: 7,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-himam",
      tags: ["suluk"],
      level: 8,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-mabahith",
      tags: ["suluk"],
      level: 6,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-wasaya",
      tags: ["irfan"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-naqsh",
      tags: ["irfan"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-insankamil",
      tags: ["irfan"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-fusus",
      tags: ["irfan"],
      level: 5,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tasawwuf-qawanin",
      title: $t("Spirituality: Reaching 2"),
      desc: $t("Insights and illuminations for all wayfarers"),
      tags: ["irfan"],
      src: "/books/qawanin.jpg",
      level: 2,
      book: "",
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tafsir-bahr",
      tags: ["ishari"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "tafsir-mawaqif",
      tags: ["ishari"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "other-isa",
      tags: ["other"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "other-diwankurdi",
      tags: ["public"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "sirah-halabi",
      tags: ["sirah"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "sirah-wasail",
      tags: ["sirah"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "program-youth",
      tags: ["program"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "program-women",
      tags: ["program"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "natiq-um1",
      tags: ["natiq"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "natiq-um2",
      tags: ["natiq"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "natiq-um3",
      tags: ["natiq"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "natiq-um4",
      tags: ["natiq"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },

    {
      id: "nahw-mabadi",
      tags: ["nahw"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "nahw-tawdih",
      tags: ["nahw"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "nahw-tashil",
      tags: ["nahw"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "nahw-durus",
      tags: ["nahw"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "nahw-qatr",
      tags: ["nahw"],
      level: 5,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "nahw-alfiyyah",
      tags: ["nahw"],
      level: 6,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "nahw-ibnaqil",
      tags: ["nahw"],
      level: 7,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "sarf-amthilah",
      tags: ["sarf"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "sarf-bina",
      tags: ["sarf"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "sarf-shadha",
      tags: ["sarf"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "balaghah-durus",
      tags: ["balaghah"],
      level: 1,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "balaghah-tuhfah",
      tags: ["balaghah"],
      level: 2,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "balaghah-mukhtasar",
      tags: ["balaghah"],
      level: 3,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "balaghah-balaghah",
      tags: ["balaghah"],
      level: 4,
      action: "later",
      price: "",
      registration: "",
    },
    {
      id: "balaghah-burdah",
      tags: ["balaghah"],
      level: 5,
      action: "later",
      price: "",
      registration: "",
    },
  ];
  let searchTerm = "fard";
  $: console.log(searchTerm);
  $: filteredCourses = courses
    .filter((course) => {
      return course.tags.find((tag) => tag.includes(searchTerm));
    })
    .sort(function (a, b) {
      return a.level - b.level;
    });
</script>

<h1 id="courses">{$t("courses.title")}</h1>
<div style="text-align: center; padding: 0 0 20px 0;">
  <a
    style="color: #dea300; text-decoration: underline dotted;"
    href="#"
    on:click={() => {
      scrollToContact();
    }}>{$t("contact.courses")}</a
  >
</div>

<div id="grid">
  <button
    id="fard"
    on:click={() => {
      setTimeout(scrollToTitle(), 100);
      searchTerm = "fard";
    }}
  >
    {$t("tags.fard")}
  </button>
  <button
    id="nazari"
    href="#section-title"
    on:click={() => {
      searchTerm = "nazari";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    {$t("tags.tajwid")}
  </button>
  <button
    id="zahir"
    href="#section-title"
    on:click={() => {
      searchTerm = "zahir";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    {$t("tags.tafsir")}
  </button>
  <button
    id="matn"
    href="#section-title"
    on:click={() => {
      searchTerm = "matn";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    {$t("tags.hadith")}
  </button>
  <button
    id="sirah"
    href="#gallery"
    on:click={() => {
      setTimeout(scrollToTitle(), 100);
      searchTerm = "sirah";
    }}
  >
    {$t("tags.sirah")}
  </button>
  <button
    id="aqidah"
    href="#gallery"
    on:click={() => {
      searchTerm = "aqidah";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    {$t("tags.aqidah")}
  </button>
  <button
    id="ahkam"
    href="#section-title"
    on:click={() => {
      searchTerm = "ahkam";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    {$t("tags.fiqh")}
  </button>
  <button
    id="suluk"
    href="#section-title"
    on:click={() => {
      searchTerm = "suluk";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    {$t("tags.tasawwuf")}
  </button>
  <button
    id="natiq"
    href="#gallery"
    on:click={() => {
      searchTerm = "natiq";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    {$t("tags.natiq")}
  </button>
  <button
    id="nahw"
    href="#section-title"
    on:click={() => {
      searchTerm = "nahw";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    {$t("tags.arabi")}
  </button>
  <button
    id="public"
    href="#gallery"
    on:click={() => {
      searchTerm = "public";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    {$t("tags.public")}
  </button>
  <button
    id="program"
    href="#gallery"
    on:click={() => {
      searchTerm = "program";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    {$t("tags.program")}
  </button>
  <button
    id="other"
    href="#gallery"
    on:click={() => {
      searchTerm = "other";
      setTimeout(scrollToTitle(), 100);
    }}
  >
    {$t("tags.other")}
  </button>
</div>

{#if searchTerm == "tasawwuf" || searchTerm == "suluk" || searchTerm == "irfan"}
  <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
    {$t("tags.tasawwuf")}
  </h3>
  <p id="section-explanation" style="text-align: center; margin">
    {$t("tags.tasawwuf_explanation")}
  </p>
  <p id="sub-container">
    <label
      ><input type="radio" bind:group={searchTerm} value="suluk" /><span
        >{$t("tags.tasawwuf_suluk")}</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="irfan" /><span
        >{$t("tags.tasawwuf_irfan")}</span
      ></label
    >
  </p>
{:else if searchTerm == "tajwid" || searchTerm == "nazari" || searchTerm == "amali"}
  <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
    {$t("tags.tajwid")}
  </h3>
  <p id="section-explanation" style="text-align: center; margin">
    {$t("tags.tajwid_explanation")}
  </p>
  <p id="sub-container">
    <label
      ><input type="radio" bind:group={searchTerm} value="nazari" /><span
        >{$t("tags.tajwid_nazari")}</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="amali" /><span
        >{$t("tags.tajwid_amali")}</span
      ></label
    >
  </p>
{:else if searchTerm == "tafsir" || searchTerm == "zahir" || searchTerm == "ishari" || searchTerm == "tajwid" || searchTerm == "nazari" || searchTerm == "amali"}
  <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
    {$t("tags.tafsir")}
  </h3>
  <p id="section-explanation" style="text-align: center; margin">
    {$t("tags.tafsir_explanation")}
  </p>
  <p id="sub-container">
    <label
      ><input type="radio" bind:group={searchTerm} value="ulumQuran" /><span
        >{$t("tags.ulum_quran")}</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="zahir" /><span
        >{$t("tags.tafsir_zahir")}</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="ishari" /><span
        >{$t("tags.tafsir_ishari")}</span
      ></label
    >
  </p>
{:else if searchTerm == "hadith" || searchTerm == "matn" || searchTerm == "ulum"}
  <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
    {$t("tags.hadith")}
  </h3>
  <p id="section-explanation" style="text-align: center; margin">
    {$t("tags.hadith_explanation")}
  </p>
  <p id="sub-container">
    <label
      ><input type="radio" bind:group={searchTerm} value="matn" /><span
        >{$t("tags.hadith_texts")}</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="ulum" /><span
        >{$t("tags.hadith_sciences")}</span
      ></label
    >
  </p>
{:else if searchTerm == "fiqh" || searchTerm == "ahkam" || searchTerm == "usul" || searchTerm == "qawaid" || searchTerm == "dalil"}
  <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
    {$t("tags.fiqh")}
  </h3>
  <p id="section-explanation" style="text-align: center; margin">
    {$t("tags.fiqh_explanation")}
  </p>
  <p id="sub-container">
    <label
      ><input type="radio" bind:group={searchTerm} value="ahkam" /><span
        >{$t("tags.fiqh_rulings")}</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="usul" /><span
        >{$t("tags.fiqh_foundations")}</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="qawaid" /><span>
        {$t("tags.fiqh_principles")}
      </span></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="dalil" /><span>
        {$t("tags.fiqh_evidences")}
      </span></label
    >
  </p>
{:else if searchTerm == "arabi" || searchTerm == "nahw" || searchTerm == "sarf" || searchTerm == "balaghah"}
  <h3 id="section-title">{$t("tags.arabi")}</h3>
  <p id="section-explanation" style="text-align: center; margin">
    {$t("tags.arabi_explanation")}
  </p>
  <p id="sub-container">
    <label
      ><input type="radio" bind:group={searchTerm} value="nahw" /><span
        >{$t("tags.arabi_nahw")}</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="sarf" /><span
        >{$t("tags.arabi_sarf")}</span
      ></label
    >
    <label
      ><input type="radio" bind:group={searchTerm} value="balaghah" /><span
        >{$t("tags.arabi_balaghah")}</span
      ></label
    >
  </p>
{:else}{/if}
<!-- <h3 id="section-title" style="text-align: center;">{searchTerm} Courses</h3> -->

{#if searchTerm == "fard"}
  <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
    {$t("tags.fard")}
  </h3>
  <p id="section-explanation" style="text-align: center; margin">
    {$t("tags.fard_explanation")}
  </p>
{:else if searchTerm == "program"}
  <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
    {$t("tags.program")}
  </h3>
  <p id="section-explanation" style="text-align: center; margin">
    {$t("tags.program_explanation")}
  </p>
{:else if searchTerm == "aqidah"}
  <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
    {$t("tags.aqidah")}
  </h3>
  <p id="section-explanation" style="text-align: center; margin">
    {$t("tags.aqidah_explanation")}
  </p>
{:else if searchTerm == "sirah"}
  <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
    {$t("tags.sirah")}
  </h3>
  <p id="section-explanation" style="text-align: center; margin">
    {$t("tags.sirah_explanation")}
  </p>
{:else if searchTerm == "natiq"}
  <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
    {$t("tags.natiq")}
  </h3>
  <p id="section-explanation" style="text-align: center; margin">
    {$t("tags.natiq_explanation")}
  </p>
{:else if searchTerm == "other"}
  <h3 id="section-title" style="margin-top: 5vh; text-align: center;">
    {$t("tags.other")}
  </h3>
  <p id="section-explanation" style="text-align: center; margin">
    {$t("tags.other_explanation")}
  </p>
{/if}

{#key searchTerm}
  <div id="gallery">
    {#each filteredCourses as course, number}
      <CourseCard2 {number} id={course.id} />
    {/each}
    <br />
  </div>
{/key}

<div style="" id="articles" />

<style>
  #section-title {
    padding-top: 10px;
    margin-top: 5vh;
    text-align: center;
    font-size: 1.5em;
  }
  #section-explanation {
    margin: 2px 15vw;
    text-align: center;
    font-size: 1.25em;
  }
  div#grid > button {
    height: 100px;
    text-align: center;
    /* background: #f2ffe9; */
    border-radius: 4px;
    padding: 10px;
    font-weight: bold;
    justify-self: stretch;
    align-self: stretch;
  }
  /* div#grid > button:nth-child(odd) {
    background: #f9fff5;
  } */
  div#grid > button:hover {
    background-color: #e7e7e72a;
    cursor: pointer;
  }
  div#grid {
    row-gap: 10px;
    column-gap: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin: 0 20px;
    place-items: center;
    place-content: center;
  }
  div#gallery {
    min-width: 100%;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 5vh 0;
    padding-bottom: 10vh;
  }
  @media only screen and (max-width: 700px) {
    div#grid {
      grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    }
    div#gallery {
      flex-direction: column;
    }
    #section-explanation {
      margin: 2px 3vw;
      text-align: center;
      font-size: 1.1em;
    }
  }
  #sub-container {
    margin-top: 30px;
    /* display: flex; */
    /* max-width: 100%; */
    /* overflow: scroll; */
    text-align: center;
    user-select: none;
    flex-direction: row;
    margin-bottom: 25px;
    align-items: center;
    justify-items: center;
    font-size: smaller;

    scrollbar-color: gold white;
  }
  #sub-container input[type="radio"] {
    display: none;
  }

  #sub-container span {
    font-weight: bold;
    cursor: pointer;
    display: inline-block;
    border: 2px solid white;

    padding: 10px;
    text-transform: capitalize;
    /* background-color: #fbfff9; */
    /* border: 2px dashed #90d344; */
    border-radius: 4px;
    color: #273912;
  }
  #sub-container span:hover {
    /* background-color: #ebffde; */
  }

  #sub-container input[type="radio"]:checked + span {
    background-color: rgb(255, 242, 172);

    color: black;
  }
  button {
    color: #2d2d2d;
  }
  button#fard {
    background: #70dfdf;
  }
  button#program {
    background: #f2f0ec;
  }
  button#natiq {
    background: #fff1e6;
  }
  button#nahw {
    background: #eddcd2;
  }
  button#nazari {
    background: #f1c7f1;
  }
  button#zahir {
    background: rgb(250, 187, 250);
  }
  button#matn {
    background: #99cc99;
  }
  button#sirah {
    background: #b0ebb0;
  }
  button#aqidah {
    background: #f2777a;
  }
  button#ahkam {
    background: #6ea4db;
  }
  button#suluk {
    background: #ffcc66;
  }
  button#public {
    background: #f2feff;
  }
  button#other {
    background: #e9e9e9;
  }
</style>
