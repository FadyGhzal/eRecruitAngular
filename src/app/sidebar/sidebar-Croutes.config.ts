export const CROUTES = [
  { path: '/', title: 'Homepage', icon: 'home', children: null },
  { path: 'dashboardc', title: 'Dashboard', icon: 'dashboard', children: null },
  { path: 'components/condidat/profilecondidat', title: 'Profile', icon: 'person', children: null },
    { path: '#component', id: 'component', title: 'Annonces', icon: 'list', children: [
        {path: 'components/travails', title: 'Les travails', icon: ''},
        {path: 'components/stages', title: 'Les stages', icon: ''},
        {path: 'components/formations', title: 'Les formations', icon: ''},
      ]},
      { path: 'demandes', title: 'Mes demandes', icon: 'history', children: null },
      { path : 'components/entretients', title: 'Les entretients', icon:'contact_mail', children : null}


];

