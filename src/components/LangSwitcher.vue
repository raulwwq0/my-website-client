<template>
  <div id="options-buttons">
    <div id="lang-switcher">
      <span class="es">
        <img src="../assets/images/spain.svg" alt="Spanish" />
      </span>
      <input
        id="lang-checkbox"
        type="checkbox"
        class="toggle"
        @change="changeLang()"
      />
      <span class="en">
        <img src="../assets/images/britain.svg" alt="English" />
      </span>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, onMounted } from "vue";
import store from "../store";
import i18n from "../i18n";

export default {
  name: "MyLangSwitcher",
  setup() {
    function changeLang() {
      store.commit("CHANGE_LANG");
      i18n.global.locale.value = store.state.lang;
    }

    function setDefaultLang(){
      var userLang = navigator.language || navigator.userLanguage;

      if (localStorage.getItem("lang") === null) {
        if (userLang.includes("es")) {
          localStorage.setItem("lang", "es");
        } else{
          localStorage.setItem("lang", "en");
        }
      }
    }

    function getLangFromLocalStorage() {
      var lang_storage = localStorage.getItem("lang");

      if (lang_storage === "en") {
        document.getElementById("lang-checkbox").checked = true;
      } else {
        document.getElementById("lang-checkbox").checked = false;
      }
    }

    onBeforeMount(() => {
      setDefaultLang();
    });

    onMounted(() => {
      getLangFromLocalStorage();
    })

    return { changeLang };
  },
};
</script>
