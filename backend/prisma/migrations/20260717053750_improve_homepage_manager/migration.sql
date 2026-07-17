-- AlterTable
ALTER TABLE "HomepageSection" ADD COLUMN     "backgroundColor" TEXT,
ADD COLUMN     "bannerImage" TEXT,
ADD COLUMN     "buttonLink" TEXT,
ADD COLUMN     "buttonText" TEXT,
ADD COLUMN     "icon" TEXT,
ADD COLUMN     "layout" TEXT NOT NULL DEFAULT 'grid',
ADD COLUMN     "maxItems" INTEGER NOT NULL DEFAULT 10,
ADD COLUMN     "textColor" TEXT;

-- AlterTable
ALTER TABLE "HomepageSectionItem" ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "startDate" TIMESTAMP(3);
