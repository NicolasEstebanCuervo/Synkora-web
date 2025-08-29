export interface ErrorState {
    message: string;
    active: boolean;
}

export interface IErrorContext{
    error: ErrorState | null,
    showError: (message:string)=>void
}