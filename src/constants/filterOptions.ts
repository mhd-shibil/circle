import { FilterTabs, FilterText } from 'types';
import { CALENDER, CALENDER_SELCTED, STATUS_FILTER, STATUS_FILTER_SELECTED } from './icons';

export const FilterOptions: FilterTabs[] = [
  {
    index: 0,
    label: 'Show transactions',
    value: FilterText.DATE,
    icons: {
      normal: CALENDER,
      selected: CALENDER_SELCTED
    }
  },
  {
    index: 1,
    label: 'Pick status',
    value: FilterText.STATUS,
    icons: {
      normal: STATUS_FILTER,
      selected: STATUS_FILTER_SELECTED
    }
  }
];
