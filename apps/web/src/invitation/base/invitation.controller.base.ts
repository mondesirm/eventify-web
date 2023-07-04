/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { InvitationService } from "../invitation.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { InvitationCreateInput } from "./InvitationCreateInput";
import { InvitationWhereInput } from "./InvitationWhereInput";
import { InvitationWhereUniqueInput } from "./InvitationWhereUniqueInput";
import { InvitationFindManyArgs } from "./InvitationFindManyArgs";
import { InvitationUpdateInput } from "./InvitationUpdateInput";
import { Invitation } from "./Invitation";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class InvitationControllerBase {
  constructor(
    protected readonly service: InvitationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Invitation })
  @nestAccessControl.UseRoles({
    resource: "Invitation",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: InvitationCreateInput
  ): Promise<Invitation> {
    return await this.service.create({
      data: {
        ...data,

        event: data.event
          ? {
              connect: data.event,
            }
          : undefined,

        recipient: {
          connect: data.recipient,
        },

        sender: {
          connect: data.sender,
        },
      },
      select: {
        createdAt: true,

        event: {
          select: {
            id: true,
          },
        },

        id: true,
        kind: true,

        recipient: {
          select: {
            id: true,
          },
        },

        sender: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Invitation] })
  @ApiNestedQuery(InvitationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Invitation",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Invitation[]> {
    const args = plainToClass(InvitationFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,

        event: {
          select: {
            id: true,
          },
        },

        id: true,
        kind: true,

        recipient: {
          select: {
            id: true,
          },
        },

        sender: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Invitation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Invitation",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: InvitationWhereUniqueInput
  ): Promise<Invitation | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,

        event: {
          select: {
            id: true,
          },
        },

        id: true,
        kind: true,

        recipient: {
          select: {
            id: true,
          },
        },

        sender: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Invitation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Invitation",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: InvitationWhereUniqueInput,
    @common.Body() data: InvitationUpdateInput
  ): Promise<Invitation | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          event: data.event
            ? {
                connect: data.event,
              }
            : undefined,

          recipient: {
            connect: data.recipient,
          },

          sender: {
            connect: data.sender,
          },
        },
        select: {
          createdAt: true,

          event: {
            select: {
              id: true,
            },
          },

          id: true,
          kind: true,

          recipient: {
            select: {
              id: true,
            },
          },

          sender: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Invitation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Invitation",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: InvitationWhereUniqueInput
  ): Promise<Invitation | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,

          event: {
            select: {
              id: true,
            },
          },

          id: true,
          kind: true,

          recipient: {
            select: {
              id: true,
            },
          },

          sender: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
