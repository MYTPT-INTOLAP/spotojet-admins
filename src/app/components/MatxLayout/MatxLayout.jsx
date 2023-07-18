import { MatxSuspense } from 'app/components';
import useSettings from 'app/hooks/useSettings';
import { MatxLayouts } from './index';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllPlayers
} from "../../../store/actions/playerAction";
import {
  GetAllTeams
} from "../../../store/actions/teamAction";
import {
  GetAllCoaches
} from "../../../store/actions/adminAction";
import {
  GetAllVideos
} from "../../../store/actions/videoAction";
import {
  GetAllCat
} from "../../../store/actions/categoryAction";
import {
  GetAllParam
} from "../../../store/actions/parameterAction";
import {
  GetAllMatchData
} from "../../../store/actions/matchAction";
import {
  GetAllPosition
} from "../../../store/actions/positionAction";


const MatxLayout = (props) => {
  const { settings } = useSettings();
  const dispatch = useDispatch();

  const Layout = MatxLayouts[settings.activeLayout];

  useEffect(() => {
    dispatch(GetAllPlayers());
    dispatch(GetAllTeams());
    dispatch(GetAllCoaches());
    dispatch(GetAllVideos());
    dispatch(GetAllCat());
    dispatch(GetAllMatchData());
    dispatch(GetAllParam())
  }, [])

  return (
    <MatxSuspense>
      <Layout {...props} />
    </MatxSuspense>
  );
};

export default MatxLayout;
