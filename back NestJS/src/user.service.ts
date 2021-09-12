import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './update-user.dto';

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(User) private readonly userRepositary: Repository<User>
  ) {

  }

  async create(data: any): Promise<User> {
    return this.userRepositary.save(data);
  }


  async findOne(condition: any): Promise<User> {
    return this.userRepositary.findOne(condition);
  }

  async showOne(id): Promise<User> {
    return this.userRepositary.findOne({id});
  }

  async findAll() {
    return this.userRepositary.find();
  }

  async remove(id) {
    return this.userRepositary.delete({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const admin = updateUserDto['admin'];
    const name = updateUserDto['name'];
    const email = updateUserDto['email'];
    const password = updateUserDto['password']
    const hash = await bcrypt.hash(password, 12);
    const updatedUser = ({"admin": admin, "name": name, "email": email, "password": hash});
    return this.userRepositary.update({ id }, { ...updatedUser});
  }

}
