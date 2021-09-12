import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';

import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  
  constructor(
    @InjectRepository(Comment) private readonly commentRepositary: Repository<Comment>
  ) {

  }

  async create(data: any): Promise<Comment> {
    
    return this.commentRepositary.save(data);
  }

  async findAll() {
    return this.commentRepositary.find();
  }


  async findOne(condition: any): Promise<Comment> {
    return this.commentRepositary.findOne(condition);
  }

  async showOne(id): Promise<Comment> {
    return this.commentRepositary.findOne({id});
  }

  async remove(id) {
    return this.commentRepositary.delete({ id });
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const text = updateCommentDto['text'];
    
    
    const updatedUser = ({"text": text,});
    return this.commentRepositary.update({ id }, { ...updatedUser});
  }

  find(movie_id: string) {
    return this.commentRepositary.find({ movie_id });
  }

}
