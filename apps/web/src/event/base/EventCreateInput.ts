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
import { UserCreateNestedManyWithoutEventsInput } from "./UserCreateNestedManyWithoutEventsInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsInt,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
import { InvitationCreateNestedManyWithoutEventsInput } from "./InvitationCreateNestedManyWithoutEventsInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { PlaceWhereUniqueInput } from "../../place/base/PlaceWhereUniqueInput";
import { EnumEventVisibility } from "./EnumEventVisibility";

@InputType()
class EventCreateInput {
  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutEventsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutEventsInput, {
    nullable: true,
  })
  attendees?: UserCreateNestedManyWithoutEventsInput;

  @ApiProperty({
    required: true,
    type: () => CategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategoryWhereUniqueInput)
  @Field(() => CategoryWhereUniqueInput)
  category!: CategoryWhereUniqueInput;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  date!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => InvitationCreateNestedManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => InvitationCreateNestedManyWithoutEventsInput)
  @IsOptional()
  @Field(() => InvitationCreateNestedManyWithoutEventsInput, {
    nullable: true,
  })
  invitations?: InvitationCreateNestedManyWithoutEventsInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  limit!: number;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  owner!: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PlaceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PlaceWhereUniqueInput)
  @IsOptional()
  @Field(() => PlaceWhereUniqueInput, {
    nullable: true,
  })
  place?: PlaceWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;

  @ApiProperty({
    required: true,
    enum: EnumEventVisibility,
  })
  @IsEnum(EnumEventVisibility)
  @Field(() => EnumEventVisibility)
  visibility!: "public" | "friends" | "unlisted";
}

export { EventCreateInput as EventCreateInput };
