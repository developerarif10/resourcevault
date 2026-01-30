import mongoose from "mongoose";
import { Category } from "../models/category-model.js";
import { Resource } from "../models/resource-model.js";
import { CATEGORIES } from "./categories-seed.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Mapping of existing resources to new categories
const resourceCategoryMapping = {
  GitHub: "Source Code Repos",
  "React Icons": "Design and UI",
  "Web.dev": "Education and Career Development",
  "Tailwind CSS": "Code Quality",
  CodePen: "IDE and Code Editing",
  StackBlitz: "IDE and Code Editing",
  "Font Awesome": "Font",
  "MDN Web Docs": "Education and Career Development",
  "Shadcn UI": "Design and UI",
  "The A11Y Project": "Education and Career Development",
  "CSS-Tricks": "Education and Career Development",
  Microcopy: "Design Inspiration",
  "Three.js": "Game Development",
  "Anime.js": "Animation",
  GSAP: "Animation",
  "React Spring": "Animation",
  "Colors and Fonts": "Font",
  Flaticon: "Design Inspiration",
  Iconmonstr: "Design Inspiration",
  Figma: "Design and UI",
  Canva: "Design and UI",
  "Material Design": "Design and UI",
  "Mockup World": "Design Inspiration",
  Dribbble: "Design Inspiration",
  Coolors: "Design and UI",
  "Lookup.design": "Design Inspiration",
  Unsplash: "Storage and Media Processing",
};

async function seedCategoriesAndCleanDuplicates() {
  try {
    console.log("🔄 Connecting to MongoDB...");
    const mongoUri = process.env.MONGODB_CONNECTION_STRING;
    if (!mongoUri) {
      throw new Error("MONGODB_CONNECTION_STRING environment variable not set");
    }

    await mongoose.connect(mongoUri);
    console.log("✅ MongoDB connected");

    console.log("🔄 Seeding categories...");

    // 1. Add all 43 categories to the database
    for (const categoryName of CATEGORIES) {
      try {
        const existingCategory = await Category.findOne({ name: categoryName });
        if (!existingCategory) {
          await Category.create({ name: categoryName });
          console.log(`✅ Added category: ${categoryName}`);
        } else {
          console.log(`⏭️  Category already exists: ${categoryName}`);
        }
      } catch (err) {
        // Duplicate key error, category already exists
        console.log(`⏭️  Category already exists: ${categoryName}`);
      }
    }

    console.log("\n🧹 Cleaning duplicate resources...");

    // 2. Find and remove duplicate resources (keep the first one by creation order)
    const urlMap = new Map();
    const allResources = await Resource.find().sort({ _id: 1 });

    const duplicates = [];

    for (const resource of allResources) {
      if (urlMap.has(resource.url)) {
        duplicates.push(resource._id);
        console.log(
          `❌ Duplicate found: "${resource.title}" (${resource.url})`
        );
      } else {
        urlMap.set(resource.url, resource._id);
      }
    }

    if (duplicates.length > 0) {
      await Resource.deleteMany({ _id: { $in: duplicates } });
      console.log(`✅ Removed ${duplicates.length} duplicate resources`);
    } else {
      console.log("✅ No duplicates found");
    }

    console.log("\n📌 Updating resource categories...");

    // 3. Update resource categories based on mapping
    const updatedResources = await Resource.find();

    for (const resource of updatedResources) {
      const mappedCategory = resourceCategoryMapping[resource.title];
      if (mappedCategory) {
        resource.category = mappedCategory;
        await resource.save();
        console.log(`✅ Updated "${resource.title}" → ${mappedCategory}`);
      } else {
        // Resources not in mapping get "Other Free Resources"
        resource.category = "Other Free Resources";
        await resource.save();
        console.log(`⚠️  Updated "${resource.title}" → Other Free Resources`);
      }
    }

    console.log("\n✨ Migration complete!");
    console.log(`\n📊 Summary:`);
    console.log(`   - Categories added: ${CATEGORIES.length}`);
    console.log(`   - Duplicates removed: ${duplicates.length}`);
    console.log(`   - Resources updated: ${updatedResources.length}`);

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Migration failed:", error);
    process.exit(1);
  }
}

// Run the migration
seedCategoriesAndCleanDuplicates();
