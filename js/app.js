const app = Vue.createApp({
    data() {
        return {
            message: 'Hello Vue! I am Batman!',
            image: "./img/batman.jpg"
        }
    }
});


app.mount("#root");