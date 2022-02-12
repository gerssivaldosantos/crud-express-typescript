export type UserRequest = {
    name: string;
    email: string;
    password: string;
    user_type_id: string;
}

export type UserUpdateRequest = {
    id: string;
    name: string;
    email: string;
    password: string;
    user_type_id: string;
}