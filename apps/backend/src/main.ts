import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { Logger } from "@nestjs/common";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle("Data validation Suite").build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, documentFactory);

  const port = process.env.PORT ?? 3001;
  app.enableCors();
  await app.listen(port);

  console.log(`📱 App is running on: http://localhost:${port}`);
  console.log(`📖 Api documentation on: http://localhost:${port}/api`);

  try {
    await execAsync("pnpm run gen:api-client");
  } catch (error) {
    Logger.error(`Client generation failed ${error}`);
  }
}
bootstrap();
