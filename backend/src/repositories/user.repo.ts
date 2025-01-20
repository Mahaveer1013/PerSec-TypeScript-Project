import { Service } from "typedi";
import { IUser } from "../api/interfaces/user.interface";
import UserModel from "../models/user.model";

@Service()
export class UserRepo {

    async createUser(data: Partial<IUser>) {
        return UserModel.create({
            email: data.email,
            password: data.password,
            verified: false,
            
        });
    }

    async findById(id: string) {
        return UserModel.findById(id);
    }

    async findByEmail(email: string) {
        return UserModel.findOne({ email });
    }

    async verifyUserOTP(otp: number, email: string) {
    }

    async findUser(data: Map<string, any>) {
        try {
            const user = await UserModel.find(data);
            return user;
        } catch (error: any) {
            throw error;
        }
    };

}