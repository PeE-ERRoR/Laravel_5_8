import Layout from './components/layout/Layout.vue'
import AuthLayout from './components/layout/AuthLayout.vue'
import Home from './components/Home.vue'
import ExampleComponent from './components/ExampleComponent.vue'
import CalendarComponent from './components/CalendarComponent.vue'
import AxiosComponent from './components/AxiosComponent.vue'
import Register from './components/auth/Register.vue';
import Login from './components/auth/Login.vue';
import EventComponent from './components/EventComponent.vue';
import GameComponent from './components/GameComponent.vue';

//User
import User from './components/user/User.vue';

const host = window.location.host.toUpperCase()
console.log(host);
const routes = [
  { path: '/index', name: 'layout', component: Layout,
    children: [
        { path: '/home', name: 'home', component: Home },
        { path: '/example', name: 'example', component: ExampleComponent },
        { path: '/calendar', component: CalendarComponent },
        { path: '/axios', component: AxiosComponent },
        { path: '/event', component: EventComponent },
        { path: '/game', component: GameComponent },
        { path: '/user', component: User },
    ]
  },
  { path: '/auth', name: 'auth', component: AuthLayout,
    children: [
        { path: '/auth/login', name: 'login', component: Login },
        { path: '/auth/register', name: 'register', component: Register },
    ]
  },
];

export default routes;
