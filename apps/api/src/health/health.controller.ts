import { Controller, Get } from "@nestjs/common";

@Controller("health")
export class HealthController {
  @Get()
  check() {
    return {
      status: "ok",
      service: "builder-erp-api",
      version: "1.0.0",
      timestamp: new Date().toISOString(),
    };
  }
}
