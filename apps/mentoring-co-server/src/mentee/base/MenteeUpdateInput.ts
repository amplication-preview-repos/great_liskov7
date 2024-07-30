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
import {
  IsInt,
  Min,
  Max,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { SessionUpdateManyWithoutMenteesInput } from "./SessionUpdateManyWithoutMenteesInput";
import { Type } from "class-transformer";

@InputType()
class MenteeUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  age?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  preferences?: string | null;

  @ApiProperty({
    required: false,
    type: () => SessionUpdateManyWithoutMenteesInput,
  })
  @ValidateNested()
  @Type(() => SessionUpdateManyWithoutMenteesInput)
  @IsOptional()
  @Field(() => SessionUpdateManyWithoutMenteesInput, {
    nullable: true,
  })
  sessions?: SessionUpdateManyWithoutMenteesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  skills?: string | null;
}

export { MenteeUpdateInput as MenteeUpdateInput };
