import { MatxSuspense } from 'app/components';
import useSettings from 'app/hooks/useSettings';
import { MatxLayouts } from './index';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllPlayers
} from "../../../store/actions/playerAction";

const MatxLayout = (props) => {
  const { settings } = useSettings();
  const dispatch = useDispatch();

  const Layout = MatxLayouts[settings.activeLayout];

  useEffect(() => {
    dispatch(GetAllPlayers());
  }, [])

  return (
    <MatxSuspense>
      <Layout {...props} />
    </MatxSuspense>
  );
};

export default MatxLayout;
