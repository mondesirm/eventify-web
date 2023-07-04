/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Invitation, Event, User } from "@prisma/client";

export class InvitationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.InvitationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvitationCountArgs>
  ): Promise<number> {
    return this.prisma.invitation.count(args);
  }

  async findMany<T extends Prisma.InvitationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvitationFindManyArgs>
  ): Promise<Invitation[]> {
    return this.prisma.invitation.findMany(args);
  }
  async findOne<T extends Prisma.InvitationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvitationFindUniqueArgs>
  ): Promise<Invitation | null> {
    return this.prisma.invitation.findUnique(args);
  }
  async create<T extends Prisma.InvitationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvitationCreateArgs>
  ): Promise<Invitation> {
    return this.prisma.invitation.create<T>(args);
  }
  async update<T extends Prisma.InvitationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvitationUpdateArgs>
  ): Promise<Invitation> {
    return this.prisma.invitation.update<T>(args);
  }
  async delete<T extends Prisma.InvitationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvitationDeleteArgs>
  ): Promise<Invitation> {
    return this.prisma.invitation.delete(args);
  }

  async getEvent(parentId: string): Promise<Event | null> {
    return this.prisma.invitation
      .findUnique({
        where: { id: parentId },
      })
      .event();
  }

  async getRecipient(parentId: string): Promise<User | null> {
    return this.prisma.invitation
      .findUnique({
        where: { id: parentId },
      })
      .recipient();
  }

  async getSender(parentId: string): Promise<User | null> {
    return this.prisma.invitation
      .findUnique({
        where: { id: parentId },
      })
      .sender();
  }
}
