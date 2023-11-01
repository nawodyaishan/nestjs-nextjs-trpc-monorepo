import { Module } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';
import { TrpcRouter } from '@server/trpc/trpc.router';

@Module({
  imports: [],
  exports: [],
  providers: [TrpcService, TrpcRouter],
})
export class TrpcModule {}
