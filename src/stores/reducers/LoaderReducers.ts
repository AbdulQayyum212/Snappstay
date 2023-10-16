export interface LoaderState {
  loading: boolean;
  loadingProgress: boolean;
  progress: number;
}

const initialState: LoaderState = {
  loading: false,
  loadingProgress: false,
  progress: 0,
};

export const LOADER_TRUE = 'LOADER_TRUE';
export const LOADER_FALSE = 'LOADER_FALSE';
export const LOADING_PROGRESS = 'LOADING_PROGRESS';
export const LOADING_PROGRESS_COMPLETE = 'LOADING_PROGRESS_COMPLETE';

export type LoaderActionType =
  | {type: typeof LOADER_TRUE}
  | {type: typeof LOADER_FALSE}
  | {type: typeof LOADING_PROGRESS; payload: number}
  | {type: typeof LOADING_PROGRESS_COMPLETE; payload: number};

function LoaderReducer(
  state: LoaderState = initialState,
  action: LoaderActionType,
): LoaderState {
  switch (action.type) {
    case LOADER_TRUE:
      return {
        ...state,
        loading: true,
      };
    case LOADER_FALSE:
      return {
        ...state,
        loading: false,
      };
    case LOADING_PROGRESS:
      return {
        ...state,
        loadingProgress: true,
        progress: action.payload,
      };
    case LOADING_PROGRESS_COMPLETE:
      return {
        ...state,
        loadingProgress: false,
        progress: action.payload,
      };
    default:
      return state;
  }
}

export default LoaderReducer;
