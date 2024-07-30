/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Mentee } from "./Mentee";
import { MenteeCountArgs } from "./MenteeCountArgs";
import { MenteeFindManyArgs } from "./MenteeFindManyArgs";
import { MenteeFindUniqueArgs } from "./MenteeFindUniqueArgs";
import { CreateMenteeArgs } from "./CreateMenteeArgs";
import { UpdateMenteeArgs } from "./UpdateMenteeArgs";
import { DeleteMenteeArgs } from "./DeleteMenteeArgs";
import { SessionFindManyArgs } from "../../session/base/SessionFindManyArgs";
import { Session } from "../../session/base/Session";
import { MenteeService } from "../mentee.service";
@graphql.Resolver(() => Mentee)
export class MenteeResolverBase {
  constructor(protected readonly service: MenteeService) {}

  async _menteesMeta(
    @graphql.Args() args: MenteeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Mentee])
  async mentees(@graphql.Args() args: MenteeFindManyArgs): Promise<Mentee[]> {
    return this.service.mentees(args);
  }

  @graphql.Query(() => Mentee, { nullable: true })
  async mentee(
    @graphql.Args() args: MenteeFindUniqueArgs
  ): Promise<Mentee | null> {
    const result = await this.service.mentee(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Mentee)
  async createMentee(@graphql.Args() args: CreateMenteeArgs): Promise<Mentee> {
    return await this.service.createMentee({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Mentee)
  async updateMentee(
    @graphql.Args() args: UpdateMenteeArgs
  ): Promise<Mentee | null> {
    try {
      return await this.service.updateMentee({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Mentee)
  async deleteMentee(
    @graphql.Args() args: DeleteMenteeArgs
  ): Promise<Mentee | null> {
    try {
      return await this.service.deleteMentee(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Session], { name: "sessions" })
  async findSessions(
    @graphql.Parent() parent: Mentee,
    @graphql.Args() args: SessionFindManyArgs
  ): Promise<Session[]> {
    const results = await this.service.findSessions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}