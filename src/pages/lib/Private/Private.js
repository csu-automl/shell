import { mapActions } from 'vuex'

export default {
  created () {
    if (!this.$store.state.account.principal) {
      this.$router.push('/signin')
    }
  },
  methods: {
    ...mapActions({
      logout: 'account/logout'
    }),
    async clickLogout () {
      this.$destroy()
      await this.logout()
      this.$router.push('/signin')
    }
  }
}
