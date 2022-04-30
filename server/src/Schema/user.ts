import { ObjectType, Field, Int } from "type-graphql";
import { Files } from "./files";
import { Role } from "./role";

@ObjectType()
export class User{
    @Field(() => Int)
    id: number

    @Field(() => String,{nullable:true})
    name?: string
    
    @Field(() => String,{nullable:true})
    email?: string | null

    @Field(() => String,{nullable:true})
    version?: string | null

    @Field(() => String,{nullable:true})
    password?: string | null

    @Field(() => [Files],{nullable: true})
    files:    Files[] | null;

    @Field(() => Role)
    role: Role;
}