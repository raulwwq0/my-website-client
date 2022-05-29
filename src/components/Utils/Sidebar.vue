<template>
  <aside id="sidebar">
    <div id="hamburger" @click="sidebarChangeStatus()">
      <div class="hamburger-wrap">
        <img
          class="icons"
          src="../../assets/images/hamburger.svg"
          alt="Open Sidebar"
          v-if="!isSidebarOFF"
        />
        <img
          class="icons"
          src="../../assets/images/close.svg"
          alt="Close Sidebar"
          v-if="isSidebarOFF"
        />
      </div>
    </div>
    <LangSwitcher />
    <div id="menu-icons">
      <router-link :to="`/home`" exact-active-class="active">
        <div class="icon-wrap">
          <img class="icons" src="../../assets/images/home.svg" alt="Inicio" />
          <p class="icon-text">
            <span>{{ $t("sidebar.home") }}</span>
          </p>
        </div>
      </router-link>

      <router-link :to="`/projects`" exact-active-class="active">
        <div class="icon-wrap">
          <img
            class="icons"
            src="../../assets/images/projects.svg"
            alt="Proyectos"
          />
          <p class="icon-text">
            <span>{{ $t("sidebar.projects") }}</span>
          </p>
        </div>
      </router-link>

      <router-link :to="`/contact`" exact-active-class="active">
        <div class="icon-wrap">
          <img
            class="icons"
            src="../../assets/images/contact.svg"
            alt="Contacto"
          />
          <p class="icon-text">
            <span>{{ $t("sidebar.contact") }}</span>
          </p>
        </div>
      </router-link>
    </div>
    <div id="social-icons">
      <a href="https://github.com/raulwwq0" target="_blank">
        <div class="icon-wrap">
          <img
            id="github-icon"
            class="icons"
            src="../../assets/images/logo/github.svg"
            alt="GitHub"
          />
          <p class="icon-text">GitHub</p>
        </div>
      </a>
    </div>
  </aside>
</template>

<script>
import { onBeforeMount, onMounted, ref, watchEffect } from "vue";
import gsap from "gsap";
import store from "../../store";
import LangSwitcher from "./LangSwitcher";

export default {
  name: "MySidebar",
  components: {
    LangSwitcher,
  },
  setup() {
    // By default, the sidebar is closed
    var isSidebarOFF = ref(true);

    // This function is called when the hamburger is clicked, and it changes the status of the sidebar
    function sidebarChangeStatus() {

      // Creating a GSAP timeline
      const sidebarTimeline = gsap.timeline({ defaults: { duration: 0.3 } });

      // Depending on the screen width, the animation change
      if (screen.width > 900) {

        // If the sidebar is close, it will extend it
        if (!isSidebarOFF.value) {
          sidebarTimeline
            .to("#sidebar", { width: "160px" })
            .to(".icon-text", { display: "block" }, 0.2)
            .to(".icon-text", { opacity: 1 })
            .to("#options-buttons", { display: "flex", opacity: 1 }, "<0")
            .to(".content", { marginLeft: "160px" }, 0)
            .to(".icon-wrap", { width: "150px" }, 0);
        } else {
          // If the sidebar is open, it will close it
          sidebarTimeline
            .to("#options-buttons", { display: "none", opacity: 0 })
            .to(".icon-text", { opacity: 0, display: "none" }, 0)
            .to(".icon-wrap", { width: "40px" }, 0.3)
            .to("#sidebar", { width: "40px" }, 0.2)
            .to(".content", { marginLeft: "40px" }, "<0");
        }
      } else {
        // Same as the above, but with different values
        if (!isSidebarOFF.value) {
          sidebarTimeline
            .to("#sidebar", { width: "160px" })
            .to(".icon-text", { display: "block" }, 0.2)
            .to(".icon-text", { opacity: 1 })
            .to("#options-buttons", { display: "flex", opacity: 1 }, "<0")
            .to(".icon-wrap", { width: "150px" }, 0)
            .to(
              "#sidebar",
              { boxShadow: "0 8px 32px 0 rgba(0, 0 , 0, 0.37)" },
              0
            );
        } else {
          sidebarTimeline
            .to("#options-buttons", { display: "none", opacity: 0 })
            .to(".icon-text", { opacity: 0, display: "none" }, 0)
            .to(".icon-wrap", { width: "40px" }, 0.3)
            .to("#sidebar", { width: "40px" }, 0.2)
            .to("#sidebar", { boxShadow: "0 0 0 0 rgba(0, 0 , 0, 0)" }, 0);
        }
      }

      // Change the status value
      isSidebarOFF.value = !isSidebarOFF.value;
    }

    // Check what is the current language and store it in the Vuex store
    function checkLang(lang){
      if (lang.value === null) {

        // If the language is not set, it will check the browser language
        var userLang = navigator.language || navigator.userLanguage;

        if (userLang.includes("es")) {
          lang.value = 'es';
          store.state.lang = 'es';
        } else{
          lang.value = 'en';
          store.state.lang = 'en';
        }
      }
    }

    // Get the current lang valor from the Vuex store
    var lang = ref(store.state.lang);

    // When the lang value changes, it will update the Vuex store
    watchEffect(() => {
      lang.value = store.state.lang;
    });

    // When the component is not even mounted, it will check the current language
    onBeforeMount(() => {
      checkLang(lang);
    })

    // When the component is mounted, it will add the event listener to the hamburger
    onMounted(() => {
      sidebarChangeStatus();
    })

    return { isSidebarOFF, sidebarChangeStatus, lang };
  },
};
</script>
