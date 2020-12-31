export interface InputReducerState {
  value: string;
  isValid: boolean;
  touched: boolean;
}

export interface InputReducerAction {
  type: string;
  payload?: any;
}
