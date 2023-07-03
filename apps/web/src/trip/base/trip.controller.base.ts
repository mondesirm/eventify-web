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
import { TripService } from "../trip.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TripCreateInput } from "./TripCreateInput";
import { TripWhereInput } from "./TripWhereInput";
import { TripWhereUniqueInput } from "./TripWhereUniqueInput";
import { TripFindManyArgs } from "./TripFindManyArgs";
import { TripUpdateInput } from "./TripUpdateInput";
import { Trip } from "./Trip";
import { PositionFindManyArgs } from "../../position/base/PositionFindManyArgs";
import { Position } from "../../position/base/Position";
import { PositionWhereUniqueInput } from "../../position/base/PositionWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TripControllerBase {
  constructor(
    protected readonly service: TripService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Trip })
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: TripCreateInput): Promise<Trip> {
    return await this.service.create({
      data: {
        ...data,

        user: {
          connect: data.user,
        },
      },
      select: {
        createdAt: true,
        day: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Trip] })
  @ApiNestedQuery(TripFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Trip[]> {
    const args = plainToClass(TripFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        day: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Trip })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: TripWhereUniqueInput
  ): Promise<Trip | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        day: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: Trip })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: TripWhereUniqueInput,
    @common.Body() data: TripUpdateInput
  ): Promise<Trip | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          user: {
            connect: data.user,
          },
        },
        select: {
          createdAt: true,
          day: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: Trip })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: TripWhereUniqueInput
  ): Promise<Trip | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          day: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/positions")
  @ApiNestedQuery(PositionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Position",
    action: "read",
    possession: "any",
  })
  async findManyPositions(
    @common.Req() request: Request,
    @common.Param() params: TripWhereUniqueInput
  ): Promise<Position[]> {
    const query = plainToClass(PositionFindManyArgs, request.query);
    const results = await this.service.findPositions(params.id, {
      ...query,
      select: {
        coordinates: true,
        createdAt: true,
        id: true,

        trip: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/positions")
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "update",
    possession: "any",
  })
  async connectPositions(
    @common.Param() params: TripWhereUniqueInput,
    @common.Body() body: PositionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      positions: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/positions")
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "update",
    possession: "any",
  })
  async updatePositions(
    @common.Param() params: TripWhereUniqueInput,
    @common.Body() body: PositionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      positions: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/positions")
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "update",
    possession: "any",
  })
  async disconnectPositions(
    @common.Param() params: TripWhereUniqueInput,
    @common.Body() body: PositionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      positions: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}