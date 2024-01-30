const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            activeImage: 0,
            slideInterval: false,

            images: [
                './img/01.webp',
                './img/02.webp',
                './img/03.webp',
                './img/04.webp',
                './img/05.webp'
            ],
        };
    },

    methods: {
        nextClick() {
            if (this.activeImage > this.images.length - 2) {
                this.activeImage = 0;
            } else {
                this.activeImage++;
            }
        },

        prevClick() {
            if (this.activeImage <= 0) {
                this.activeImage = this.images.length - 1;
            } else {
                this.activeImage--;
            }
        },

        goToImage(index) {
            this.activeImage = index;
        },

        startSlideInterval() {
            this.slideInterval = setInterval (() => {
                this.nextClick();
            }, 3000);
        },

        stopSlideInterval() {
            clearInterval(this.slideInterval);
        },
    },

    mounted() {
    this.startSlideInterval();
    }
});

app.mount('#app');