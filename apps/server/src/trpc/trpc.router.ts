// Importing necessary modules and dependencies
import { INestApplication, Injectable } from '@nestjs/common'; // Importing NestJS common utilities.
import { TrpcService } from '@server/trpc/trpc.service'; // Importing the tRPC service.
import { z } from 'zod'; // Importing zod for schema validation.
import * as trpcExpress from '@trpc/server/adapters/express'; // Importing the tRPC adapter for Express.

// Making the class injectable so that it can be used with NestJS's dependency injection system.
@Injectable()
export class TrpcRouter {
  // Defining the tRPC router and its procedures.
  appRouter = this.trpc.router({
    hello: this.trpc.procedure
      // Defining the input schema for the procedure using zod.
      .input(
        z.object({
          name: z.string().min(6).optional(), // The input is an object with an optional string 'name' with a minimum length of 6.
        }),
      )
      // Defining the query handler for the procedure.
      .query(({ input }) => {
        // Returning a string based on the input name. If name is not provided, it defaults to 'Unknown'.
        return `Your Input is ${input.name ?? 'Unknown'}`;
      }),
  });

  // Constructor injection of the TrpcService.
  constructor(private readonly trpc: TrpcService) {}

  // Method to apply the tRPC middleware to the NestJS application.
  async applyMiddleware(app: INestApplication) {
    // Using the Express middleware for tRPC and attaching it to the '/trpc' endpoint.
    app.use(
      '/trpc',
      trpcExpress.createExpressMiddleware({ router: this.appRouter }),
    );
  }
}

// Exporting the type of the appRouter for external usage.
export type AppRouter = TrpcRouter['appRouter'];
