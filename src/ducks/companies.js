
const COMPANIES_LOADED = 'COMPANIES:LOADED';
const LOADING_COMPANIES = 'COMPANIES:LOADING';
const LOAD_COMPANIES = 'EVTX:SERVER:COMPANIES:LOAD';

const initialState = { data: {} };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPANIES_LOADED:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const loadingCompanies = () => ({ type: LOADING_COMPANIES });
const companiesLoaded = companies => ({ type: COMPANIES_LOADED, payload: companies });

export const loadCompanies = () => () =>  {
  return Promise.resolve();
};

export default reducer;
