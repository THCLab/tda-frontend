
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'messages', component: () => import('pages/Messages.vue') },
      { path: 'documents', component: () => import('pages/Documents.vue') },
      { path: 'services', component: () => import('pages/Services.vue') },
      { path: 'data_store', component: () => import('pages/DataStore.vue') },
      { path: 'analytics', component: () => import('pages/Analytics.vue') },
      { path: 'consent', component: () => import('pages/Consent.vue') },
      { path: 'settings', component: () => import('pages/Settings.vue') },
      { path: 'help', component: () => import('pages/Help.vue') },
      { path: 'about', component: () => import('pages/About.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
