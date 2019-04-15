import { mapState, mapActions } from 'vuex'

export default {
  name: 'Tests',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    setTimeout(() => {
      this.loadTests()
    }, 5000)
  },
  computed: {
    ...mapState({
      tests: store => store.test.list
    }),
    testStringLength () {
      return this.msg.length
    }
  },
  methods: {
    ...mapActions({
      loadTests: 'test/loadTests'
    }),
    handleClick () {
      this.msg = 'I was clecked'
      console.log('click')
    }
  }
}
