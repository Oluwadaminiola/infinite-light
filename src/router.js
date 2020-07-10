import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

import Login from './components/auth/login'
import Signup from './components/auth/signup'

import User from './components/layout/userLayout';

import userDashboard from './views/users/dashboard';
import Help from './views/users/help';
import History from './views/users/history';
import ManageWallet from './views/users/manageWallet';
import PayBills from './views/users/payBills';
import Referrals from './views/users/referrals';
import Profile from './views/users/profile';
import ChangePassword from './views/users/changePassword';

import Adminside from './components/layout/adminLayout';
import Feeds from './views/admin/feeds'
import IssueForm from './views/admin/issue_form'
import AddDisco from './views/admin/add_disco'

Vue.use(Router);
/* eslint-disable */ 
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: userDashboard,
        },
        {
          path: 'help',
          name: 'help',
          component: Help,
        },
        {
          path: 'history',
          name: 'history',
          component: History,
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile,
        },
        {
          path: 'changePassword',
          name: 'changePassword',
          component: ChangePassword,
        },
        {
          path: 'manageWallet',
          name: 'manageWallet',
          component: ManageWallet,
        },
        {
          path: 'referrals',
          name: 'referrals',
          component: Referrals,
        },
        {
          path: 'payBills',
          name: 'payBills',
          component: PayBills,
        },
      ],
    },
    {
      path: '/admin',
      name: 'admin',
      component: Adminside,
      children: [
        {
          path: 'feeds',
          name: 'feeds',
          component: Feeds
        },
        {
          path: 'issueform',
          name: 'issueform',
          component: IssueForm
        },
        {
          path: 'addDisco',
          name: 'addDisco',
          component: AddDisco
        },
      ]
    },
  ],
});
