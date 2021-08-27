export default class ErrorCustom2 extends Error {
    
    
    
    public constructor(message?: string) {
        super(message)
        throw new Error()
    }

}