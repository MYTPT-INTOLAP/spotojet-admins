export const navigations = [
  { name: 'Cabinet', path: '/dashboard/default', icon: 'dashboard' },
  { label: 'PAGES', type: 'label' },
  {
    name: 'Players',
    icon: 'group',
    children: [
      { name: 'Add Player', iconText: 'SI', path: '/pages/addPlayer' },
      { name: 'List Players', iconText: 'SU', path: '/pages/listPlayers' },
    ]
  },

  {
    name: 'Teams',
    icon: 'gamepad',
    children: [
      { name: 'Add Team', iconText: 'SI', path: '/pages/addTeam' },
      { name: 'List Teams', iconText: 'SU', path: '/pages/listTeams' },
    ]
  },

  {
    name: 'Coaches',
    icon: 'person',
    children: [
      { name: 'Add Coach', iconText: 'SI', path: '/pages/addCoach' },
      { name: 'List Coach', iconText: 'SU', path: '/pages/listCoach' },
    ]
  },

  {
    name: 'Positions',
    icon: 'brightness_low',
    children: [
      { name: 'Position List', iconText: 'SI', path: '/pages/position' },
    ]
  },

  {
    name: 'Matches Details',
    icon: 'brightness_low',
    children: [
      { name: 'Position List', iconText: 'SI', path: '/pages/matchesDetails' },
    ]
  },
  // Videos

  {
    name: 'My Videos',
    icon: 'brightness_low',
    children: [
      { name: 'Add Videos', iconText: 'SI', path: '/pages/addVideos' },
      { name: 'List Videos', iconText: 'SI', path: '/pages/listVideos' },
    ]
  },
  { name: 'Parameter Templates', path: '/pages/addCategories', icon: 'menu' },

  // { name: 'Assessment Parameters', path: '/pages/assessmentParameters', icon: 'menu' },

  {
    name: 'Assessment Template',
    icon: 'menu',
    children: [
      { name: 'Create Template', iconText: 'SI', path: '/pages/createTemplate' },
      { name: 'List Templates', iconText: 'SU', path: '/pages/listTemplates' },
    ]
  },
  // 
  // {
  //   name: 'Parameter Templates',
  //   icon: 'menu',
  //   children: [
  //     { name: 'Add Categories', iconText: 'SI', path: '/pages/addCategories' },
  //     { name: 'List Categories', iconText: 'SU', path: '/pages/listCategories' },
  //   ]
  // },
    {
    name: 'Reports',
    icon: 'check_box',
    children: [
      { name: 'Add Reports', iconText: 'SI', path: '/pages/addFReports' },
      { name: 'Finished Reports', iconText: 'SU', path: '/pages/listFReports' },
      { name: 'Unfinished Reports', iconText: 'SU', path: '/pages/listUFReports' },
    ]
  },

  // { name: 'Finished Reports', path: '/pages/listFReports', icon: 'check_box' },

  // { name: 'Unfinished Reports', path: '/pages/listUFReports', icon: 'check_box_outline_blank' },


  { name: 'Compare Players', path: '/pages/comparePlayers', icon: 'check_box_outline_blank' },
  {
    name: 'Matches Planning',
    icon: 'favorite',
    children: [
      { name: 'Add Matches', iconText: 'SI', path: '/pages/addMatches' },
      { name: 'List Matches', iconText: 'SU', path: '/pages/listMatches' },
    ]
  },


  {
    name: 'Positions Library',
    icon: 'favorite',
    children: [
      { name: 'Add Positions Library', iconText: 'SI', path: '/pages/addPLibray' },
      { name: 'List Positions Library', iconText: 'SU', path: '/pages/listPLibray' },
    ]
  },

  { label: 'PAGES', type: 'label' },
  {
    name: 'Session/Auth',
    icon: 'security',
    children: [
      { name: 'Sign in', iconText: 'SI', path: '/session/signin' },
      { name: 'Sign up', iconText: 'SU', path: '/session/signup' },
      { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' },
      { name: 'Error', iconText: '404', path: '/session/404' }
    ]
  },
  // { label: 'Components', type: 'label' },
  // {
  //   name: 'Components',
  //   icon: 'favorite',
  //   badge: { value: '30+', color: 'secondary' },
  //   children: [
  //     { name: 'Auto Complete', path: '/material/autocomplete', iconText: 'A' },
  //     { name: 'Buttons', path: '/material/buttons', iconText: 'B' },
  //     { name: 'Checkbox', path: '/material/checkbox', iconText: 'C' },
  //     { name: 'Dialog', path: '/material/dialog', iconText: 'D' },
  //     { name: 'Expansion Panel', path: '/material/expansion-panel', iconText: 'E' },
  //     { name: 'Form', path: '/material/form', iconText: 'F' },
  //     { name: 'Icons', path: '/material/icons', iconText: 'I' },
  //     { name: 'Menu', path: '/material/menu', iconText: 'M' },
  //     { name: 'Progress', path: '/material/progress', iconText: 'P' },
  //     { name: 'Radio', path: '/material/radio', iconText: 'R' },
  //     { name: 'Switch', path: '/material/switch', iconText: 'S' },
  //     { name: 'Slider', path: '/material/slider', iconText: 'S' },
  //     { name: 'Snackbar', path: '/material/snackbar', iconText: 'S' },
  //     { name: 'Table', path: '/material/table', iconText: 'T' }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   icon: 'trending_up',
  //   children: [{ name: 'Echarts', path: '/charts/echarts', iconText: 'E' }]
  // },
  // {
  //   name: 'Documentation',
  //   icon: 'launch',
  //   type: 'extLink',
  //   path: 'http://demos.ui-lib.com/matx-react-doc/'
  // }
];



// { path: '/pages/addPlayer', element: <AddPlayer /> },
// { path: '/pages/listPlayers', element: <ListPlayer /> },

// { path: '/pages/addTeam', element: <AddTeam /> },
// { path: '/pages/listTeams', element: <ListTeams /> },

// { path: '/pages/addCategories', element: <AddCategories /> },
// { path: '/pages/listCategories', element: <ListCategories /> },

// { path: '/pages/addFReports', element: <AddFReports /> },
// { path: '/pages/listFReports', element: <ListFReports /> },

// { path: '/pages/addMatches', element: <AddMatches /> },
// { path: '/pages/listMatches', element: <ListMatches /> },

// { path: '/pages/addPLibray', element: <AddPLibray /> },
// { path: '/pages/listPLibray', element: <ListPLibray /> },

// { path: '/pages/addUFReports', element: <AddUFReports /> },
// { path: '/pages/listUFReports', element: <ListUFReports /> },