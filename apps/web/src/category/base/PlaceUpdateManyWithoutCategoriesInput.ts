/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PlaceWhereUniqueInput } from "../../place/base/PlaceWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PlaceUpdateManyWithoutCategoriesInput {
  @Field(() => [PlaceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlaceWhereUniqueInput],
  })
  connect?: Array<PlaceWhereUniqueInput>;

  @Field(() => [PlaceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlaceWhereUniqueInput],
  })
  disconnect?: Array<PlaceWhereUniqueInput>;

  @Field(() => [PlaceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlaceWhereUniqueInput],
  })
  set?: Array<PlaceWhereUniqueInput>;
}

export { PlaceUpdateManyWithoutCategoriesInput as PlaceUpdateManyWithoutCategoriesInput };
