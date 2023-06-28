export type Mapping = {
    [key: number]: string
}
export type ErrorResponse = {
    data: string;
    status: number;
    statusText: string;
    error?: Object;
};