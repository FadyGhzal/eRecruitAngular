export const EROUTES = [
  { path: '/dashboard/', title: 'Homepage', icon: 'home', children: null },
  { path: 'dashboarde', title: 'Dashboard', icon: 'dashboard', children: null },
  /*    { path: '#component', id: 'component', title: 'Gestionnaires ', icon: 'list', children: [
        {path: 'components/entreprise/gestionoffres', title: 'Mes Annonces', icon: ''},
        {path: 'components/entreprise/listecondidat', title: 'Candidats', icon: ''},
      ]},*/
      { path: 'entrepriseprofile', title: 'Profile', icon: 'person', children: null },

      { path: 'components/entreprise/listecondidat', title: 'Les candidats', icon: 'person', children: null },
      { path: 'components/entreprise/gestionoffres', title: 'Mes Annonces', icon: 'work', children: null },

      { path: '#resourcehumaines', id: 'resourcehumaines', title: 'Espace Ressource Humaines', icon: 'list', children: [

        {path: 'components/entreprise/entretient/demandes', title: 'Les demandes travail', icon: ''},
        {path : 'components/entreprise/entretient/demandes_stage', title: 'Les demandes stage', icon: ''},
        {path: 'components/entreprise/entretient/demandes_formation', title: 'Les demandes formation', icon: ''},
        {path: 'components/entreprise/entretient/rondez_vous', title: 'Les entretiens', icon: ''},


      ]},
      { path: 'components/entreprise/entretient/rondez_vous', title: 'Les entretiens', icon: 'person', children: null },
     // { path: 'components/history', title: 'Historique', icon: 'history', children: null },

];

