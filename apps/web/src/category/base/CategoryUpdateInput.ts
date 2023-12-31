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
import { EventUpdateManyWithoutCategoriesInput } from "./EventUpdateManyWithoutCategoriesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { PlaceUpdateManyWithoutCategoriesInput } from "./PlaceUpdateManyWithoutCategoriesInput";

@InputType()
class CategoryUpdateInput {
  @ApiProperty({
    required: false,
    type: () => EventUpdateManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => EventUpdateManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => EventUpdateManyWithoutCategoriesInput, {
    nullable: true,
  })
  events?: EventUpdateManyWithoutCategoriesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  icon?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => PlaceUpdateManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => PlaceUpdateManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => PlaceUpdateManyWithoutCategoriesInput, {
    nullable: true,
  })
  places?: PlaceUpdateManyWithoutCategoriesInput;
}

export { CategoryUpdateInput as CategoryUpdateInput };
