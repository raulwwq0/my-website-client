<template>
  <div id="skills">
    <h2 class="subtitle">{{ $t("home.skills.subtitle") }}</h2>
    <p>
      {{ $t("home.skills.first-p") }}
    </p>
    <div id="skills-svg">
      <img src="../../assets/images/logo/html5.svg" title="HTML5"/>
      <img src="../../assets/images/logo/css3.svg" title="CSS3"/>
      <img src="../../assets/images/logo/sass.svg" title="SASS"/>
      <img src="../../assets/images/logo/javascript.svg" title="Javascript"/>
      <img src="../../assets/images/logo/nodejs.svg" title="NodeJS"/>
      <img src="../../assets/images/logo/jquery.svg" title="JQuery"/>
      <img src="../../assets/images/logo/vue.svg" title="VueJS"/>
      <img src="../../assets/images/logo/git.svg" title="Git"/>
      <img src="../../assets/images/logo/mongodb.svg" title="MongoDB"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "MySkills",
};
</script>