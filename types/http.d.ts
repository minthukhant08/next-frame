type HTTPResponse<T> = {
    code: number,
    success: boolean,
    message: string
    data: T
}