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
import { EventCreateNestedManyWithoutUsersInput } from "./EventCreateNestedManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { InvitationCreateNestedManyWithoutUsersInput } from "./InvitationCreateNestedManyWithoutUsersInput";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { TripCreateNestedManyWithoutUsersInput } from "./TripCreateNestedManyWithoutUsersInput";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => EventCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EventCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EventCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  attendedEvents?: EventCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  avatar?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: false,
    type: () => EventCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EventCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EventCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  ownedEvents?: EventCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
    type: () => InvitationCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => InvitationCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => InvitationCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  receivedInvitations?: InvitationCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => InvitationCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => InvitationCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => InvitationCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  sentInvitations?: InvitationCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => TripCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => TripCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => TripCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  trips?: TripCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}

export { UserCreateInput as UserCreateInput };