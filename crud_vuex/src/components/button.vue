<template>
  <div>
    <button :disabled="!hasUser"
            @click="mudarDados">Mudar dados do usuário
    </button>
  </div>
</template>


<script>
export default {
  computed:{
    hasUser(){
      return this.$store.state.user.name !== ''
    }
  },
  methods: {
    mudarDados() {
      const payload = {
        name: "Outro name",
        email: "email@email.com",
        level: "usuario-raso"
      };
      this.$store.commit('CHANGE_USER', payload)
    }
  }

};
</script>

