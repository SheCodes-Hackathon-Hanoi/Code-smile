-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT,
    "birthDate" TEXT,
    "email" TEXT,
    "ava" TEXT,
    "phoneNumber" INTEGER,
    "address" TEXT,
    "type" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Challenge" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "date" TIMESTAMP(3),
    "user_id" TEXT,
    "description" TEXT,
    "campaign_id" TEXT,

    CONSTRAINT "Challenge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Detail_challenge" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "finish_date" TIMESTAMP(3),
    "point" INTEGER,

    CONSTRAINT "Detail_challenge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3),
    "user_id" TEXT,
    "title" TEXT,
    "content" TEXT,
    "images_o_videos" TEXT,
    "challenge_id" INTEGER,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "time" TIMESTAMP(3),
    "content" TEXT,
    "user_id" TEXT,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Voucher" (
    "user_id" TEXT,
    "date" TIMESTAMP(3),
    "id" TEXT NOT NULL,
    "percent" INTEGER,
    "amount" INTEGER,
    "point" INTEGER,
    "expiredate" TIMESTAMP(3),

    CONSTRAINT "Voucher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Detail_voucher" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "voucher_id" TEXT,
    "redeem" TIMESTAMP(3),
    "used" INTEGER,
    "point" INTEGER,

    CONSTRAINT "Detail_voucher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campaign" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "level" TEXT,
    "mem_count" INTEGER,
    "description" TEXT,
    "note" TEXT,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rank" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "scorce" INTEGER,
    "ratio" DOUBLE PRECISION,

    CONSTRAINT "Rank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Detail_rank" (
    "id" TEXT NOT NULL,
    "rank_id" TEXT,
    "user_id" TEXT,
    "total_point" TEXT,
    "redeem_point" TEXT,

    CONSTRAINT "Detail_rank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "date" TEXT,
    "start" TEXT,
    "content" TEXT,
    "campaign_id" TEXT,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Challenge_id_key" ON "Challenge"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Detail_challenge_id_key" ON "Detail_challenge"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Post_id_key" ON "Post"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Comment_id_key" ON "Comment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Voucher_id_key" ON "Voucher"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Detail_voucher_id_key" ON "Detail_voucher"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Campaign_id_key" ON "Campaign"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Rank_id_key" ON "Rank"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Detail_rank_id_key" ON "Detail_rank"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_id_key" ON "Schedule"("id");
