import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as process from "process";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT || 4000);
}

bootstrap().then(_r => ("Nest Bootstrap Function"));
