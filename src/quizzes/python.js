export const pythonQuestions = [
  {
    id: 1,
    question: {
      en: "Fill the blank: cosine similarity between vectors a and b.",
      pl: "Uzupełnij lukę: podobieństwo cosinusowe wektorów a i b.",
    },
    code: `import numpy as np

def cosine_sim(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * _____)`,
    options: {
      en: [
        "len(b)",
        "np.sum(b)",
        "np.max(b)",
        "np.linalg.norm(b)",
      ],
      pl: [
        "len(b)",
        "np.sum(b)",
        "np.max(b)",
        "np.linalg.norm(b)",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 2,
    question: {
      en: "Fixed-size chunking with overlap. What belongs in the blank?",
      pl: "Chunking stałego rozmiaru z overlapem. Co wstawisz w lukę?",
    },
    code: `def chunk_text(text, size=512, overlap=50):
    chunks = []
    start = 0
    while start < len(text):
        end = start + size
        chunks.append(text[start:end])
        if end >= len(text):
            break
        start = _____
    return chunks`,
    options: {
      en: [
        "size",
        "start + overlap",
        "end - overlap",
        "end + overlap",
      ],
      pl: [
        "size",
        "start + overlap",
        "end - overlap",
        "end + overlap",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 3,
    question: {
      en: "Top-k by similarity. Which line correctly picks the best k indices?",
      pl: "Top-k po podobieństwie. Która linia poprawnie wybiera najlepsze k indeksów?",
    },
    code: `import numpy as np

scores = np.array([0.2, 0.9, 0.4, 0.85])
k = 2
# ???`,
    options: {
      en: [
        "idx = np.argsort(scores)[:k]",
        "idx = sorted(scores)[-k:]",
        "idx = np.argmax(scores)",
        "idx = np.argsort(scores)[-k:][::-1]",
      ],
      pl: [
        "idx = np.argsort(scores)[:k]",
        "idx = sorted(scores)[-k:]",
        "idx = np.argmax(scores)",
        "idx = np.argsort(scores)[-k:][::-1]",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 4,
    question: {
      en: "Temperature scaling before softmax. Fill the blank.",
      pl: "Skalowanie temperature przed softmaksem. Uzupełnij lukę.",
    },
    code: `import numpy as np

def softmax(logits, temperature=1.0):
    scaled = logits / _____
    exps = np.exp(scaled - np.max(scaled))
    return exps / exps.sum()`,
    options: {
      en: [
        "np.sum(logits)",
        "len(logits)",
        "temperature",
        "np.std(logits)",
      ],
      pl: [
        "np.sum(logits)",
        "len(logits)",
        "temperature",
        "np.std(logits)",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 5,
    question: {
      en: "What does this function compute for RAG retrieval?",
      pl: "Co liczy ta funkcja w kontekście retrieval RAG?",
    },
    code: `def rrf_score(ranks, k=60):
    # ranks: list of 1-based ranks from different retrievers
    return sum(1.0 / (k + r) for r in ranks)`,
    options: {
      en: [
        "Cross-entropy loss for fine-tuning",
        "BLEU score for generation quality",
        "TF-IDF document length normalization",
        "Reciprocal Rank Fusion score for hybrid search",
      ],
      pl: [
        "Cross-entropy loss do fine-tuningu",
        "BLEU score jakości generacji",
        "Normalizację długości dokumentu TF-IDF",
        "Score Reciprocal Rank Fusion do hybrid search",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 6,
    question: {
      en: "Safe Text-to-SQL helper. Which fill avoids SQL injection?",
      pl: "Bezpieczny helper Text-to-SQL. Która luka chroni przed SQL injection?",
    },
    code: `def fetch_user(conn, user_id):
    cur = conn.cursor()
    cur.execute("SELECT * FROM users WHERE id = %s", _____)
    return cur.fetchone()`,
    options: {
      en: [
        "user_id",
        "\"'\" + str(user_id) + \"'\"",
        "f\"'{user_id}'\"",
        "(user_id,)",
      ],
      pl: [
        "user_id",
        "\"'\" + str(user_id) + \"'\"",
        "f\"'{user_id}'\"",
        "(user_id,)",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 7,
    question: {
      en: "Time complexity of naive all-pairs cosine search over n docs of dim d (no ANN)?",
      pl: "Złożoność czasowa naiwnego all-pairs cosine search po n dokumentach wymiaru d (bez ANN)?",
    },
    code: `def brute_force(query, docs):
    # query: (d,), docs: (n, d)
    scores = docs @ query
    return scores.argsort()[::-1]`,
    options: {
      en: [
        "O(d)",
        "O(n²)",
        "O(n · d)",
        "O(log n)",
      ],
      pl: [
        "O(d)",
        "O(n²)",
        "O(n · d)",
        "O(log n)",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 8,
    question: {
      en: "Fill the blank to L2-normalize embeddings before indexing.",
      pl: "Uzupełnij lukę, by znormalizować embeddingi L2 przed indeksowaniem.",
    },
    code: `import numpy as np

def l2_normalize(X):
    norms = np.linalg.norm(X, axis=1, keepdims=True)
    return X / _____`,
    options: {
      en: [
        "X.sum()",
        "np.max(X)",
        "np.clip(norms, 1e-12, None)",
        "X.shape[0]",
      ],
      pl: [
        "X.sum()",
        "np.max(X)",
        "np.clip(norms, 1e-12, None)",
        "X.shape[0]",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 9,
    question: {
      en: "After L2-normalization, cosine similarity equals…",
      pl: "Po normalizacji L2 podobieństwo cosinusowe równa się…",
    },
    code: `# ||a|| = ||b|| = 1
# cosine(a, b) = ?`,
    options: {
      en: [
        "dot(a, b)",
        "|a| + |b|",
        "a - b",
        "softmax(a + b)",
      ],
      pl: [
        "dot(a, b)",
        "|a| + |b|",
        "a - b",
        "softmax(a + b)",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 10,
    question: {
      en: "Deduplicate retrieved chunk IDs while keeping order. Fill the blank.",
      pl: "Zdeduplikuj ID chunków zachowując kolejność. Uzupełnij lukę.",
    },
    code: `def unique_preserve(ids):
    seen = set()
    out = []
    for i in ids:
        if i not in seen:
            seen.add(i)
            _____
    return out`,
    options: {
      en: [
        "ids.remove(i)",
        "seen.clear()",
        "out.append(i)",
        "out.insert(0, i)",
      ],
      pl: [
        "ids.remove(i)",
        "seen.clear()",
        "out.append(i)",
        "out.insert(0, i)",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 11,
    question: {
      en: "Mitigate “lost in the middle”: put best chunks first. What’s missing?",
      pl: "Łagodzenie „lost in the middle”: najlepsze chunki na początku. Czego brakuje?",
    },
    code: `def pack_context(chunks, scores):
    order = sorted(range(len(chunks)), key=lambda i: scores[i], reverse=True)
    return [chunks[i] for i in _____]`,
    options: {
      en: [
        "range(len(chunks))",
        "scores",
        "reversed(chunks)",
        "order",
      ],
      pl: [
        "range(len(chunks))",
        "scores",
        "reversed(chunks)",
        "order",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 12,
    question: {
      en: "Simple exponential backoff. Fill the sleep duration.",
      pl: "Prosty exponential backoff. Uzupełnij czas snu.",
    },
    code: `import time

def call_with_retry(fn, retries=3):
    for attempt in range(retries):
        try:
            return fn()
        except Exception:
            if attempt == retries - 1:
                raise
            time.sleep(_____)`,
    options: {
      en: [
        "0",
        "retries - attempt",
        "attempt",
        "2 ** attempt",
      ],
      pl: [
        "0",
        "retries - attempt",
        "attempt",
        "2 ** attempt",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 13,
    question: {
      en: "Parse LLM JSON safely. Which fill is correct?",
      pl: "Bezpieczne parsowanie JSON z LLM. Która luka jest poprawna?",
    },
    code: `import json

def parse_json_block(text):
    start = text.find("{")
    end = text.rfind("}")
    if start == -1 or end == -1 or end < start:
        raise ValueError("no json object")
    return json.loads(_____)`,
    options: {
      en: [
        "text.strip()",
        "text",
        "text[start:end+1]",
        "text[start:end]",
      ],
      pl: [
        "text.strip()",
        "text",
        "text[start:end+1]",
        "text[start:end]",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 14,
    question: {
      en: "Attention score matrix shape for Q,K ∈ R^{n×d}. Fill the blank.",
      pl: "Shape macierzy score’ów attention dla Q,K ∈ R^{n×d}. Uzupełnij lukę.",
    },
    code: `import numpy as np

# Q.shape == K.shape == (n, d)
scores = (Q @ K.T) / np.sqrt(d)
# scores.shape == _____`,
    options: {
      en: [
        "(d, d)",
        "(1, n)",
        "(n, d)",
        "(n, n)",
      ],
      pl: [
        "(d, d)",
        "(1, n)",
        "(n, d)",
        "(n, n)",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 15,
    question: {
      en: "Build a cache key for identical RAG queries. Best fill?",
      pl: "Klucz cache dla identycznych zapytań RAG. Najlepsza luka?",
    },
    code: `import hashlib

def cache_key(query: str) -> str:
    return hashlib.sha256(_____).hexdigest()`,
    options: {
      en: [
        "query.strip().lower().encode()",
        "query",
        "query.encode('latin-1', errors='ignore')[:8]",
        "str(len(query))",
      ],
      pl: [
        "query.strip().lower().encode()",
        "query",
        "query.encode('latin-1', errors='ignore')[:8]",
        "str(len(query))",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 16,
    question: {
      en: "Merge dense + sparse hit lists (unique). What’s the right blank?",
      pl: "Scal listy dense + sparse (unikalne). Jaka luka jest dobra?",
    },
    code: `def merge_hits(dense_ids, sparse_ids):
    return list(dict.fromkeys(_____))`,
    options: {
      en: [
        "zip(dense_ids, sparse_ids)",
        "dense_ids + sparse_ids",
        "dense_ids - sparse_ids",
        "set(dense_ids) & set(sparse_ids)",
      ],
      pl: [
        "zip(dense_ids, sparse_ids)",
        "dense_ids + sparse_ids",
        "dense_ids - sparse_ids",
        "set(dense_ids) & set(sparse_ids)",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 17,
    question: {
      en: "Estimate tokens roughly (chars/4). Fill for a budget check.",
      pl: "Szacunek tokenów (znaki/4). Uzupełnij check budżetu.",
    },
    code: `def fits_context(prompt: str, limit: int = 8000) -> bool:
    approx_tokens = _____
    return approx_tokens <= limit`,
    options: {
      en: [
        "len(prompt) * 4",
        "ord(prompt[0])",
        "len(prompt.split()) // 4",
        "len(prompt) // 4",
      ],
      pl: [
        "len(prompt) * 4",
        "ord(prompt[0])",
        "len(prompt.split()) // 4",
        "len(prompt) // 4",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 18,
    question: {
      en: "Mask emails before sending text to an LLM. Fill the regex sub.",
      pl: "Zamaskuj e-maile przed wysłaniem tekstu do LLM. Uzupełnij sub.",
    },
    code: `import re

EMAIL = re.compile(r"[\\w.+-]+@[\\w-]+\\.[\\w.-]+")

def mask_pii(text: str) -> str:
    return EMAIL.sub(_____, text)`,
    options: {
      en: [
        '""',
        "text",
        '"[EMAIL]"',
        '"@"',
      ],
      pl: [
        '""',
        "text",
        '"[EMAIL]"',
        '"@"',
      ],
    },
    correctIndex: 2,
  },
  {
    id: 19,
    question: {
      en: "What does this sliding-window index generator yield?",
      pl: "Co yielduje ten generator okna przesuwnego?",
    },
    code: `def windows(n, size, stride):
    for start in range(0, n - size + 1, stride):
        yield start, start + size`,
    options: {
      en: [
        "Learning-rate schedule milestones",
        "GPU device ordinals for model sharding",
        "Random document IDs for negative sampling",
        "Start/end indices of overlapping spans for chunking",
      ],
      pl: [
        "Kamienie milowe harmonogramu learning rate",
        "Numery urządzeń GPU do shardingu modelu",
        "Losowe ID dokumentów do negative sampling",
        "Indeksy start/end nachodzących spanów do chunkingu",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 20,
    question: {
      en: "Faithfulness-style check: claim must appear in context. Fill blank.",
      pl: "Check w stylu faithfulness: claim musi być w kontekście. Uzupełnij lukę.",
    },
    code: `def grounded(claim: str, context: str) -> bool:
    return claim.lower() in _____`,
    options: {
      en: [
        "context.lower()",
        "claim.upper()",
        "context.split()[0]",
        "str(len(context))",
      ],
      pl: [
        "context.lower()",
        "claim.upper()",
        "context.split()[0]",
        "str(len(context))",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 21,
    question: {
      en: "Batch embed texts. Which call shape is correct?",
      pl: "Batch embedding tekstów. Które wywołanie ma poprawny kształt?",
    },
    code: `def embed_many(model, texts: list[str]):
    # model.encode returns np.ndarray
    return _____`,
    options: {
      en: [
        "model.encode(texts, batch_size=32, normalize_embeddings=True)",
        "[model.encode(t)[0] for t in texts[0]]",
        "model.encode(None)",
        "model.encode(texts[0]) for _ in texts",
      ],
      pl: [
        "model.encode(texts, batch_size=32, normalize_embeddings=True)",
        "[model.encode(t)[0] for t in texts[0]]",
        "model.encode(None)",
        "model.encode(texts[0]) for _ in texts",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 22,
    question: {
      en: "Bug hunt: this top-p filter is wrong. What’s the issue?",
      pl: "Bug hunt: ten filtr top-p jest zły. Jaki jest problem?",
    },
    code: `def nucleus(probs, p=0.9):
    order = probs.argsort()  # ascending
    cumulative = probs[order].cumsum()
    # keep tokens until cumulative >= p
    cut = (cumulative >= p).argmax()
    keep = order[: cut + 1]  # ???
    return keep`,
    options: {
      en: [
        "It keeps the lowest-probability tokens; should use descending sort / reverse order",
        "p=0.9 is an invalid nucleus threshold",
        "argmax always returns the last index only",
        "cumsum cannot be used with probabilities",
      ],
      pl: [
        "Zostawia tokeny o najniższym prawdopodobieństwie; trzeba sortować malejąco / odwrócić kolejność",
        "p=0.9 to niepoprawny próg nucleus",
        "argmax zawsze zwraca tylko ostatni indeks",
        "cumsum nie działa na prawdopodobieństwach",
      ],
    },
    correctIndex: 0,
  },
];
