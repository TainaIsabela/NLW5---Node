import { User } from "../entities/User";
import { Entity, EntityRepository, Repository } from "typeorm";


@EntityRepository(User)
class UserRepository extends Repository<User>{

}
export { UserRepository }