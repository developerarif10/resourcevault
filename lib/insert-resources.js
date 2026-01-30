import mongoose from "mongoose";
import { Resource } from "../models/resource-model.js";
import { RESOURCES_DATA } from "./resources-data.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

async function insertResources() {
  try {
    console.log("🔄 Connecting to MongoDB...");
    const mongoUri = process.env.MONGODB_CONNECTION_STRING;
    if (!mongoUri) {
      throw new Error("MONGODB_CONNECTION_STRING environment variable not set");
    }

    await mongoose.connect(mongoUri);
    console.log("✅ MongoDB connected");

    console.log("\n📦 Inserting resources...");

    let inserted = 0;
    let skipped = 0;

    for (const resource of RESOURCES_DATA) {
      try {
        // Check if resource already exists by URL
        const existingResource = await Resource.findOne({ url: resource.url });

        if (!existingResource) {
          await Resource.create({
            title: resource.title,
            url: resource.url,
            description: resource.description,
            category: resource.category,
          });
          inserted++;
          console.log(`✅ Added: ${resource.title}`);
        } else {
          skipped++;
          console.log(`⏭️  Skipped (exists): ${resource.title}`);
        }
      } catch (err) {
        console.log(`❌ Error adding "${resource.title}": ${err.message}`);
      }
    }

    console.log("\n✨ Insertion complete!");
    console.log(`\n📊 Summary:`);
    console.log(`   - Resources inserted: ${inserted}`);
    console.log(`   - Resources skipped: ${skipped}`);
    console.log(`   - Total processed: ${inserted + skipped}`);

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Insertion failed:", error);
    process.exit(1);
  }
}

// Run the insertion
insertResources();
