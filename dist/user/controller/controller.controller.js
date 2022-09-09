"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const route_params_decorator_1 = require("@nestjs/common/decorators/http/route-params.decorator");
const user_service_1 = require("../service/user/user.service");
const user_dto_1 = require("../dto/user.dto");
const bcrypt = require("bcrypt");
let UserController = class UserController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async create(user) {
        const users = await this.usersService.findOne(user.name);
        console.log(users.length);
        const saltOrRounds = 10;
        if (users.length == 0) {
            const hash = await bcrypt.hash(user.password, saltOrRounds);
            user.password = hash;
            console.log(user.password);
            return this.usersService.create(user);
        }
        else {
            console.log(user);
            console.log("User Exists");
        }
    }
    async findAll() {
        return this.usersService.findAll();
    }
    async findOne(name) {
        return this.usersService.findOne(name);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, route_params_decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, route_params_decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=controller.controller.js.map