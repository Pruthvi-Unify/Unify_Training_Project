import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { UserService } from '../service/user/user.service';
import { UserDto } from '../dto/user.dto';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {
	constructor(private usersService: UserService){}

	@Post()
	async create(@Body() user:UserDto): Promise<UserDto>{
		const users= await this.usersService.findOne(user.name);
        console.log(users.length)
		const saltOrRounds = 10;

        if(users.length == 0)
        {
			const hash = await bcrypt.hash(user.password, saltOrRounds);
			user.password = hash;
			console.log(user.password)
            return this.usersService.create(user);
        }
        else{
			console.log(user)
            console.log("User Exists");
        }
	}
	
	@Get()
	async findAll(): Promise<UserDto[]> {
	return this.usersService.findAll();
	}

	@Get()
	async findOne(@Body() name: string): Promise<UserDto> {
	return this.usersService.findOne(name);
	}

}
