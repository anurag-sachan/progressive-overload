import { storage } from "./appwrite";

const BUCKET_ID = "68cc74bb0033606fa010";
const TEMPLATE_ID = "68cc75050035998c615e"; // your template.json file

// ✅ fetch template.json
export async function fetchTemplate() {
  try {
    const res = await storage.getFileDownload(BUCKET_ID, TEMPLATE_ID);
    const text = await res.text();
    return JSON.parse(text);
  } catch (err) {
    console.error("Template fetch error:", err);
    return null;
  }
}

// ✅ fetch day.json if exists
export async function fetchDayData(date) {
  try {
    const fileId = `${date}.json`;
    const res = await storage.getFileDownload(BUCKET_ID, fileId);
    const text = await res.text();
    return JSON.parse(text);
  } catch (err) {
    console.warn("No file for", date, err.message);
    return null;
  }
}

// ✅ save as YYYY-MM-DD.json (overwrite if exists)
export async function saveDayData(date, data) {
  try {
    const fileId = `${date}.json`;
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });

    // Try to delete if it already exists (overwrite)
    try {
      await storage.deleteFile(BUCKET_ID, fileId);
    } catch {
      // ignore if file not found
    }

    return await storage.createFile(
      BUCKET_ID,
      fileId, // use date.json as ID
      blob,
      ["role:all"],
      ["role:all"]
    );
  } catch (err) {
    console.error("Save error:", err);
    return null;
  }
}
