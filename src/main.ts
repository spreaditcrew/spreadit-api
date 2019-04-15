import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { bootstrapSwagger } from './swagger/bootstrap_swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  bootstrapSwagger(app);

  await app.listen(3000);
}
bootstrap();
