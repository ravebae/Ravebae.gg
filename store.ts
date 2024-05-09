import { Store } from 'pullstate';

export const formStore = new Store({
  firstName: '',
  lastName: '',
  languageSpoken: '',
  religion: '',
  familyPlan: '',
  race: '',
  page: 0,
});
