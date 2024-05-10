import { Store } from 'pullstate';

export const formStore = new Store({
  firstName: '',
  lastName: '',
  languageSpoken: '',
  religion: '',
  familyPlan: '',
  relationship: '',
  race: '',
  email: '',
  page: 0,
});
