import axios from 'axios'
axios.defaults.baseURL='http://127.0.0.1:8000/api/v1'
export const auth={
    state: {
        auth_status:false,
        auth_token:null,
        auth_info:{
            name:null,
            email:null,
            phone:null,
            image:null
        }
    },
    getters: {
        GET_AUTH_STATUS(state){
            return state.auth_status;
        },
        GET_AUTH_TOKEN(state){
            return state.auth_token;
        },
        GET_AUTH_INFO(state){
            return state.auth_info;
        }
    },
    actions: {
        LOGIN(context,formData){
            return new Promise((resolve,reject)=>{
                axios.post('/login', formData)
                .then((result) => {
                    //console.log(result.data);
                    context.commit('SET_AUTH_TOKEN',result.data.access_token)
                    context.commit('SET_AUTH_INFO',result.data.user)
                    resolve(result)
                }).catch((error) => {
                    //console.log(error.response.data.errors);
                    reject(error)
                })
            })
           
        },
        LOGOUT(context){
            axios.defaults.headers.common['Authorization']="Bearer "+ context.state.auth_token;
            return new Promise((resolve,reject)=>{
                axios.post('/logout')
                .then((result) => {
                    //console.log(result.data);
                    context.commit('SET_AUTH_LOGOUT')
                    resolve(result)
                }).catch((error) => {
                    //console.log(error.response.data.errors);
                    reject(error)
                })
            })
           
        },
        REGISTER(context,formData){
            return new Promise((resolve,reject)=>{
                axios.post('/register',formData)
                .then((result)=>{
                    //console.log(result.data);
                    context.commit('SET_AUTH_TOKEN',result.data.access_token)
                    context.commit('SET_AUTH_INFO',result.data.user)
                    resolve(result)

                }).catch((error)=>{
                    //console.log(result.response.data.error);
                    reject(error)

                })
            })
               
            
        },
        FORGATE(context,formData){
            return new Promise((resolve,reject)=>{
                axios.post('/forgate', formData)
                .then((result) => {
                    //console.log(result.data);
                    resolve(result)
                }).catch((error) => {
                    //console.log(error.response.data.errors);
                    reject(error)
                })
            })
        }
    },
    mutations: {
        SET_AUTH_TOKEN(state,token){
            state.auth_token=token;
            state.auth_status=true;
        },
        SET_AUTH_INFO(state,info){
            state.auth_info.name=info.name;
            state.auth_info.email=info.email;
            state.auth_info.phone=info.phone;
            state.auth_info.image=info.image;
        },
        SET_AUTH_LOGOUT(state){
            state.auth_token=null;
            state.auth_status=false;
            state.auth_info={
                name:null,
                email:null,
                phone:null,
                image:null
            }
        }
        
    },
}