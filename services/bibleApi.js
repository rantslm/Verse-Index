const buildVerseUrl = ({ version, book, chapter, verse }) => {
    return `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/${book}/chapters/${chapter}/verses/${verse}.json`;
};

const fetchVerseFromBibleApi = async ({ version, book, chapter, verse }) => {
    const url = buildVerseUrl({ version, book, chapter, verse });
    
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Bible API request failed (${res.status}) for ${url}`);
    }
    
    const data = await res.json();
    // bible-api files generally include fields like: { book, chapter, verse, text, reference, ... }
    const text = data.text ?? data?.verse?.text ?? null;
    if (!text) {
        throw new Error(`Bible API response missing text for ${url}`);
  }
  return {
    reference: data.reference ?? `${book} ${chapter}:${verse}`,
    book: data.book ?? book,
    chapter: Number(data.chapter ?? chapter),
    verse_number: Number(data.verse ?? verse),
    text,
    version,
  };
};

module.exports = {
  fetchVerseFromBibleApi,
};
