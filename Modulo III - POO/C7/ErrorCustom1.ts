export default class ErrorCustom1 extends Error {
    constructor(message?: string) {
        super(message)
        throw new Error()
    }
}