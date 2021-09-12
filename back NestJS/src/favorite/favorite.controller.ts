import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';

@Controller('favorites')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post()
  create(@Body() createFavoriteDto: CreateFavoriteDto) {
    return this.favoriteService.create(createFavoriteDto);
  }

  @Get()
  findAll() {
    return this.favoriteService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.favoriteService.findOne(+id);
  // }
  @Get(':user_id')
  async find(@Param('user_id') user_id: string) {
    let result = await this.favoriteService.find(user_id);
    let counter = 0;
    for (let i = 0; i < result.length; i++) {
     
    if (result[i].user_id === user_id) counter++;
}
    return [counter,
      result]
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateFavoriteDto: UpdateFavoriteDto) {
  //   return this.favoriteService.update(+id, updateFavoriteDto);
  // }

  @Delete(':movie_id')
  remove(@Param('movie_id') movie_id: string) {
    return this.favoriteService.remove(movie_id);
  }
}
