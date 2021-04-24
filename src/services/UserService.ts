import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";


class UserService {

    private userRepository: Repository<User>;

    constructor(){
        this.userRepository = getCustomRepository(UserRepository);
    }

    async create({email}) {

        const userExits = await this.userRepository.findOne({email});

        if(userExits){
            return userExits;
        }

        const user = this.userRepository.create({
            email,
        });

        await this.userRepository.save(user);

        return user;
   
    }

    async findByEmail({ email }) {
        const user = await this.userRepository.findOne({ email });
        return user;
      }
}

export { UserService };