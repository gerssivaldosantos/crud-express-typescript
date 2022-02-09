
export type UserTypeRequest = {
    name: string;
    description: string;
}

export type UserTypeUpdateRequest = {
    id: string;
    name: string;
    description: string;
}

export type UserRequest = {
    name: string;
    email: string;
    password: string;
    type: string;
}