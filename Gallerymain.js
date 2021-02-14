const gallery = {
    data() {
        return {
            items: [
                {
                    src: './Gallery/1.jpg',
                    name: 'Choi Hyun Suk',
                    like: false
                },
                {
                    src: './Gallery/2.jpg',
                    name: 'Park Ji Hoon',
                    like: false
                },
                {
                    src: './Gallery/3.jpg',
                    name: 'Kanemoto Yoshinori',
                    like: false
                },
                {
                    src: './Gallery/4.jpg',
                    name: 'Kim Jun Kyu',
                    like: false
                },
                {
                    src: './Gallery/5.jpg',
                    name: 'Takata Mashiho',
                    like: false
                },
                {
                    src: './Gallery/6.jpg',
                    name: 'Yoon Jae Hyuk',
                    like: false
                },
                {
                    src: './Gallery/7.jpg',
                    name: 'Hamada Asahi',
                    like: false
                },
                {
                    src: './Gallery/8.jpg',
                    name: 'Bang Ye Dam',
                    like: false
                },
                {
                    src: './Gallery/9.jpg',
                    name: 'Kim Do Young',
                    like: false
                },
                {
                    src: './Gallery/10.jpg',
                    name: 'Watanabe Haruto',
                    like: false
                },
                {
                    src: './Gallery/11.jpg',
                    name: 'Park Jeong Woo',
                    like: false
                },
                {
                    src: './Gallery/12.jpg',
                    name: 'So Jung Hwan',
                    like: false
                }
            ]

        }
    },
    methods: {
        toggleLike(index) {
            this.items[index].like = !this.items[index].like
        }
    },
    computed: {
        Like() {
            return this.items.filter(l => l.like).length

        }

    }
}
Vue.createApp(gallery).mount('#gallery')