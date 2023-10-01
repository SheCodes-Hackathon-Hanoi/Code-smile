import { Module } from "@nestjs/common";
import { Detail_rankController } from "./detailRank.controller";
import { Detail_rankService } from "./detailRank.service";

@Module({
  controllers: [Detail_rankController],
  providers: [Detail_rankService],
})
export class Detail_rankModule {
}
