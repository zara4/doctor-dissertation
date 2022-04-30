import { ObjectType, Field, Int } from "type-graphql";
import { Files} from "./files";

@ObjectType()
export class Comment {
    @Field(() => Int)
    id: number

    @Field(() => String)
    original: string    

    @Field(() => String,{nullable:true})
    revised: string

    @Field(() => String,{nullable:true})
    reason: string

    @Field(() => String,{nullable:true})
    comment: string

    @Field(() => String,{nullable:true})
    Reviewerid: string
   
    @Field(() => Files)
    authorfile: Files;
 
    @Field(()=> Int)
    authorfileId: number
}