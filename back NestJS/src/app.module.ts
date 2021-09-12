import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { UserService } from './user.service';
import { User } from './user.entity';
import { JwtModule } from '@nestjs/jwt';
import { MoviesModule } from './movies/movies.module';
import { HttpModule } from '@nestjs/axios';
import { CommentModule } from './comment/comment.module';
import { CommentService } from './comment/comment.service';
import { Comment } from './comment/entities/comment.entity';
import { FavoriteModule } from './favorite/favorite.module';
import { Favorite } from './favorite/entities/favorite.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'ali',
      password: 'ali',
      database: 'tomatoes',
      entities: [User, Comment, Favorite],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Comment, Favorite ]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    HttpModule,
    MoviesModule,
    CommentModule,
    FavoriteModule,
  
  ],

  controllers: [AppController],
  providers: [UserService, CommentService],
})
export class AppModule {}
