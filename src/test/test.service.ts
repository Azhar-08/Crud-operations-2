import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
 async create(createTestDto: CreateTestDto): Promise<any> {
    return await this.userRepository.save(createTestDto) ;
  }

 async findAll():Promise<any> {
   return await this.userRepository.find();
  }

  async findOne(id: number):Promise<any> {
    return await this.userRepository.findOne({where: {id}});
  }

   async update(id: number, updateTestDto: UpdateTestDto):Promise<any> {
     await this.userRepository.update(id, updateTestDto );
     return await this.userRepository.findOne({where: {id}});
  }

 async remove(id: number):Promise<any> {
     await this.userRepository.delete(id);
  }
}
