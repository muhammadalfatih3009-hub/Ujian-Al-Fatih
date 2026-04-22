import { db } from './services/database';

async function check() {
    console.log("Fetching mapped results...");
    const results = await db.getAllResults();
    console.log("Mapped results length:", results?.length);
    if (results && results.length > 0) {
        console.log("Sample:", results[0]);
    }
}

check();
