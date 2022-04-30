import { CommentData } from "src/interface/commentinterface";
import { InputType, Field, Int, } from "type-graphql";

@InputType()
export class CommentInput implements CommentData{
    @Field(() => Int)
    id: number 

    @Field(() => String)
    original: string
    
    @Field(() => String)
    revised: string  

    @Field(() => String)
    reason: string 

    @Field(() => String)
    Reviewerid: string  

    @Field(() => String)
    comment: string  

    @Field(()=> Int)
    authorfileId: number
}