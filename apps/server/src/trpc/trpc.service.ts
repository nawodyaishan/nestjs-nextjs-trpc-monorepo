// Importing necessary modules and dependencies
import { Injectable } from '@nestjs/common'; // Importing the Injectable decorator from NestJS common utilities.
import { initTRPC } from '@trpc/server'; // Importing the initTRPC function from the tRPC server package.

// Making the class injectable so that it can be used with NestJS's dependency injection system.
@Injectable()
export class TrpcService {
  // Initializing tRPC and creating an instance.
  trpc = initTRPC.create();

  // Creating a shortcut to the procedure method of the tRPC instance.
  procedure = this.trpc.procedure;

  // Creating a shortcut to the router method of the tRPC instance.
  router = this.trpc.router;

  // Creating a shortcut to the mergeRouters method of the tRPC instance.
  mergeRouters = this.trpc.mergeRouters;
}
