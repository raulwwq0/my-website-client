<template>
  <div id="skills">
    <h2 class="subtitle">{{ $t("home.skills.subtitle") }}</h2>
    <p>
      {{ $t("home.skills.first-p") }}
    </p>
    <div id="skills-svg">
      <img src="../../assets/images/logo/html5.svg" title="HTML5"/>
      <img src="../../assets/images/logo/css3.svg" title="CSS3"/>
      <img src="../../assets/images/logo/sass.svg" title="SASS/SCSS"/>
      <img src="../../assets/images/logo/javascript.svg" title="JavaScript"/>
      <img src="../../assets/images/logo/nodejs.svg" title="NodeJS"/>
      <img src="../../assets/images/logo/vue.svg" title="Vue 3"/>
      <img src="../../assets/images/logo/java.svg" title="Java"/>
      <img src="../../assets/images/logo/mongodb.svg" title="MongoDB"/>
      <img src="../../assets/images/logo/mysql.svg" title="MySQL"/>
      <img src="../../assets/images/logo/git.svg" title="Git"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "MySkills",
};
</script>