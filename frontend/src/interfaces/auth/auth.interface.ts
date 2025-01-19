export interface authInterface{
    _id: string;
    email: string;
    role: UserRole;
}

export enum UserRole{
    ADMIN = 'admin',
    USER = 'user',
    SUPER_ADMIN = 'super_admin'
}

export interface AuthState {
    user: authInterface | null;
}