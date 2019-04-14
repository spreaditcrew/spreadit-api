import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const bootstrapSwagger = application => {
  const options = new DocumentBuilder()
    .setTitle('SpreadIT')
    .setDescription('The SpreadIT application API')
    .setVersion('1.0')
    .addTag('SpreadIT')
    .build();
  const document = SwaggerModule.createDocument(application, options);
  SwaggerModule.setup('api', application, document);
};
