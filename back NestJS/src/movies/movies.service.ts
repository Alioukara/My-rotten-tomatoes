import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

import { map } from 'rxjs/operators';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class MoviesService {
  constructor(private httpService: HttpService) {}

  create(createMovieDto: CreateMovieDto) {
    return 'This action adds a new movie';
  }

  findAll(page) {
    
    return this.httpService
      .get(
        
        'https://api.themoviedb.org/3/movie/popular?api_key=a515f43d910a4f833a9f4d101312ae92&language=en-FR&page='+page,
      )
      .pipe(map((response) => response.data));
  }

  findOne(id: number) {
    return this.httpService
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=a515f43d910a4f833a9f4d101312ae92&language=en-US`,
      )
      .pipe(map((response) => response.data));
  }

  findGenre() {
    return this.httpService
      .get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=a515f43d910a4f833a9f4d101312ae92&language=en-US',
      )
      .pipe(map((response) => response.data));
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
