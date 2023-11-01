// Importing necessary modules and dependencies
import { NestFactory } from "@nestjs/core"; // Importing the NestFactory from NestJS core, which is used to create a Nest application instance.
import { AppModule } from "./app.module"; // Importing the main application module.
import * as process from "process"; // Importing the process module to access environment variables.
import { TrpcRouter } from "@server/trpc/trpc.router"; // Importing the TrpcRouter for tRPC (a tool for building type-safe APIs).

// The main bootstrap function to initialize and start the NestJS application.
async function bootstrap() {
  // Creating a new Nest application instance with the AppModule.
  const app = await NestFactory.create(AppModule);

  // Enabling Cross-Origin Resource Sharing (CORS) for the application.
  app.enableCors();

  // Retrieving an instance of the TrpcRouter from the application's dependency injection container.
  const trpcRouter = app.get(TrpcRouter);

  // Applying the middleware for the tRPC router to the Nest application.
  await trpcRouter.applyMiddleware(app);

  // Starting the Nest application and listening on the specified port (from environment variable or default to 4000).
  await app.listen(process.env.PORT || 4000);
}

// Calling the bootstrap function to start the application.
// Once the bootstrap function completes, it logs a message to the console.
bootstrap().then((_r) => {
  console.log('Nest Bootstrap Function');
});
