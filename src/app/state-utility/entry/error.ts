export interface ErrorState {
    code: number;
    message: string;
}

export function createErrorObject(error): ErrorState {
    return {
        code: error.status ? error.status : 0,
        message: error.data ? error.data.message : "Unknown Error"
    };
}