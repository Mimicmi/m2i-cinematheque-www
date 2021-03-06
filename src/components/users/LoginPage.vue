<template>
  <div
    class="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-50
      py-12
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="../../assets/logo.png"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div
        v-if="alertOpen"
        id="pop-up-alert"
        name="pop-up-alert"
        class="
          bg-red-100
          border border-red-400
          text-red-700
          px-4
          py-3
          rounded
          relative
        "
        role="alert"
      >
        <strong class="font-bold">Error</strong>
        <li v-if="status === 404">Please enter ALL informations to sign in</li>
        <ul v-for="errors in error" v-bind:key="errors.email">
          <li>{{ errors.toString().replace('"', "") }}</li>
        </ul>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            @click="alertClose"
            class="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path
              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
            />
          </svg>
        </span>
      </div>

      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              v-model="email"
              @blur="handleBlurEmail"
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              :class="{ invalid: blurStatusEmail === 'invalid' }"
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-t-md
                focus:outline-none
                focus:ring-gray-500
                focus:border-gray-500
                focus:z-10
                sm:text-sm
              "
              :placeholder="
                blurStatusEmail === 'invalid'
                  ? 'Please enter your email'
                  : 'Enter your email'
              "
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              v-model="password"
              @blur="handleBlurPassword"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              :class="{ invalid: blurStatusPassword === 'invalid' }"
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-b-md
                focus:outline-none
                focus:ring-gray-500
                focus:border-gray-500
                focus:z-10
                sm:text-sm
              "
              :placeholder="
                blurStatusPassword === 'invalid'
                  ? 'Please enter your password'
                  : 'Enter your password'
              "
            />
          </div>
        </div>

        <div>
          <button
            @click.prevent="submitLogin"
            type="submit"
            class="
              group
              relative
              w-full
              flex
              justify-center
              py-2
              px-4
              border border-transparent
              text-sm
              font-medium
              rounded-md
              text-white
              bg-gray-500
              hover:bg-gray-400
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
            "
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                class="h-5 w-5 text-black-600 group-hover:text-black-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Se connecter
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      alertOpen: false,
      blurStatusEmail: "pending",
      blurStatusPassword: "pending",
      status: null,
    };
  },
  methods: {
    submitLogin() {
      if (this.email === "" || this.password === "") {
        this.alertOpen = true;
        this.status = 404;
        return;
      }
      this.$axios
        .post(
          this.$apiURL + "login",
          {
            email: this.email,
            password: this.password,
          },
        )
        .then((response) => {
          localStorage.setItem("jwt", response.data.message);
          this.$store.dispatch("login");
          if (this.$store.state.loggedIn === true) {
            this.$router.push("/administrateurs/films");
          }
        })
        .catch((err) => {
          this.alertOpen = true;
          this.error = err.response.data.errors;
          this.$store.dispatch("login");
          localStorage.removeItem("jwt");
        });
    },
    alertClose() {
      this.status = null;
      this.alertOpen = false;
    },
    handleBlurEmail() {
      if (this.email === "") {
        this.blurStatusEmail = "invalid";
      } else {
        this.blurStatusEmail = "valid";
      }
    },
    handleBlurPassword() {
      if (this.password === "") {
        this.blurStatusPassword = "invalid";
      } else {
        this.blurStatusPassword = "valid";
      }
    },
  },
};
</script>

<style scoped>
.invalid {
  @apply appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-gray-300 placeholder-red-600 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm border-red-600 border-opacity-75;
}
</style>