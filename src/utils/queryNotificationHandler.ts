import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const queryNotificationHandler = (response: FetchBaseQueryError | SerializedError | undefined) => {
  if (response && 'status' in response) {
    if (typeof response.data === 'object' && response.data && 'message' in response.data) {
      return response.data.message as string;
    } else if ('error' in response) {
      return response.error;
    }
  } else {
    return 'Error! Try again.';
  }
};
