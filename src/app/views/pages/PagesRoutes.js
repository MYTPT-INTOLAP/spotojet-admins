import { lazy } from 'react';
import Loadable from 'app/components/Loadable';

// const AppTable = Loadable(lazy(() => import('./tables/AppTable')));
const AddPlayer = Loadable(lazy(() => import('./Players/AddPlayer')));
const ListPlayer = Loadable(lazy(() => import('./Players/ListPlayer')));


const AddTeam = Loadable(lazy(() => import('./Teams/AddTeam')));
const ListTeams = Loadable(lazy(() => import('./Teams/ListTeams')));

const AddCoach = Loadable(lazy(() => import('./Coaches/AddCoach')));
const ListCoach = Loadable(lazy(() => import('./Coaches/ListCoach')));

const Position = Loadable(lazy(() => import('./Positions/Position')));


const MatchesDetails = Loadable(lazy(() => import('./MatchesDetails/MatchesDetails')));


const AssessmentParameters = Loadable(lazy(() => import('./AssessmentParameters/CreateTemplate')));


const ListTemplates = Loadable(lazy(() => import('./AssessmentParameters/ListTemplates')));

const ComparePlayers = Loadable(lazy(() => import('./ComparePlayers/ComparePlayers')));

// ComparePlayers

const AddVideos = Loadable(lazy(() => import('./MyVideos/AddVideos')));
const ListVideos = Loadable(lazy(() => import('./MyVideos/ListVideos')));


const AddCategories = Loadable(lazy(() => import('./CategoriesAndParameters/AddCategories')));
const ListCategories = Loadable(lazy(() => import('./CategoriesAndParameters/ListCategories')));

const AddFReports = Loadable(lazy(() => import('./FinishedReports/AddFReports')));
const ListFReports = Loadable(lazy(() => import('./FinishedReports/ListFReports')));


const AddMatches = Loadable(lazy(() => import('./MatchesPlanning/AddMatches')));
const ListMatches = Loadable(lazy(() => import('./MatchesPlanning/ListMatches')));


const AddPLibray = Loadable(lazy(() => import('./PositionsLibray/AddPLibray')));
const ListPLibray = Loadable(lazy(() => import('./PositionsLibray/ListPLibray')));


const AddUFReports = Loadable(lazy(() => import('./UnfinishedReports/AddUFReports')));
const ListUFReports = Loadable(lazy(() => import('./UnfinishedReports/ListUFReports')));


const pagesRoutes = [
  { path: '/pages/addPlayer', element: <AddPlayer /> },
  { path: '/pages/listPlayers', element: <ListPlayer /> },

  { path: '/pages/addTeam', element: <AddTeam /> },
  { path: '/pages/listTeams', element: <ListTeams /> },

  { path: '/pages/addCoach', element: <AddCoach /> },
  { path: '/pages/listCoach', element: <ListCoach /> },

  { path: '/pages/position', element: <Position /> },

  { path: '/pages/matchesDetails', element: <MatchesDetails /> },


  { path: '/pages/createTemplate', element: <AssessmentParameters /> },


  { path: '/pages/listTemplates', element: <ListTemplates /> },


  { path: '/pages/comparePlayers', element: <ComparePlayers /> },

  // 
  { path: '/pages/addVideos', element: <AddVideos /> },
  { path: '/pages/listVideos', element: <ListVideos /> },
  

  { path: '/pages/addCategories', element: <AddCategories /> },
  { path: '/pages/listCategories', element: <ListCategories /> },

  { path: '/pages/addFReports', element: <AddFReports /> },
  { path: '/pages/listFReports', element: <ListFReports /> },

  { path: '/pages/addMatches', element: <AddMatches /> },
  { path: '/pages/listMatches', element: <ListMatches /> },

  { path: '/pages/addPLibray', element: <AddPLibray /> },
  { path: '/pages/listPLibray', element: <ListPLibray /> },

  { path: '/pages/addUFReports', element: <AddUFReports /> },
  { path: '/pages/listUFReports', element: <ListUFReports /> },
];

export default pagesRoutes;
