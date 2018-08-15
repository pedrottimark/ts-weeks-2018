import {combineReducers} from 'redux';

import foods from './foods';
import isFetchingIds from './isFetchingIds';
import isGetting from './isGetting';
import isRenderingFormId from './isRenderingFormId';
import message from './message';
import portions from './portions';

export default combineReducers({
  foods,
  isFetchingIds,
  isGetting,
  isRenderingFormId,
  message,
  portions,
});
