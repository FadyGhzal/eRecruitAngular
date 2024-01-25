export const ROUTES = [
  { path: '/', title: 'Homepage', icon: 'home', children: null },
  { path: 'components/dashboard_admin', title: 'Dashboard', icon: 'dashboard', children: null },

  { path: 'profile', title: 'Profile', icon: 'person', children: null },
  
    { path: '#component', id: 'component', title: 'Liste des utilisateur', icon: 'list', children: [
        {path: 'components/entreprise', title: 'Les entreprises', icon: ''},
        {path: 'components/condidat', title: 'Les candidats', icon: ''},
      ]},

      { path: '#offres', id: 'offres', title: 'Liste des anonnces', icon: 'list', children: [
        {path: 'components/travail', title: 'Les travails', icon: ''},
        {path: 'components/stage', title: 'Les stages', icon: ''},
        {path: 'components/formation', title: 'Les formations', icon: ''},
      ]},
    //{ path: 'notification', title: 'Notification', icon: 'notifications', children: null },
    { path: 'components/history', title: 'Historique des demandes', icon: 'history', children: null },
    /*{ path: 'alert', title: 'Sweet Alert', icon: 'warning', children: null },
    { path: 'settings', title: 'Settings', icon: 'settings', children: null },*/
];