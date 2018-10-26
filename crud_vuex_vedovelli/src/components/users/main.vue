<template>
  <div>
    Email: {{email}}

    <cc-button></cc-button>

  </div>

</template>

<script>
import CcButton from "../button";

export default {
  components: {
    CcButton
  },

  computed: {
    email() {
      return this.$store.state.user.email;
    }
  }
};
</script>


