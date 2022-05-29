<template>
  <form id="email-form" @submit.prevent="sendEmail">
    <p class="first-p">{{ $t("contact.email-form.intro-p") }}</p>
    <input type="text" name="user_name" :placeholder="$t('contact.email-form.placeholder-name')" required />
    <input type="text" name="user_email" :placeholder="$t('contact.email-form.placeholder-email')" required />
    <textarea name="message" :placeholder="$t('contact.email-form.placeholder-message')" required />
    <input type="submit" :value="$t('contact.email-form.button-send')" />
  </form>

  <div class="advice" id="email-sent">{{ $t("contact.email-form.success-message") }}</div>

  <div class="advice" id="email-fail">{{ $t("contact.email-form.error-message") }}</div>
</template>

<script>
import emailjs from "emailjs-com";
import gsap from "gsap";

export default {
  name: "MyEmailForm",
  setup() {

    /*
      To send an email, I use the emailjs-com library, because it's a
      library that allows me to send emails from my website without
      having to configure anything in the backend.
    */

    const service_id = process.env.VUE_APP_EMAILJS_SERVICE_ID;
    const template_id = process.env.VUE_APP_EMAILJS_TEMPLATE_ID;
    const user_id = process.env.VUE_APP_EMAILJS_USER_ID;

    function sendEmail(e) {
      emailjs.sendForm(service_id, template_id, e.target, user_id).then(
        (result) => {
          console.log("Email sent successfully", result.status, result.text);

          document.getElementById("email-form").reset();

          gsap.to("#email-sent", { opacity: 1, scale: 1.2, ease: "bounce" });
          gsap.to("#email-sent", { opacity: 0, scale: 0, delay: 5 });
        },
        (error) => {
          console.log("Email sent went wrong", error);

          gsap.to("#email-fail", { opacity: 1, scale: 1.2, ease: "bounce" });
          gsap.to("#email-fail", { opacity: 0, scale: 0, delay: 5 });
        }
      );
    }

    return { sendEmail };
  },
};
</script>