import { Role } from "src/Schema/role"

export class UserData{
    id: number
    name?: string |null
    email?: string | null
    password?: string | null
    version?: string | null
    summary?: string | null
    role: Role;
}