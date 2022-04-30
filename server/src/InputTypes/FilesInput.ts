import { FilesData } from "src/interface/filesinterface";
import { InputType, Field, Int } from "type-graphql";

@InputType()
export class FilesInput implements FilesData{
    @Field(() => Int)
    id: number

    @Field(() => String) 
    title: string

    @Field(()=> String)
    location: string

    @Field(()=> String)
    size: string

    @Field(()=> Int)
    authorId: number
}