import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';

@Controller('users')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
   async create(@Body() createTestDto: CreateTestDto):Promise<any> {
    return await this.testService.create(createTestDto);
  }

  @Get()
 async findAll():Promise<any> {
    return await this.testService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string):Promise<any> {
    return await this.testService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTestDto: UpdateTestDto):Promise<any> {
    return await this.testService.update(+id, updateTestDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string):Promise<any> {
    return await this.testService.remove(+id);
  }
}
