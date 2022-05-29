<template>
  <h1 class="title">{{ $t("projects.title") }}</h1>

  <p id="projects-section-text" class="section-text">
    {{ $t("projects.first-p") }}
  </p>

  <div id="projects" v-if="projects">
    <article
      class="project"
      @mouseover="infoHoverON(project._id)"
      @mouseleave="infoHoverOFF(project._id)"
      v-for="project in projects"
      :key="project._id"
    >
      <img
        :src="api + '/get-image/' + project.image"
        v-if="project.image"
      />

      <img
        src="../../assets/images/loading.svg"
        alt="Cargando..."
        v-if="!project.image"
      />

      <div :class="'project-info project-info-' + project._id">
        <div class="project-title">
          <h2>{{ project.title }}</h2>
        </div>

        <p v-if="lang_storage == 'es'">{{ project.description_es }}</p>
        <p v-if="lang_storage == 'en'">{{ project.description_en }}</p>

        <div id="buttons">
          <form id="repo-button" :action="project.repo" target="_blank" v-if="project.repo">
            <button>{{ $t("projects.button-repo") }}</button>
          </form>

          <form id="web-button" :action="project.link" target="_blank" v-if="project.link">
            <button>{{ $t("projects.button-link") }}</button>
          </form>
        </div>
      </div>
    </article>
  </div>

  <img
  src="../../assets/images/loading.svg"
  alt="Cargando..."
  v-if="!projects"
  />
</template>

<script>
import gsap from "gsap";
import axios from "axios";
import store from "../../store";
import {ref, watchEffect} from 'vue';

export default {
  name: "MyProjects",
  data() {
    return {
      projects: [],
    };
  },
  setup() {
    const api = process.env.VUE_APP_API;

    var lang_storage = ref(store.state.lang);

    watchEffect(() => {
      lang_storage.value = store.state.lang;
    });

    // Trigger animation when hovering over a project, using the id as a key
    function infoHoverON(_id) {
      let classID = ".project-info-" + _id;
      gsap.to(classID, {
        duration: 0.3,
        y: "-250px",
        background: "rgba(0, 0, 0, 0.9)",
      });
    }

    // Trigger animation when leaving a project, using the id as a key
    function infoHoverOFF(_id) {
      let classID = ".project-info-" + _id;
      gsap.to(classID, {
        duration: 0.3,
        y: "0%",
        background: "rgba(0, 0, 0, 0.5)",
      });
    }

    // When getting all projects from the API, trigger animation to make them appear
    function entryAnimation() {
      gsap.fromTo(
        ".project",
        { opacity: 0, duration: 0.5 },
        { stagger: 0.2, opacity: 1, duration: 0.5 }
      );
    }

    // Get all projects from the API using axios
    function getProjects() {
      axios.get(api + "/get-projects").then((res) => {
        if (res.data.status == "success") {
          this.projects = res.data.projects;
        }
      });
      for (var project in this.projects) {
        this.projects[project].className += project._id;
      }
    }

    // Return all necessary data to the component
    return { api, lang_storage, infoHoverON, infoHoverOFF, entryAnimation, getProjects };
  },
  mounted() {
    this.getProjects();
  },
  updated() {
    this.entryAnimation();
  },
};
</script>