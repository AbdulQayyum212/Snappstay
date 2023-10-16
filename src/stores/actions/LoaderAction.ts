import {
  LOADER_FALSE,
  LOADER_TRUE,
  LOADING_PROGRESS,
  LOADING_PROGRESS_COMPLETE,
  LoaderActionType,
} from '../reducers/LoaderReducers';

export const loaderTrue = (): LoaderActionType => ({
  type: LOADER_TRUE,
});

export const loaderFalse = (): LoaderActionType => ({
  type: LOADER_FALSE,
});

export const loadingProgress = (payload: number): LoaderActionType => ({
  type: LOADING_PROGRESS,
  payload,
});
export const loadingProgressComplete = (payload: number): LoaderActionType => ({
  type: LOADING_PROGRESS_COMPLETE,
  payload,
});
