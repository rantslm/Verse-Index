// seed/startupSeed.js

const { SEED_TOPICS } = require("./seedContent");
const { fetchVerseFromBibleApi } = require("../services/bibleApi");

// Import models (make sure these paths match your filenames)
const { Topic } = require("../models/Topic");
const { Verse } = require("../models/verse");

/**
 * Seeds Topics + Verses at startup.
 * Safe to run repeatedly because it uses findOrCreate.
 */
const runStartupSeed = async () => {
    console.log("🌱 Startup seed: begin");

    for (const t of SEED_TOPICS) {
    // 1) Create topic if it doesn't exist
    const [topic] = await Topic.findOrCreate({
        where: { slug: t.slug },
        defaults: {
            name: t.name,
            slug: t.slug,
            description: t.description ?? null,
        },
    });

    // 2) Fetch & store each verse under that topic
    for (const ref of t.refs) {
        try {
            const verseData = await fetchVerseFromBibleApi({
            version: t.version,
            book: ref.book,
            chapter: ref.chapter,
            verse: ref.verse,
        });

        // Prevent duplicates (same topic + same location + same version)
        await Verse.findOrCreate({
            where: {
                topic_id: topic.id,
                book: verseData.book,
                chapter: verseData.chapter,
                verse_number: verseData.verse_number,
                version: verseData.version,
            },
            defaults: {
                topic_id: topic.id,
                reference: verseData.reference,
                book: verseData.book,
                chapter: verseData.chapter,
                verse_number: verseData.verse_number,
                text: verseData.text,
                version: verseData.version,
            },
        });

        console.log(
            `✅ Seeded: ${t.slug} -> ${verseData.reference} (${verseData.version})`,
        );
        } catch (err) {
            console.error(
            `❌ Seed failed for topic "${t.slug}" ref ${ref.book} ${ref.chapter}:${ref.verse}`,
            err.message,
        );
      }
    }
  }

  console.log("🌱 Startup seed: done");
};

module.exports = { runStartupSeed };
