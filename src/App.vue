<template>
<div>
    <div class="wrapper">

        <!-- Preloader -->
        <!-- <div class="preloader flex-column justify-content-center align-items-center">
            <img class="animation__shake" src="/admin/dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
        </div> -->

        <!-- Navbar -->
        <NavbarPage  v-if="loggedInStatus" />
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <SidebarPage  v-if="loggedInStatus" />
        <!-- Content Wrapper. Contains page content -->
        <router-view></router-view>
        <!-- /.content-wrapper -->
       <FooterPage v-if="loggedInStatus" />

    </div>
    <!-- ./wrapper -->
</div>
<!-- <router-view/> -->
</template>
<script>
import FooterPage from './components/FooterPage.vue';
import NavbarPage from './components/NavbarPage.vue';
import SidebarPage from './components/SidebarPage.vue';
export default {
    name: "App",
    data(){
      return {
        auth:false
      }
    },
    components: { FooterPage, NavbarPage, SidebarPage },
    computed:{
      loggedInStatus(){
        return this.$store.getters.GET_AUTH_STATUS;
      }
    }
}
</script>