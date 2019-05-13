import { validationMixin } from 'vuelidate'
import {
  required,
  email
} from 'vuelidate/lib/validators'

export default {
  name: 'SignUp',
  mixins: [validationMixin],
  data: () => ({
    form: {
      email: null,
      password: null,
      name: null
    },
    sending: false
  }),
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required
      },
      name: {
        required
      },
    }
  },
  methods: {
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    clearForm () {
      this.$v.$reset()
      this.form.email = null
      this.form.password = null
      this.form.name = null
    },
    async signup () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.sending = true
        try {
          await this.$store.dispatch('account/signup', {
            email: this.form.email,
            password: this.form.password,
            name: this.form.name
          })
          this.$router.push('/email-sent')
        } finally {
          this.sending = false
        }
      }
    }
  }
}
