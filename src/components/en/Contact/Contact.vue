<template>
  <h1 class="title">Contact</h1>

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