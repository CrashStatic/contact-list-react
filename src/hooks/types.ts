export type ValidationErrors = { [key: string]: string } | null;
export type CurrentError = string | null;
export type ValidateFunction = (fields: string[]) => boolean;
