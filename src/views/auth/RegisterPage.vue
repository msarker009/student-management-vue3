<template>
<div class="hold-transition login-page">
    <div class="register-box">
        <div class="card card-outline card-primary">
            <div class="card-header text-center">
                <a href="../../index2.html" class="h1"><b>Admin</b>LTE</a>
            </div>
            <div class="card-body">
                <p class="login-box-msg">Register a new membership</p>

                <form @submit.prevent="adminRegister">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" v-model="formData.name" placeholder="Full name">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-user"></span>
                            </div>
                        </div>
                    </div>
                    <span class="text-danger" v-if="errors.name">{{errors.name[0]}}</span>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" v-model="formData.email" placeholder="Email">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                    </div>
                    <span class="text-danger" v-if="errors.email">{{errors.email[0]}}</span>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" v-model="formData.phone" placeholder="Phone">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-phone"></span>
                            </div>
                        </div>
                    </div>
                    <span class="text-danger" v-if="errors.phone">{{errors.phone[0]}}</span>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" v-model="formData.password" placeholder="Password">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <span class="text-danger" v-if="errors.password">{{errors.password[0]}}</span>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" v-model="formData.password_confirmation" placeholder="Retype password">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-8">
                            <div class="icheck-primary">
                                <input type="checkbox" id="agreeTerms" name="terms" value="agree">
                                <label for="agreeTerms">
                                    I agree to the <a href="#">terms</a>
                                </label>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-4">
                            <button type="submit" class="btn btn-primary btn-block">Register</button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>

                <div class="social-auth-links text-center">
                    <a href="#" class="btn btn-block btn-primary">
                        <i class="fab fa-facebook mr-2"></i>
                        Sign up using Facebook
                    </a>
                    <a href="#" class="btn btn-block btn-danger">
                        <i class="fab fa-google-plus mr-2"></i>
                        Sign up using Google+
                    </a>
                </div>

                <router-link :to="{name:'login'}" class="text-center">I already have a membership</router-link>
            </div>
            <!-- /.form-box -->
        </div><!-- /.card -->
    </div>
</div>
</template>

<script>
export default {
    name: 'RegisterPage',
    data() {
        return {
            formData: {
                name: null,
                email: null,
                phone: null,
                password: null,
                password_confirmation: null
            },
            errors: {},
        }
    },
    methods: {
        adminRegister() {
            this.$store.dispatch("REGISTER", this.formData)
                .then((result) => {
                    console.log(result.data);
                    this.$router.push({
                        name: 'home'
                    })
                }).catch((error) => {
                    this.errors = error.response.data.errors
                })
        }
    }
}
</script>

<style>

</style>
