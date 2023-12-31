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
import { UserListRelationFilter } from "../../user/base/UserListRelationFilter";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvitationListRelationFilter } from "../../invitation/base/InvitationListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { PlaceWhereUniqueInput } from "../../place/base/PlaceWhereUniqueInput";
import { EnumEventVisibility } from "./EnumEventVisibility";

@InputType()
class EventWhereInput {
  @ApiProperty({
    required: false,
    type: () => UserListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserListRelationFilter)
  @IsOptional()
  @Field(() => UserListRelationFilter, {
    nullable: true,
  })
  attendees?: UserListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => CategoryWhereUniqueInput, {
    nullable: true,
  })
  category?: CategoryWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  date?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => InvitationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InvitationListRelationFilter)
  @IsOptional()
  @Field(() => InvitationListRelationFilter, {
    nullable: true,
  })
  invitations?: InvitationListRelationFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  limit?: IntFilter;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  owner?: UserWhereUniqueInput;

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
  place?: PlaceWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  title?: StringFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    enum: EnumEventVisibility,
  })
  @IsEnum(EnumEventVisibility)
  @IsOptional()
  @Field(() => EnumEventVisibility, {
    nullable: true,
  })
  visibility?: "public" | "friends" | "unlisted";
}

export { EventWhereInput as EventWhereInput };
