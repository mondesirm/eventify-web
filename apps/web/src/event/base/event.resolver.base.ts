/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateEventArgs } from "./CreateEventArgs";
import { UpdateEventArgs } from "./UpdateEventArgs";
import { DeleteEventArgs } from "./DeleteEventArgs";
import { EventCountArgs } from "./EventCountArgs";
import { EventFindManyArgs } from "./EventFindManyArgs";
import { EventFindUniqueArgs } from "./EventFindUniqueArgs";
import { Event } from "./Event";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { InvitationFindManyArgs } from "../../invitation/base/InvitationFindManyArgs";
import { Invitation } from "../../invitation/base/Invitation";
import { Category } from "../../category/base/Category";
import { Place } from "../../place/base/Place";
import { EventService } from "../event.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Event)
export class EventResolverBase {
  constructor(
    protected readonly service: EventService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "read",
    possession: "any",
  })
  async _eventsMeta(
    @graphql.Args() args: EventCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Event])
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "read",
    possession: "any",
  })
  async events(@graphql.Args() args: EventFindManyArgs): Promise<Event[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Event, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "read",
    possession: "own",
  })
  async event(
    @graphql.Args() args: EventFindUniqueArgs
  ): Promise<Event | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Event)
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "create",
    possession: "any",
  })
  async createEvent(@graphql.Args() args: CreateEventArgs): Promise<Event> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        category: {
          connect: args.data.category,
        },

        owner: {
          connect: args.data.owner,
        },

        place: args.data.place
          ? {
              connect: args.data.place,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Event)
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "update",
    possession: "any",
  })
  async updateEvent(
    @graphql.Args() args: UpdateEventArgs
  ): Promise<Event | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          category: {
            connect: args.data.category,
          },

          owner: {
            connect: args.data.owner,
          },

          place: args.data.place
            ? {
                connect: args.data.place,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Event)
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "delete",
    possession: "any",
  })
  async deleteEvent(
    @graphql.Args() args: DeleteEventArgs
  ): Promise<Event | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [User], { name: "attendees" })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async resolveFieldAttendees(
    @graphql.Parent() parent: Event,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findAttendees(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Invitation], { name: "invitations" })
  @nestAccessControl.UseRoles({
    resource: "Invitation",
    action: "read",
    possession: "any",
  })
  async resolveFieldInvitations(
    @graphql.Parent() parent: Event,
    @graphql.Args() args: InvitationFindManyArgs
  ): Promise<Invitation[]> {
    const results = await this.service.findInvitations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Category, {
    nullable: true,
    name: "category",
  })
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "any",
  })
  async resolveFieldCategory(
    @graphql.Parent() parent: Event
  ): Promise<Category | null> {
    const result = await this.service.getCategory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "owner",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async resolveFieldOwner(
    @graphql.Parent() parent: Event
  ): Promise<User | null> {
    const result = await this.service.getOwner(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Place, {
    nullable: true,
    name: "place",
  })
  @nestAccessControl.UseRoles({
    resource: "Place",
    action: "read",
    possession: "any",
  })
  async resolveFieldPlace(
    @graphql.Parent() parent: Event
  ): Promise<Place | null> {
    const result = await this.service.getPlace(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
