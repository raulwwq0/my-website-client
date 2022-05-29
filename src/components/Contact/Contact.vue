<template>
  <h1 class="title">{{ $t("contact.title") }}</h1>

  <div id="contact">
    <EmailForm />
    <Social />    
  </div>
</template>

<script>
import EmailForm from "./EmailForm";
import Social from "./Social";

export default {
  name: "MyContact",
  components: {
    EmailForm,
    Social,
  },
};
</script>