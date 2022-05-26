<template>
<div class="hold-transition login-page">
    <div class="login-box">
        <!-- /.login-logo -->
        <div class="card card-outline card-primary">
            <div class="card-header text-center">
                <a href="../../index2.html" class="h1"><b>Reset Password</b></a>
            </div>
            <div class="card-body">
                <form @submit.prevent="adminResetPassword">
                    <div v-if="msg">
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                <span class="sr-only">Close</span>
                            </button>
                            <strong>{{msg.message}}</strong>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" v-model="formData.password" placeholder="Password">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                     <div class="input-group mb-3">
                        <input type="password" class="form-control" v-model="formData.password_confirmation" placeholder="Retype Password">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <!-- /.col -->
                        <div class="col-4">
                            <button type="submit" class="btn btn-primary btn-block">
                                Submit
                            </button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>
                <!-- /.social-auth-links -->
                <p class="mb-0">
                    <router-link :to="{name:'forgate'}" class="text-center">Return to Forgot</router-link>
                </p>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    </div>
</div>
</template>

<script>
export default {
    name: 'ResetPassword',
    data() {
        return {
            formData: {
                password: '',
                password_confirmation: '',
                token: '',
            },
            errors: {
               
            },
            msg:null

        }
    },
    methods: {
        adminResetPassword() {
            this.$store.dispatch("RESET", this.formData)
                .then((result) => {
                    console.log(result.data);
                    this.msg=result.data
                    this.formData.email=null
                    // this.$router.push({
                    //     name: 'home'
                    // })
                }).catch((error) => {
                    //console.log(error.response.data.errors);
                    this.errors = error.response.data.errors
                })
        }
    }
}
</script>

<style>

</style>
