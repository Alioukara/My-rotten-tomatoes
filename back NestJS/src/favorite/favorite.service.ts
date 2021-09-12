import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favorite } from './entities/favorite.entity';

import { UpdateFavoriteDto } from './dto/update-favorite.dto';

@Injectable()
export class FavoriteService {
  
  constructor(
    @InjectRepository(Favorite) private readonly favoriteRepositary: Repository<Favorite>
  ) {

  }

  async create(data: any): Promise<Favorite> {
    
    return this.favoriteRepositary.save(data);
  }

  async findAll() {
    return this.favoriteRepositary.find();
  }


  async findOne(condition: any): Promise<Favorite> {
    return this.favoriteRepositary.findOne(condition);
  }
  

  async showOne(id): Promise<Favorite> {
    return this.favoriteRepositary.findOne({id});
  }

  async remove(movie_id) {
    return this.favoriteRepositary.delete({ movie_id });
  }
  find(user_id: string) {
    return this.favoriteRepositary.find({ user_id });
  }




  // async update(id: number, updateFavoriteDto: UpdateFavoriteDto) {
  //   const text = updateFavoriteDto['text'];
  //   const name = updateFavoriteDto['name'];
  //   const email = updateFavoriteDto['email'];
  //   const password = updateFavoriteDto['password']
    
  //   const updatedUser = ({"text": text,});
  //   return this.favoriteRepositary.update({ id }, { ...updatedUser});
  // }

}
