import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { JsonplaceService } from './jsonplace.service';
import Posts from './post';
import Comment from './comment'
import { parse } from 'path/posix';

@Controller('')
export class JsonplaceController {
    constructor(private readonly jsonplaceService:JsonplaceService) {}


    @Get('posts')
    public getPosts(): Posts [] {
        return this.jsonplaceService.getPosts();
    }

    @Get('posts/:id')
    public getPost(@Param('id')id: string):Posts {
        return this.jsonplaceService.getPost(parseInt(id));
    }

    @Get('comments')
    public getComments(): Comment[] {
        return this.jsonplaceService.getComments();
    }

    @Get('posts/:id/comments')
    public getCommentsOfPost(@Param('id')id: string): Comment[]{
        return this.jsonplaceService.getCommentsOfPost(parseInt(id));
    }

    @Post('comments')
    public addComment(@Body() comment:any) {
        return this.jsonplaceService.addComment(comment);
    }

    @Post('posts')
    public addPost(@Body() post:any) {
        return this.jsonplaceService.addPost(post);
    }

    @Delete('posts/:id')
    public delPost(@Param('id') id:string) {
        return this.jsonplaceService.delPost(parseInt(id));
    }

    @Delete('comments/:id')
    public delComment(@Param('id') id:string) {
        return this.jsonplaceService.delComment(parseInt(id));
    }

    @Put('posts/:id')
    public updatePost(@Body() post:any, @Param('id') id:string):boolean {
        return this.jsonplaceService.updatePost(parseInt(id), post);
    }

    @Put('comments/:id')
    public updateComment(@Body() comment:any, @Param('id') id:string):boolean {
        return this.jsonplaceService.updateComment(parseInt(id), comment);
    }
}
