<template>
  <div id="about-me">
    <div id="about-text">
      <h2 class="subtitle">{{ $t("home.about-me.subtitle") }}</h2>
      <p>
        {{ $t("home.about-me.first-p") }}
      </p>
      <p>
        {{ $t("home.about-me.second-p") }}
      </p>
      <p>
        {{ $t("home.about-me.third-p") }}
      </p>
    </div>
    <picture>
      <source
        srcset="../../../assets/images/me.webp"
        type="image/webp"
      />
      <source
        srcset="../../../assets/images/me.jpg"
        type="image/jpeg"
      />
      <img src="../../../assets/images/me.jpg" />
    </picture>
  </div>
</template>

<script>
export default {
  name: "MyAboutMe",
};
</script>
