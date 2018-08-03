const routes = [
    {
        path: '/admin',
        component: () => import('@/views/admin.vue'),
        children: [
            {
                path: 'admin1',
                component: () => import('@/views/admin1.vue'),
            },
            {
                path: 'admin2',
                component: () => import('@/views/admin2.vue'),
            },
        ]
    },
]

export default routes 
