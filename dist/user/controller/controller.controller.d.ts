import { UserService } from '../service/user/user.service';
import { UserDto } from '../dto/user.dto';
export declare class UserController {
    private usersService;
    constructor(usersService: UserService);
    create(user: UserDto): Promise<UserDto>;
    findAll(): Promise<UserDto[]>;
    findOne(name: string): Promise<UserDto>;
}
