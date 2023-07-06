import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PositionService } from "./position.service";
import { PositionControllerBase } from "./base/position.controller.base";
import { config } from "dotenv";
import { PositionListRelationFilter } from "./base/PositionListRelationFilter";
const { Pool } = require('pg')

@swagger.ApiTags("positions")
@common.Controller("positions")
export class PositionController extends PositionControllerBase {
  constructor(
    protected readonly service: PositionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

class PostgresTargetInsert {
  postgresPool: any;
  async init() {
    require('dotenv').config();
      const postgresPool = new Pool({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_URL,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,        
      })
      // TODO: Create your postgres credential
      // More info at https://yepcode.io/docs/integrations/postgres/#credential-configuration
      this.postgresPool = yepcode.integration.postgres(
          "your-postgres-credential-name"
      );
  }

  async consume(item) {
      // TODO: Customize the SQL INSERT statement and map your item to row
      await this.postgresPool.query(
          "INSERT INTO Position(coordinates) VALUES($1, $2)",
          [item.id, item.name]
      );
  }

  async close() {
      await this.postgresPool.end();
  }
}
