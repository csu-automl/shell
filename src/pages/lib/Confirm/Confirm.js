import { mapState, mapActions } from 'vuex'

export default {
  name: 'Confirm',
  data: () => ({
    loading: true,
    msg: ""
  }),
  created () {
    this.confirm()
  },
  methods: {
    async confirm () {
      try {
        let response = await this.$store.dispatch('account/confirm', {
          check: this.$route.params.token
        })
        this.msg = response.user.name + ", confirm your account!";
        this.loading = false
        setTimeout(() => {
          this.$router.push('/private')
        }, 3000)
      } catch(err) {
        this.$router.push('/404')
      }
    }
  }
}
