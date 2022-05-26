<template>
<div class="hold-transition login-page">
    <div class="login-box">
        <!-- /.login-logo -->
        <div class="card card-outline card-primary">
            <div class="card-header text-center">
                <a href="../../index2.html" class="h1"><b>Forgot Password</b></a>
            </div>
            <div class="card-body">
                <form @submit.prevent="adminForgatePassword">
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
                        <input type="email" class="form-control" v-model="formData.email" placeholder="Email">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <!-- /.col -->
                        <div class="col-4">
                            <button type="submit" class="btn btn-primary btn-block">
                                Send Link
                            </button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>
                <!-- /.social-auth-links -->
                <p class="mb-0">
                    <router-link :to="{name:'login'}" class="text-center">Return to Login</router-link>
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
    name: 'ForgatePassword',
    data() {
        return {
            formData: {
                email: '',
            },
            errors: {
               
            },
            msg:null

        }
    },
    methods: {
        adminForgatePassword() {
            this.$store.dispatch("FORGATE", this.formData)
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
