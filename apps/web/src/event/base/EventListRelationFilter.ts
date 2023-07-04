/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EventWhereInput } from "./EventWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EventListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EventWhereInput,
  })
  @ValidateNested()
  @Type(() => EventWhereInput)
  @IsOptional()
  @Field(() => EventWhereInput, {
    nullable: true,
  })
  every?: EventWhereInput;

  @ApiProperty({
    required: false,
    type: () => EventWhereInput,
  })
  @ValidateNested()
  @Type(() => EventWhereInput)
  @IsOptional()
  @Field(() => EventWhereInput, {
    nullable: true,
  })
  some?: EventWhereInput;

  @ApiProperty({
    required: false,
    type: () => EventWhereInput,
  })
  @ValidateNested()
  @Type(() => EventWhereInput)
  @IsOptional()
  @Field(() => EventWhereInput, {
    nullable: true,
  })
  none?: EventWhereInput;
}
export { EventListRelationFilter as EventListRelationFilter };
