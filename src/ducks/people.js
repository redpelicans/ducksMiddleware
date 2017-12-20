import { compose, fromPairs, map } from 'ramda';

const PEOPLE_LOADED = 'PEOPLE:LOADED';
const LOADING_PEOPLE = 'PEOPLE:LOADING';
const LOAD_PEOPLE = 'EVTX:SERVER:PEOPLE:LOAD';

const make = person => {
  const { firstName, lastName } = person;
  const updatedPerson = {
    ...person,
    name: `${firstName} ${lastName}`,
    typeName: 'person',
    createdAt: person.createdAt ? person.createdAt : undefined,
  };
  if (person.updatedAt) updatedPerson.updatedAt = person.updatedAt;
  return updatedPerson;
};

const makeAll = compose(fromPairs, map(o => [o._id, make(o)]));

const initialState = { data: {} };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PEOPLE_LOADED:
      return { ...state, data: makeAll(action.payload) };
    default:
      return state;
  }
};

const loadingPeople = () => ({ type: LOADING_PEOPLE });
const peopleLoaded = people => ({ type: PEOPLE_LOADED, payload: people });

export const loadPeople = () => ({
  type: LOAD_PEOPLE,
  onLoad: loadingPeople, 
  onSuccess: peopleLoaded, 
});

export default reducer;
