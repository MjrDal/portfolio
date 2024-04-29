-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "litleDescription" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "descktopImage" TEXT NOT NULL,
    "mobileImage" TEXT,
    "firstTag" TEXT NOT NULL,
    "SecondTag" TEXT,
    "thirdTag" TEXT,
    "link" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
