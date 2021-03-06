export default class Comments {
    private postId: number;
    private id: number;
    private name: string;
    private email: string;
    private body: string;

    public constructor (postId: number, id:number, name: string, email:string, body:string) {
        this.postId = postId;
        this.id = id;
        this.name = name;
        this.email = email;
        this.body = body;
    }

    public getPostId(): number {
        return this.postId;
    }

    public getID(): number {
        return this.id;
    }

    public getName():string { 
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getBody():string {
        return this.body;
    }

    public setPostId(id:number):void {
        this.postId = id;
    }
}