import MyLayout from 'pages/MyLayout.vue'
import MyForm from 'pages/MyForm.vue'

const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/IndexPage.vue')
        }]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () =>
            import ('pages/ErrorNotFound.vue')
    },
    // myLayout
    // {
    //     path: '/MyLayout',
    //     component: MyLayout
    // }
    // myForm
    {
      path: '/MyForm',
      component: MyForm
  }
]

export default routes
