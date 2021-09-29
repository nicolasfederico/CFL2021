import { Injectable } from '@nestjs/common';
import * as FS from 'fs';
import Post from './post';
import Comment from './comment';

@Injectable()
export class JsonplaceService {
    private posts:Post [] = [];
    private comments:Comment [] = [];

    constructor() {
        this.cargarDatos();
    }

    public getPosts() {
        return this.posts;
    }

    public getComments() {
        return this.comments;
    }

    public getPost(id:number) {
        for (let post of this.posts) {
            if (post.getId()==id){
                return post
            }
        }
        return null;
    }

    public getCommentsOfPost(id:number):Comment []{
        let commentsArray: Comment[] = []
        for (let comment of this.comments) {
            if (comment.getPostId() == id) {
                commentsArray.push(comment)
            }
        }
        return commentsArray;
    }


    public addComment(comment:any) {
        this.comments.push(new Comment(comment.postId, comment.id, comment.name, comment.email, comment.body));
        this.guardarDatos();
    }

    public addPost(post:any) {
        this.posts.push(new Post(post.userId, post.id, post.title, post.body));
        this.guardarDatos();
    }

    //Deletes

    public delPost(id:number) {
        let posicionPost = this.posts.findIndex (post => post.getId() == id);
        this.posts.splice(posicionPost,1);
        for (let i=this.comments.length-1; i>0;i--){
            if (this.comments[i].getPostId () == id) {
                this.comments.splice(i,1);
            }
        }        
        this.guardarDatos();
    } 

    public delComment(id:number) {
        let posicion = this.comments.findIndex (comment => comment.getID() == id);
        this.comments.splice(posicion,1);
        this.guardarDatos();
    } 


    //Puts

    public updatePost(id:number, post:any):boolean {
        let posicionPost = this.posts.findIndex (post => post.getId() == id);
        if (posicionPost > -1) {
            const postUpdate = new Post(post.userId, post.id, post.title, post.body);
            this.posts[posicionPost] = postUpdate;
            for (let i=this.comments.length-1; i>0;i--){
                if (this.comments[i].getPostId () == id) {
                    this.comments[i].setPostId(this.posts[posicionPost].getId());
                }
            }   
            this.guardarDatos(); 
            return true;
        }    
        return false;
    }

    public updateComment(id:number, comment:any):boolean {
        let posicion = this.comments.findIndex (comment => comment.getID() == id);
        if (posicion > -1) {
            const commentUpdate = new Comment(comment.postId, comment.id, comment.name, comment.email, comment.body);
            this.comments[posicion] = commentUpdate;
            this.guardarDatos();
            return true;
        }
        return false;
    } 

    //Persistencia
    private cargarDatos(){
        let texto = FS.readFileSync('datosTPPosts.csv','utf-8');
        this.posts = texto.split('\r\n').map(linea => linea.split(','))
        .map(dato => new Post(parseInt(dato[0]),parseInt(dato[1]),(dato[2]), (dato[3])));

        let textoComments = FS.readFileSync('datosTPComments.csv', 'utf-8');
        this.comments = textoComments.split('\r\n').map(linea => linea.split(','))
        .map(dato => new Comment(parseInt(dato[0]),parseInt(dato[1]),dato[2], dato[3], dato[4]));
    }

    private guardarDatos(){
        let datos:string='';
        for (let post of this.posts) {
            datos+=`\r\n${post.getUserId()},${post.getId()},${post.getTitle()},${post.getBody()}`
        }
        FS.writeFileSync('datosTPPosts.csv', datos.substr(2));
        datos = '';
        for (let comment of this.comments){
            datos+=`\r\n${comment.getPostId()},${comment.getID()},${comment.getName()},${comment.getEmail()},${comment.getBody()}`
        }
        FS.writeFileSync('datosTPComments.csv', datos.substr(2));
    }
}
