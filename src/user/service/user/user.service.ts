import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/user/dto/user.dto';
import { Repository } from 'typeorm';
//import { UserEntity } from 'src/user/entity/user.entity';
import { UserEntity } from '../../entity/user.entity'; 

export type User = any; 

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UserEntity)
		private userRepository: Repository<UserEntity>
	){}
	
	
	create(user: UserDto): Promise<UserDto> {
	return this.userRepository.save(user);
	}
	
	findAll(): Promise<UserDto[]> {
	return this.userRepository.find();
	}

	private readonly users = [
		{
		  id: 1,
		  name: 'john',
		  lastName: 'doe',
		  password: 'changeme',
		},
		{
		  id: 2,
		  name: 'maria',
		  lastName: 'boe',
		  password: 'guess',
		},
	  ];

	async findOne(name: string): Promise<User | undefined> {
		return this.userRepository.find({where:{name}});
	}
}
