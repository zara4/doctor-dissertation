import { ObjectType, Field, Int } from "type-graphql";
import { Comment } from "./comment";
import { User } from "./user";

@ObjectType()
export class Files {
    @Field(() => Int)
    id: number

    @Field(() => String)
    title?: string  

    @Field(()=> String)
    location?: string

    @Field(() => User)
    author: User;

    @Field(()=> Int)
    authorId:number
    
    @Field(()=> String)
    size?: string

    @Field(() => [Comment],{nullable: true})
    comment:    Comment[] | null;
}