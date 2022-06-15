export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Vuex stores are reactive. When Vue components retrieve state from it, they will reactively and efficiently update if the store\'s state changes.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut cum doloremque ducimus facilis, illum incidunt iusto nisi, non, officiis praesentium quisquam quos rem? Assumenda eveniet porro quasi quibusdam vel!',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab cum, distinctio dolores ducimus eum exercitationem hic iusto maiores nesciunt numquam quis ratione reiciendis suscipit vitae. Eius minima numquam odio.',
            picture: null,
        }
    ]
})