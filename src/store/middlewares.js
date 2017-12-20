import { is } from 'ramda';
import { request } from '../utils';
import { alert } from '../ducks/alert';

const serverKey = 'EVTX:SERVER:';

export const serviceMiddleWare = ({ dispatch, getState }) => next => action => {
  if ( action.type && action.type.indexOf(serverKey) === 0 ) {
    const [service, method] = action.type.slice(serverKey.length).toLowerCase().split(':');
    const { payload, onLoad, onSuccess, onFailure } = action;
    if (is(Function, onLoad)) dispatch(onLoad());
    request(service, method, payload)
      .then(({ data }) => is(Function, onSuccess) && dispatch(onSuccess(data)))
      .catch(err => is(Function, onFailure) ? dispatch(onFailure(err)) : dispatch(alert(err)));
  }
  return next(action);
};

