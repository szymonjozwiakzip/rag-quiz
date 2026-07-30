export const accentureQuestions = [
  {
    id: 1,
    question: {
      en: "What is Generative AI?",
      pl: "Czym jest Generative AI?",
    },
    options: {
      en: [
        "AI that only classifies existing labels without creating anything new",
        "A branch of AI that creates new content (text, code, images, audio) by learning patterns from large datasets, often using Transformer architectures",
        "A rule engine that hardcodes every possible business response",
        "A database technology that replaces SQL warehouses",
      ],
      pl: [
        "AI, które tylko klasyfikuje istniejące etykiety i nic nowego nie tworzy",
        "Gałąź AI tworząca nową treść (tekst, kod, obrazy, audio) przez uczenie się wzorców z dużych zbiorów danych, często z użyciem Transformerów",
        "Silnik reguł zahardkodowujący każdą możliwą odpowiedź biznesową",
        "Technologia bazodanowa zastępująca hurtownie SQL",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 2,
    question: {
      en: "What is the difference between a base model and an instruction-tuned model?",
      pl: "Jaka jest różnica między modelem bazowym a instruction-tuned?",
    },
    options: {
      en: [
        "A base model is always larger; instruction-tuned models cannot generate text",
        "They are identical — the names only differ for marketing",
        "A base model is trained on next-token prediction and completes text poorly for instructions; an instruction-tuned model is further aligned (e.g. RLHF/RLAIF) to follow user intent",
        "Instruction-tuned models only work offline; base models require cloud APIs",
      ],
      pl: [
        "Model bazowy jest zawsze większy; modele instruction-tuned nie generują tekstu",
        "Są identyczne — nazwy różnią się tylko marketingowo",
        "Model bazowy uczy się next-token prediction i słabo wykonuje instrukcje; instruction-tuned jest dodatkowo dopasowany (np. RLHF/RLAIF) do intencji użytkownika",
        "Modele instruction-tuned działają tylko offline; bazowe wymagają API w chmurze",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 3,
    question: {
      en: "Explain the attention mechanism in transformers and why it matters for LLMs.",
      pl: "Wyjaśnij mechanizm attention w transformerach i dlaczego ma znaczenie dla LLM.",
    },
    options: {
      en: [
        "Attention randomly drops tokens to speed up training only",
        "Attention lets each token attend to others via Query–Key scores and a weighted sum of values, enabling long-range dependencies and multi-step reasoning that RNNs struggled with",
        "Attention replaces embeddings with one-hot character codes",
        "Attention is used only for image cropping, not language",
      ],
      pl: [
        "Attention losowo usuwa tokeny wyłącznie, by przyspieszyć trening",
        "Attention pozwala każdemu tokenowi „patrzeć” na inne przez wyniki Query–Key i ważoną sumę values — uchwytuje dalekie zależności i wieloetapowe rozumowanie, z czym RNN miały problem",
        "Attention zastępuje embeddingi kodami one-hot znaków",
        "Attention służy tylko do przycinania obrazów, nie do języka",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 4,
    question: {
      en: "What is the context window, and what are practical challenges of a large one?",
      pl: "Czym jest okno kontekstu i jakie są praktyczne wyzwania dużego okna?",
    },
    options: {
      en: [
        "The maximum tokens processable in one forward pass; larger windows help in-context learning but cost O(n²) attention and can suffer “lost in the middle” degradation",
        "The number of GPUs required to host the model",
        "A UI scroll height setting in the chat client",
        "A fixed 512-token limit that never changes across models",
      ],
      pl: [
        "Maks. liczba tokenów w jednym forward pass; większe okno pomaga w in-context learning, ale kosztuje O(n²) attention i może cierpieć na „lost in the middle”",
        "Liczba GPU wymagana do hostowania modelu",
        "Ustawienie wysokości scrolla w kliencie czatu",
        "Stały limit 512 tokenów, który nigdy się nie zmienia między modelami",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 5,
    question: {
      en: "What is temperature, and how does it affect generation?",
      pl: "Czym jest temperature i jak wpływa na generację?",
    },
    options: {
      en: [
        "A hardware thermostat setting for GPU cooling fans",
        "It scales logits before softmax: ~0 is greedy/factual; higher values flatten the distribution and increase randomness (creative tasks often use ~0.7–1.0)",
        "It always deletes the top-1 token from the vocabulary",
        "It only controls how many documents RAG retrieves",
      ],
      pl: [
        "Ustawienie termostatu wentylatorów GPU",
        "Skaluje logitów przed softmaksem: ~0 to greedy/fakty; wyższe wartości spłaszczają rozkład i zwiększają losowość (kreatywne zadania często ~0.7–1.0)",
        "Zawsze usuwa token top-1 ze słownika",
        "Kontroluje wyłącznie ile dokumentów pobiera RAG",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 6,
    question: {
      en: "What is the difference between top-k and top-p (nucleus) sampling?",
      pl: "Jaka jest różnica między top-k a top-p (nucleus) sampling?",
    },
    options: {
      en: [
        "Top-k and top-p are identical algorithms with two names",
        "Top-k always samples from the entire vocabulary; top-p samples only one token",
        "Top-p is obsolete and never used in production LLMs",
        "Top-k keeps the k highest-probability tokens; top-p samples from the smallest set whose cumulative probability exceeds p, adapting to distribution entropy",
      ],
      pl: [
        "Top-k i top-p to identyczne algorytmy pod dwiema nazwami",
        "Top-k zawsze próbkuje z całego słownika; top-p wybiera tylko jeden token",
        "Top-p jest przestarzałe i nie używa się go w produkcyjnych LLM",
        "Top-k zostawia k tokenów o najwyższym prawdopodobieństwie; top-p próbuje z najmniejszego zbioru, którego skumulowane p przekracza próg — adaptywnie do entropii",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 7,
    question: {
      en: "What problem does RAG solve, and what are its core components?",
      pl: "Jaki problem rozwiązuje RAG i jakie są jego kluczowe komponenty?",
    },
    options: {
      en: [
        "It replaces GPUs with CPUs for cheaper inference only",
        "It grounds generation in retrieved docs to fight cutoff/hallucinations; cores: ingestion/chunking/embeddings, vector store, retriever, and LLM generator",
        "It permanently deletes the model’s pre-training knowledge",
        "It is only a UI skin for chatbots with no retrieval step",
      ],
      pl: [
        "Zastępuje GPU procesorami CPU wyłącznie dla tańszej inferencji",
        "Ugruntowuje generację w pobranych dokumentach (cutoff/halucynacje); rdzeń: ingestion/chunking/embeddingi, vector store, retriever i generator LLM",
        "Na zawsze usuwa wiedzę z pre-treningu modelu",
        "To tylko skórka UI chatbota bez kroku retrieval",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 8,
    question: {
      en: "How do you choose a chunking strategy for RAG?",
      pl: "Jak wybierasz strategię chunkingu w RAG?",
    },
    options: {
      en: [
        "Always use 1-token chunks for maximum precision",
        "Chunking strategy never matters if the embedding model is large enough",
        "Match document type and queries: fixed-size with overlap is simple; semantic/hierarchical/structure-aware (e.g. section headers) often wins on legal/structured docs",
        "Only chunk after the LLM has already answered",
      ],
      pl: [
        "Zawsze chunki 1-tokenowe dla maksymalnej precyzji",
        "Strategia chunkingu nie ma znaczenia, jeśli embedding model jest wystarczająco duży",
        "Dopasuj do typu dokumentu i zapytań: fixed-size z overlapem jest prosty; semantic/hierarchical/structure-aware (np. nagłówki sekcji) często wygrywa na dokumentach prawnych/strukturalnych",
        "Chunkować dopiero po odpowiedzi LLM",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 9,
    question: {
      en: "What is hybrid search, and when does it outperform pure vector search?",
      pl: "Czym jest hybrid search i kiedy bije czyste wyszukiwanie wektorowe?",
    },
    options: {
      en: [
        "Combining dense (vector) and sparse (BM25/TF-IDF) retrieval with fusion/reranking — better when queries mix semantics and exact keywords (IDs, codes, names), typical in enterprise",
        "Searching only inside GPU VRAM without a database",
        "Running two identical vector searches and picking at random",
        "A synonym for fine-tuning the generator LLM",
      ],
      pl: [
        "Połączenie dense (wektor) i sparse (BM25/TF-IDF) z fuzją/rerankingiem — lepsze, gdy zapytania mieszają semantykę i dokładne słowa kluczowe (ID, kody, nazwy), typowe w enterprise",
        "Wyszukiwanie wyłącznie w VRAM GPU bez bazy",
        "Dwa identyczne wyszukiwania wektorowe i losowy wybór",
        "Synonim fine-tuningu generatora LLM",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 10,
    question: {
      en: "Explain the difference between a reranker and a bi-encoder.",
      pl: "Wyjaśnij różnicę między rerankerem a bi-encoderem.",
    },
    options: {
      en: [
        "A bi-encoder is always slower than a reranker on large corpora",
        "They produce identical scores; the difference is only naming",
        "Rerankers cannot use neural networks",
        "A bi-encoder embeds query and doc separately for fast similarity; a cross-encoder reranker scores the pair jointly (slower, more accurate) — retrieve with bi-encoder, then rerank top-k",
      ],
      pl: [
        "Bi-encoder jest zawsze wolniejszy od rerankera na dużych korpusach",
        "Dają identyczne score’y; różnica jest tylko w nazwie",
        "Rerankery nie mogą używać sieci neuronowych",
        "Bi-encoder embedduje query i dokument osobno (szybkie podobieństwo); cross-encoder reranker scoruje parę łącznie (wolniej, dokładniej) — retrieve bi-encoderem, potem rerank top-k",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 11,
    question: {
      en: "How do you evaluate a RAG pipeline (e.g. with RAGAS)?",
      pl: "Jak ewaluujesz pipeline RAG (np. z RAGAS)?",
    },
    options: {
      en: [
        "Only by counting how many tokens the prompt contains",
        "Across dimensions like faithfulness, answer relevance, context precision, and context recall — faithfulness and context precision especially catch hallucinations and retrieval drift",
        "By measuring CSS animation frame rate in the chat UI",
        "Evaluation is unnecessary once the first demo works",
      ],
      pl: [
        "Wyłącznie licząc tokeny w prompcie",
        "Po wymiarach: faithfulness, answer relevance, context precision i context recall — faithfulness i context precision szczególnie łapią halucynacje i drift retrieval",
        "Mierząc FPS animacji CSS w UI czatu",
        "Ewaluacja jest zbędna, gdy pierwsze demo działa",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 12,
    question: {
      en: "What is the “lost in the middle” problem in RAG?",
      pl: "Czym jest problem „lost in the middle” w RAG?",
    },
    options: {
      en: [
        "LLMs often use info at the start/end of long context better than the middle — mitigate by reranking relevant chunks first, boundary tokens, or retrieving fewer chunks",
        "Vector databases lose documents stored in the middle shard forever",
        "Models only attend to punctuation in the middle of sentences",
        "It means the middle layer of a neural net cannot be trained",
      ],
      pl: [
        "LLM lepiej wykorzystują info na początku/końcu długiego kontekstu niż w środku — łagodzić rerankiem (najtrafniejsze chunki pierwsze), tokenami granicznymi lub mniejszą liczbą chunków",
        "Bazy wektorowe na zawsze gubią dokumenty ze środkowego sharda",
        "Modele patrzą tylko na interpunkcję w środku zdań",
        "Oznacza, że środkowej warstwy sieci nie da się trenować",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 13,
    question: {
      en: "What are common failure modes of a naive RAG pipeline in production?",
      pl: "Jakie są typowe tryby awarii naiwnego pipeline’u RAG w produkcji?",
    },
    options: {
      en: [
        "Only DNS misconfiguration — RAG itself never fails",
        "Chunk size mismatch, embedding/domain mismatch, no reranking, no off-topic guardrails, and missing citation tracking",
        "Failure only happens if temperature is set to exactly 0.5",
        "Naive RAG fails solely because Python is too slow",
      ],
      pl: [
        "Tylko błędna konfiguracja DNS — sam RAG nigdy nie zawodzi",
        "Zły rozmiar chunków, mismatch embeddingu/domeny, brak rerankingu, brak guardrails na off-topic oraz brak śledzenia cytowań",
        "Awaria tylko gdy temperature = dokładnie 0.5",
        "Naiwny RAG pada wyłącznie dlatego, że Python jest za wolny",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 14,
    question: {
      en: "How would you detect hallucinations and sensitive data leakage in GenAI outputs?",
      pl: "Jak wykryjesz halucynacje i wyciek danych wrażliwych w outputach GenAI?",
    },
    options: {
      en: [
        "Trust the model’s confidence score alone with no checks",
        "Disable logging so nothing can leak or be audited",
        "Ground claims against retrieved context (faithfulness), add policy/PII detectors and allowlists, and monitor production quality against business/compliance constraints",
        "Print every raw prompt to a public Slack channel for “transparency”",
      ],
      pl: [
        "Ufać wyłącznie score’owi pewności modelu bez kontroli",
        "Wyłączyć logowanie, by nic nie wyciekło i nie dało się audytować",
        "Weryfikować twierdzenia względem kontekstu (faithfulness), dodać detektory policy/PII i allowlisty oraz monitorować jakość względem wymagań biznesowych/compliance",
        "Wypisywać każdy surowy prompt na publiczny Slack dla „przejrzystości”",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 15,
    question: {
      en: "In Accenture-style enterprise GenAI, why is “just an API wrapper” no longer enough?",
      pl: "Dlaczego w enterprise GenAI (styl Accenture) „sam wrapper na API” już nie wystarcza?",
    },
    options: {
      en: [
        "Because panels expect industrial integration: legacy systems, GDPR/data masking, cost/token control, security, and measurable ROI — not only writing a prompt",
        "Because API wrappers are illegal in the EU",
        "Because LLMs can no longer be called via HTTP",
        "Because consultants forbid using OpenAI or Anthropic APIs",
      ],
      pl: [
        "Bo oczekuje się integracji industrialnej: legacy, GDPR/maskowanie danych, kontrola kosztów/tokenów, security i mierzalny ROI — nie tylko napisanie promptu",
        "Bo wrappery API są nielegalne w UE",
        "Bo LLM nie da się już wywołać przez HTTP",
        "Bo konsultanci zabraniają używania API OpenAI czy Anthropic",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 16,
    question: {
      en: "How would you architect a secure airline customer-support platform with LLM function calling and multi-agent systems?",
      pl: "Jak zaprojektujesz bezpieczną platformę supportu linii lotniczej z function calling i multi-agent?",
    },
    options: {
      en: [
        "One linear chain with a single agent that can refund money with no checks",
        "Store all passenger PII in the prompt cache forever without encryption",
        "Specialized agents (routing, booking with secure tools, supervisor/compliance) on stateful orchestration (e.g. LangGraph), shared graph state, and human-in-the-loop for sensitive actions like refunds",
        "Replace agents with a static FAQ HTML page only",
      ],
      pl: [
        "Jeden liniowy łańcuch z agentem, który zwraca pieniądze bez kontroli",
        "Trzymać całe PII pasażerów w cache promptu na zawsze bez szyfrowania",
        "Wyspecjalizowani agenci (routing, booking z bezpiecznymi toolami, supervisor/compliance) na stateful orkiestracji (np. LangGraph), wspólny stan grafu i human-in-the-loop przy wrażliwych akcjach (zwroty)",
        "Zastąpić agentów wyłącznie statyczną stroną FAQ HTML",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 17,
    question: {
      en: "Why is SQL / Text-to-SQL important for GenAI engineering roles?",
      pl: "Dlaczego SQL / Text-to-SQL jest ważne w rolach GenAI engineering?",
    },
    options: {
      en: [
        "Enterprise LLMs must safely query structured warehouses; agents translating text→SQL need injection safeguards and correct joins — Accenture-style interviews often test this",
        "SQL was replaced entirely by vector databases in 2024",
        "GenAI engineers never touch structured data",
        "Text-to-SQL is only used for generating CSS",
      ],
      pl: [
        "Enterprise LLM muszą bezpiecznie odpytywać hurtownie; agenci text→SQL potrzebują ochrony przed injection i poprawnych joinów — takie rozmowy często to sprawdzają",
        "SQL został całkowicie zastąpiony bazami wektorowymi w 2024",
        "Inżynierowie GenAI nigdy nie dotykają danych strukturalnych",
        "Text-to-SQL służy tylko do generowania CSS",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 18,
    question: {
      en: "What skills/tools are especially relevant for a Junior GenAI Engineer role focused on enterprise delivery?",
      pl: "Jakie umiejętności/narzędzia są szczególnie istotne dla Junior GenAI Engineer w dostarczaniu enterprise?",
    },
    options: {
      en: [
        "Only Microsoft Paint and spreadsheet macros",
        "Fortran-only stacks with no Python",
        "Python, LLM APIs / open-source models, RAG & agentic workflows, evaluation against hallucinations, cloud deploy (AWS/Azure/GCP), plus modern tooling like vector DBs, embeddings, Text-to-SQL, MCP",
        "Hardware soldering of transformer chips on-site",
      ],
      pl: [
        "Wyłącznie Microsoft Paint i makra w arkuszach",
        "Stack tylko w Fortranie, bez Pythona",
        "Python, API LLM / modele open-source, RAG i workflow agentowe, ewaluacja halucynacji, deploy w chmurze (AWS/Azure/GCP) oraz tooling: vector DB, embeddingi, Text-to-SQL, MCP",
        "Lutowanie chipów transformerów na miejscu u klienta",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 19,
    question: {
      en: "What tools are commonly cited as trending in GenAI production workflows?",
      pl: "Jakie narzędzia często wymienia się jako trendy w produkcyjnych workflow GenAI?",
    },
    options: {
      en: [
        "LangChain / LlamaIndex, Hugging Face Transformers, vLLM for fast inference, and vector DBs like Pinecone or Qdrant",
        "Only COBOL mainframes with no vector search",
        "Flash and Silverlight plugins exclusively",
        "Manual paper indexes scanned by fax",
      ],
      pl: [
        "LangChain / LlamaIndex, Hugging Face Transformers, vLLM do szybkiej inferencji oraz vector DB jak Pinecone czy Qdrant",
        "Wyłącznie mainframe’y COBOL bez wyszukiwania wektorowego",
        "Tylko pluginy Flash i Silverlight",
        "Ręczne indeksy papierowe skanowane faksem",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 20,
    question: {
      en: "In Accenture GenAI interviews, roughly how is coding vs. theory weighted, and what does that imply?",
      pl: "Na rozmowach GenAI w Accenture jak mniej więcej waży się coding vs teoria i co z tego wynika?",
    },
    options: {
      en: [
        "100% memorized definitions with zero coding",
        "Roughly ~60% engineering/system design and ~40% conceptual theory — be ready to write Python (chunkers, tool calling) and explain ideas like self-attention",
        "Only leetcode hard graph problems with no LLM content",
        "Only soft skills; technical depth is never assessed",
      ],
      pl: [
        "100% wyuczonych definicji bez kodowania",
        "Około ~60% engineering/system design i ~40% teoria — trzeba umieć napisać Pythona (chunkery, tool calling) i wyjaśnić m.in. self-attention",
        "Tylko leetcode hard na grafach, bez treści LLM",
        "Tylko soft skills; głębia techniczna nie jest oceniana",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 21,
    question: {
      en: "What are Accenture’s three core technical pillars for GenAI interviews described in the prep material?",
      pl: "Jakie trzy filary techniczne GenAI (wg materiału prep) Accenture testuje na rozmowach?",
    },
    options: {
      en: [
        "Only front-end CSS, mobile UI kits, and ad design",
        "Hardware manufacturing, chip lithography, and PCB layout",
        "Social media growth hacking, SEO, and email marketing",
        "LLM architectural fundamentals, production-level RAG engineering, and enterprise security & governance — plus clear communication of business ROI (e.g. STAR)",
      ],
      pl: [
        "Tylko front-end CSS, mobilne UI kity i design reklam",
        "Produkcja hardware, litografia chipów i layout PCB",
        "Growth hacking social media, SEO i e-mail marketing",
        "Fundamenty architektury LLM, produkcyjny RAG oraz security & governance w enterprise — plus jasna komunikacja biznesowego ROI (np. STAR)",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 22,
    question: {
      en: "How do you ensure GenAI outputs adhere to business and compliance constraints in production?",
      pl: "Jak zapewnić, że outputy GenAI trzymają się wymagań biznesowych i compliance w produkcji?",
    },
    options: {
      en: [
        "Ship without monitoring and fix issues only after customer complaints",
        "Define “good output”, evaluate with automated + human checks, detect hallucinations/policy/PII issues, monitor behavior continuously, and enforce guardrails aligned to compliance",
        "Ask the model once to “be compliant” and never validate again",
        "Store unfiltered model dumps in public object storage",
      ],
      pl: [
        "Wypuszczać bez monitoringu i naprawiać dopiero po reklamacjach klientów",
        "Zdefiniować „dobry output”, ewaluować automatycznie + ludzko, wykrywać halucynacje/policy/PII, monitorować zachowanie i egzekwować guardrails zgodne z compliance",
        "Raz poprosić model, by „był compliant” i nigdy więcej nie walidować",
        "Trzymać niefiltrowane dumpy modelu w publicznym object storage",
      ],
    },
    correctIndex: 1,
  },
];
