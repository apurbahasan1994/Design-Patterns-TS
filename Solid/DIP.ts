// High level modules should not import anything from
// low level modules. Both should depend on abstractons(eg. Interfaces).

// Abstractions should not depend on details. Details(Concrete
// implementations) should not depend on abstractions.

/*


Controller ----> Service ----> Repository ----> DB


Service: Business Logic (High Level)

Repository : Low Level

Controller ------> Iterface <------ Service -----> Interface <------ Repository -----? DB


*/

interface IUserService {
    save(): void;
}

interface IUserRepository {
    save(): void;
}

class UserController {
    constructor(private readonly userService: IUserService) { }
    save() {
        console.log('save user');
        this.userService.save();
    }
}

class UserService implements IUserService {
    constructor(private readonly userRepository: IUserRepository) { }
    save() {
        this.userRepository.save();
    }
}

class UserRepository implements IUserRepository {
    save() {
        console.log('save user inn db');
    }
}


const userController = new UserController(new UserService(new UserRepository()));
userController.save();