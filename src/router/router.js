import Main from '../views/resumes/index.vue';

export default [
    {
        path: '/',
        name: 'index',
        meta:{
            title:"首页",
            hideInMenu:false,
            isParent: true
        },
        component: Main,

    }

]
