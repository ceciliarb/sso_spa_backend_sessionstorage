import axios from 'axios';
import store from './store'

const axios_keycloak = axios.create();

var keycloak = Keycloak();
keycloak.init({ onLoad: 'login-required' }).success(function(authenticated) {
    sessionStorage.setItem('token', keycloak.token)
    axios_keycloak.get('user').then((response) => { store.commit('setUser', response.data) })

    setInterval(function () {
        keycloak.updateToken().success(function (refreshed) {
            if (refreshed) {
                console.log('token atualizado')
            } else{
                console.log('token ainda valido')
            }
            sessionStorage.setItem('token', keycloak.token)

        }).error(function() { console.log('erro ao atualizar o token') });

    }, 10 * 60 * 1000);


}).error((error) => {
    console.log(error);
});

// insere o bearer token
axios_keycloak.interceptors.request.use(function (config) {
    let token = sessionStorage.getItem('token')
    if(token) {
        config.headers['Authorization'] = 'Bearer ' + token
    }
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    return config

  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

axios_keycloak.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // token expired
        if (error.response.status == 401) {
            window.location.href = '/logout'
        } else if (error.response.status == 403) {
            window.location.href = '/unauthorized'
        }
        return Promise.reject(error)
    }
)

export default axios_keycloak;
