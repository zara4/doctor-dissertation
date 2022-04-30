import { UserData } from "../interface/userinterface";
import { Role } from "../Schema/role";
import { Field, Int, InputType } from "type-graphql";

@InputType()
export class userInput implements UserData{
    @Field(() => Int)
    id: number

    @Field(() => String,{nullable:true})
    name?: string
    
    @Field(() => String,{nullable:true})
    password?: string | null
    
    @Field(() => String,{nullable:true})
    email?: string | null

    @Field(() => String,{nullable:true})
    version?: string | null

    @Field(() => Role)
    role:  Role;
}