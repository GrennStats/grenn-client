export interface ErrorState {
  code: number;
  message: string;
}

export function createErrorObject(error): ErrorState {
  if (!error.status) {
    console.error(error);
  }

  return {
    code: error.status ? error.status : 0,
    message: error.data ? error.data.message : "Unknown Error"
  };
}
