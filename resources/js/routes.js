import Home from './components/Home.vue'
import ExampleComponent from './components/ExampleComponent.vue'
import CalendarComponent from './components/CalendarComponent.vue'
// import Register from './components/Register.vue';
// import Login from './components/Login.vue';

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/example', name: 'example', component: ExampleComponent },
    { path: '/calendar', component: CalendarComponent },
];

export default routes;
