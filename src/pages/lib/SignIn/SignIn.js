import { validationMixin } from 'vuelidate'
import {
  required,
  email
} from 'vuelidate/lib/validators'

export default {
  name: 'SignIn',
  mixins: [validationMixin],
  data: () => ({
    form: {
      email: null,
      password: null
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
      }
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
    },
    async signin () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.sending = true
        try {
          await this.$store.dispatch('account/login', {
            email: this.form.email,
            password: this.form.password
          })
          this.$router.push('/private')
        } finally {
          this.sending = false
        }
      }
    }
  }
}
