import { Controller, Get } from "@nestjs/common";
import { HealthCheck, HealthCheckService, HttpHealthIndicator, TypeOrmHealthIndicator } from "@nestjs/terminus";

@Controller('health')
export class HealthCheckController {
    constructor(
        private healthCheckService: HealthCheckService,
        private http: HttpHealthIndicator,
        private db: TypeOrmHealthIndicator,
    ){}

    @Get()
    @HealthCheck()
    checkHealth() {
        return this.healthCheckService.check([
            () => this.http.pingCheck('Basic Check', 'http://localhost:3000'),
            () => this.db.pingCheck('library')
        ]);
    }
}