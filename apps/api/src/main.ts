import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module";
import {
  loadEnvironment,
  validateEnvironment,
} from "./config/environment";

async function bootstrap(): Promise<void> {
  loadEnvironment();

  const config = validateEnvironment();

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(config.apiPrefix);

  app.enableCors({
    origin: config.corsOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  await app.listen(config.port, "0.0.0.0");

  console.log("--------------------------------------");
  console.log("Builder-ERP API started successfully");
  console.log(`Environment: ${config.nodeEnv}`);
  console.log(`Port: ${config.port}`);
  console.log(`API Prefix: /${config.apiPrefix}`);
  console.log(`Default Locale: ${config.defaultLocale}`);
  console.log(`Currency: ${config.defaultCurrency}`);
  console.log(`Health: http://localhost:${config.port}/${config.apiPrefix}/health`);
  console.log("--------------------------------------");
}

bootstrap().catch((error: unknown) => {
  console.error("Builder-ERP API startup failed:", error);
  process.exitCode = 1;
});
