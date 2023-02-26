<template>

  <q-layout view="hHh Lpr lFf">
    <q-page-container class="bg-grey-2">
      <div @keyup="nextItem">
        <q-page
          padding
          class="row items-center justify-center"
          style="background: linear-gradient(#cc00cc, #0C17B2)"
        >
          <div class="row full-width">
            <div class="col-md-8 offset-md-2 col-xs-12 q-pa-xs">
              <q-card flat class="bg-white text-black">
                <q-card-section class="">
                  <h4 class="text-h5 text-white q-my-xs text-center">
                    {{ title }}
                  </h4>
                </q-card-section>
                <div class="row full-width">
                  <div class="col-md-12 col-xs-12 q-pa-xs">
                    <q-form autofocus @submit="submitForm">
                      <q-card-section>
                        <div class="text-h6">Create New Account</div>
                        <div class="text-subtitle1">
                          Fill out the following form to create your new
                          account.
                        </div>
                      </q-card-section>
                      <q-separator inset />
                      <div class="row">
                        <div class="col-md-4 col-xs-12 q-pa-xs">
                          <q-input
                            label="Name *"
                            v-model="formState.name"
                          ></q-input>
                        </div>
                        <div class="col-md-4 col-xs-12 q-pa-xs">
                          <q-input
                            label="Email *"
                            v-model="formState.email"
                          ></q-input>
                        </div>
                        <div class="col-md-4 col-xs-12 q-pa-xs">
                          <q-input
                            label="Phone"
                            v-model="formState.phone"
                            mask="(###) ### - ####"
                            hint="(###) ### - ####"
                          ></q-input>
                        </div>
                        <div class="col-md-6 col-xs-12 q-pa-xs">
                          <q-input
                            label="Password *"
                            type="password"
                            v-model="formState.password.value"
                          >
                          </q-input>
                        </div>
                        <div class="col-md-6 col-xs-12 q-pa-xs">
                          <q-input
                            label="Confirm Password *"
                            type="password"
                            v-model="formState.password.confirm"
                          >
                          </q-input>
                        </div>
                      </div>
                      <q-card-actions align="right">
                        <q-btn flatunelevated to="/">Cancel</q-btn>
                        <q-btn color="primary" type="submit"
                          >Create Account</q-btn
                        >
                      </q-card-actions>
                    </q-form>
                  </div>
                </div>
              </q-card>
            </div>
          </div>
        </q-page>
      </div>
    </q-page-container>
  </q-layout>

</template>
<script>
export default {
  name: "MyFirst",
  components: {},
  data() {
    return {
      formState: {
        name: "",
        email: "",
        phone: "",
        password: {
          value: "",
          confirm: "",
        },
      },
    };
  },
  methods: {
    validateEmail(email) {
      return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
    },
    validatePassword(password) {
      var length = password.length >= 8;
      var capital = /^(?=.*[A-Z]).*$/.test(password);
      var number = /^(?=.*[0-9]).*$/.test(password);
      var symbol = /^(?=.*[!@#$%^&*-_+=]).*$/.test(password);
      return length && capital && number && symbol;
    },
  },
  mounted() {},
};
</script>
