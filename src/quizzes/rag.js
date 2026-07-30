export const ragQuestions = [
  {
    id: 1,
    question: {
      en: "What is Retrieval-Augmented Generation (RAG) in Gen AI, and why is it important?",
      pl: "Czym jest Retrieval-Augmented Generation (RAG) w Gen AI i dlaczego jest ważne?",
    },
    options: {
      en: [
        "A technique that fine-tunes LLMs only on private company documents",
        "A method that retrieves relevant documents and uses them as context for a generative model to produce more factual answers",
        "A database schema designed exclusively for storing chat history",
        "A way to compress model weights so they run faster on mobile devices",
      ],
      pl: [
        "Technika, która dostraja LLM wyłącznie na prywatnych dokumentach firmowych",
        "Metoda, która pobiera istotne dokumenty i używa ich jako kontekstu dla modelu generatywnego, by uzyskać bardziej faktograficzne odpowiedzi",
        "Schemat bazy danych przeznaczony wyłącznie do przechowywania historii czatu",
        "Sposób kompresji wag modelu, aby działał szybciej na urządzeniach mobilnych",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 2,
    question: {
      en: "How does RAG differ from standard LLM-based generation?",
      pl: "Czym RAG różni się od standardowej generacji opartej na LLM?",
    },
    options: {
      en: [
        "RAG always uses a larger model than standard LLM generation",
        "RAG only works offline, while standard LLMs require the internet",
        "Unlike standard LLM generation that relies solely on pre-trained knowledge, RAG retrieves specific information from a database to ground responses",
        "RAG replaces the generative model entirely with keyword search",
      ],
      pl: [
        "RAG zawsze używa większego modelu niż standardowa generacja LLM",
        "RAG działa tylko offline, podczas gdy standardowe LLM wymagają internetu",
        "W przeciwieństwie do standardowej generacji LLM opartej wyłącznie na wiedzy z treningu, RAG pobiera konkretne informacje z bazy, by ugruntować odpowiedzi",
        "RAG całkowicie zastępuje model generatywny wyszukiwaniem słów kluczowych",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 3,
    question: {
      en: "What is multi-hop retrieval in RAG, and when is it useful?",
      pl: "Czym jest multi-hop retrieval w RAG i kiedy jest przydatne?",
    },
    options: {
      en: [
        "Retrieving documents only from a single hop across a network CDN",
        "Sequentially retrieving multiple pieces of context across documents to answer complex queries that need synthesis from several sources",
        "Caching the same retrieved document for every follow-up question",
        "Skipping retrieval entirely when the query is longer than 50 tokens",
      ],
      pl: [
        "Pobieranie dokumentów wyłącznie z jednego węzła sieci CDN",
        "Sekwencyjne pobieranie wielu fragmentów kontekstu z różnych dokumentów, by odpowiedzieć na złożone pytania wymagające syntezy z kilku źródeł",
        "Buforowanie tego samego dokumentu dla każdego kolejnego pytania",
        "Pomijanie retrieval całkowicie, gdy pytanie ma więcej niż 50 tokenów",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 4,
    question: {
      en: "Can you explain how you would combine RAG with reinforcement learning?",
      pl: "Jak można połączyć RAG z uczeniem ze wzmocnieniem (reinforcement learning)?",
    },
    options: {
      en: [
        "By deleting the vector database whenever the reward is negative",
        "By replacing all embeddings with randomly sampled rewards",
        "By using RL only to choose the UI theme of the RAG application",
        "By fine-tuning retrieval or generation with a reward function that prioritizes documents improving factual accuracy",
      ],
      pl: [
        "Przez usuwanie bazy wektorowej przy każdym ujemnym rewardzie",
        "Przez zastąpienie wszystkich embeddingów losowo próbkowanymi rewardami",
        "Przez użycie RL wyłącznie do wyboru motywu UI aplikacji RAG",
        "Przez dostrajanie retrieval lub generacji funkcją nagrody, która priorytetyzuje dokumenty poprawiające dokładność faktów",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 5,
    question: {
      en: "Why are vector databases important in RAG pipelines?",
      pl: "Dlaczego bazy wektorowe są ważne w pipeline'ach RAG?",
    },
    options: {
      en: [
        "They store high-dimensional embeddings and enable fast similarity search (e.g. ANN), which is essential for low-latency retrieval",
        "They only store relational tables and foreign keys for SQL joins",
        "They replace the need for any generative model in RAG",
        "They are required solely for encrypting LLM API keys",
      ],
      pl: [
        "Przechowują wysokowymiarowe embeddingi i umożliwiają szybkie wyszukiwanie podobieństwa (np. ANN), co jest kluczowe przy niskim opóźnieniu",
        "Przechowują wyłącznie tabele relacyjne i klucze obce do joinów SQL",
        "Zastępują potrzebę jakiegokolwiek modelu generatywnego w RAG",
        "Są wymagane wyłącznie do szyfrowania kluczy API LLM",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 6,
    question: {
      en: "What's the difference between traditional databases and vector databases?",
      pl: "Jaka jest różnica między tradycyjnymi bazami danych a bazami wektorowymi?",
    },
    options: {
      en: [
        "Traditional databases are always slower than vector databases",
        "There is no meaningful difference; they store the same data structures",
        "Traditional DBs are optimized for structured data and exact matches; vector DBs are optimized for high-dimensional embeddings and similarity search",
        "Vector databases can only store integers, while traditional databases store text",
      ],
      pl: [
        "Tradycyjne bazy są zawsze wolniejsze od baz wektorowych",
        "Nie ma istotnej różnicy — przechowują te same struktury danych",
        "Tradycyjne bazy są zoptymalizowane pod dane strukturalne i dokładne dopasowania; bazy wektorowe — pod wysokowymiarowe embeddingi i wyszukiwanie podobieństwa",
        "Bazy wektorowe mogą przechowywać tylko liczby całkowite, a tradycyjne — tekst",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 7,
    question: {
      en: "Explain the role of Faiss and Annoy in vector databases.",
      pl: "Wyjaśnij rolę Faiss i Annoy w kontekście baz wektorowych.",
    },
    options: {
      en: [
        "They are cloud hosting providers for LLM APIs",
        "They are ORM frameworks for writing SQL queries in Python",
        "They are prompt templates used by LangChain agents",
        "They are libraries for fast similarity search; Faiss suits very large datasets (GPU), Annoy is memory-efficient for smaller setups",
      ],
      pl: [
        "To dostawcy hostingu chmurowego dla API LLM",
        "To frameworki ORM do pisania zapytań SQL w Pythonie",
        "To szablony promptów używane przez agentów LangChain",
        "To biblioteki do szybkiego wyszukiwania podobieństwa; Faiss nadaje się do bardzo dużych zbiorów (GPU), Annoy jest oszczędny pamięciowo przy mniejszych setupach",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 8,
    question: {
      en: "Describe how fine-tuning works with LLMs.",
      pl: "Opisz, jak działa fine-tuning modeli LLM.",
    },
    options: {
      en: [
        "It means only changing the system prompt without updating any weights",
        "It trains the model on a specialized dataset, adjusting weights so it better fits a specific task or domain",
        "It permanently freezes all model layers so no further learning can occur",
        "It converts the LLM into a classical rule-based expert system",
      ],
      pl: [
        "Oznacza wyłącznie zmianę system promptu bez aktualizacji wag",
        "Trenuje model na wyspecjalizowanym zbiorze danych, dostosowując wagi do konkretnego zadania lub domeny",
        "Na zawsze zamraża wszystkie warstwy modelu, by uniemożliwić dalsze uczenie",
        "Zamienia LLM w klasyczny system ekspercki oparty na regułach",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 9,
    question: {
      en: "What are some common challenges in deploying LLMs?",
      pl: "Jakie są typowe wyzwania przy wdrażaniu LLM?",
    },
    options: {
      en: [
        "Resource constraints, latency, hallucinations, and privacy concerns with sensitive data",
        "LLMs can only be deployed on floppy disks",
        "The main challenge is that LLMs refuse to generate any text at all",
        "Deployment is trivial; models never need monitoring or scaling",
      ],
      pl: [
        "Ograniczenia zasobów, latency, halucynacje oraz kwestie prywatności przy danych wrażliwych",
        "LLM można wdrażać wyłącznie na dyskietkach",
        "Głównym wyzwaniem jest to, że LLM odmawiają generowania jakiegokolwiek tekstu",
        "Wdrożenie jest trywialne — modele nigdy nie wymagają monitoringu ani skalowania",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 10,
    question: {
      en: "What are embeddings, and why are they useful in NLP?",
      pl: "Czym są embeddingi i dlaczego są przydatne w NLP?",
    },
    options: {
      en: [
        "Sparse one-hot vectors that only encode character count",
        "Binary flags indicating whether a document contains punctuation",
        "Dense, low-dimensional representations that capture semantic meaning for search, clustering, and recommendations",
        "Raw audio waveforms used only for speech recognition",
      ],
      pl: [
        "Rzadkie wektory one-hot kodujące wyłącznie liczbę znaków",
        "Flagi binarne wskazujące, czy dokument zawiera interpunkcję",
        "Gęste, niskowymiarowe reprezentacje uchwytujące znaczenie semantyczne — kluczowe dla wyszukiwania, klasteryzacji i rekomendacji",
        "Surowe przebiegi audio używane wyłącznie do rozpoznawania mowy",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 11,
    question: {
      en: "How would you optimize embedding quality for a specific domain?",
      pl: "Jak zoptymalizowałbyś jakość embeddingów dla konkretnej domeny?",
    },
    options: {
      en: [
        "Always use the smallest possible embedding dimension regardless of domain",
        "Train or fine-tune an embedding model on domain-specific data, and consider larger context sizes and subword tokenization",
        "Disable tokenization entirely so raw bytes become embeddings",
        "Replace embeddings with random noise to increase diversity",
      ],
      pl: [
        "Zawsze używać najmniejszego możliwego wymiaru embeddingu niezależnie od domeny",
        "Trenować lub dostrajać model embeddingów na danych domenowych oraz rozważyć większy kontekst i tokenizację subword",
        "Całkowicie wyłączyć tokenizację, by surowe bajty stały się embeddingami",
        "Zastąpić embeddingi losowym szumem, by zwiększyć różnorodność",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 12,
    question: {
      en: "How would you parse complex output from an LLM?",
      pl: "Jak parsowałbyś złożony output z LLM?",
    },
    options: {
      en: [
        "Only by printing the output and reading it manually every time",
        "By converting every response into a PNG image first",
        "By ignoring structure and always taking the first sentence",
        "Using structured prompts (e.g. JSON), post-processing (regex/parsers), and schema validation tools like Pydantic",
      ],
      pl: [
        "Wyłącznie przez drukowanie outputu i ręczne czytanie za każdym razem",
        "Przez najpierw konwersję każdej odpowiedzi na obraz PNG",
        "Przez ignorowanie struktury i zawsze branie pierwszego zdania",
        "Używając strukturalnych promptów (np. JSON), post-processingu (regex/parsery) oraz walidacji schematu narzędziami jak Pydantic",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 13,
    question: {
      en: "How would you handle model output when the LLM fails to follow the format?",
      pl: "Jak obsłużysz output modelu, gdy LLM nie trzyma się formatu?",
    },
    options: {
      en: [
        "Implement fallbacks such as rephrasing the prompt or an error-correction step; for repeated failures, fine-tuning or RL for format adherence",
        "Always accept malformed output without any recovery logic",
        "Shut down the entire application on the first format error",
        "Convert the format error into a successful HTTP 200 and ignore it",
      ],
      pl: [
        "Wdrożyć fallbacki: przeformułowanie promptu lub krok korekcji błędów; przy powtarzających się problemach — fine-tuning lub RL za przestrzeganie formatu",
        "Zawsze akceptować zły format bez logiki odzyskiwania",
        "Wyłączać całą aplikację przy pierwszym błędzie formatu",
        "Traktować błąd formatu jako udany HTTP 200 i go ignorować",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 14,
    question: {
      en: "What is few-shot prompting, and how does it differ from zero-shot prompting?",
      pl: "Czym jest few-shot prompting i czym różni się od zero-shot prompting?",
    },
    options: {
      en: [
        "Few-shot means training for a few epochs; zero-shot means no training at all on GPUs",
        "Few-shot and zero-shot are identical terms for the same prompting style",
        "Few-shot provides a few examples in the prompt to guide the task; zero-shot asks the model to perform the task with no examples",
        "Zero-shot always outperforms few-shot on every complex task",
      ],
      pl: [
        "Few-shot oznacza trening przez kilka epok; zero-shot — brak treningu na GPU",
        "Few-shot i zero-shot to identyczne określenia tego samego stylu promptowania",
        "Few-shot podaje w prompcie kilka przykładów prowadzących zadanie; zero-shot prosi model o wykonanie zadania bez przykładów",
        "Zero-shot zawsze przewyższa few-shot w każdym złożonym zadaniu",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 15,
    question: {
      en: "How do you craft effective prompts to minimize hallucinations?",
      pl: "Jak tworzyć skuteczne prompty, by minimalizować halucynacje?",
    },
    options: {
      en: [
        "Use vague prompts and ask the model to invent missing facts freely",
        "Never mention context; force the model to rely only on memorized knowledge",
        "Remove all constraints so the model can be more creative",
        "Use clear, directive prompts (role, answer only from context) and constraints like answering only if certain or citing sources",
      ],
      pl: [
        "Używać niejasnych promptów i prosić model o swobodne wymyślanie brakujących faktów",
        "Nigdy nie wspominać kontekstu; zmuszać model do polegania wyłącznie na zapamiętanej wiedzy",
        "Usunąć wszystkie ograniczenia, by model był bardziej kreatywny",
        "Używać jasnych, dyrektywnych promptów (rola, odpowiadaj tylko z kontekstu) oraz ograniczeń typu „odpowiedz tylko gdy jesteś pewien” lub cytowanie źródeł",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 16,
    question: {
      en: "What is a LangChain agent, and how is it used in an LLM pipeline?",
      pl: "Czym jest agent LangChain i jak jest używany w pipeline LLM?",
    },
    options: {
      en: [
        "A static HTML widget that displays chat messages",
        "An orchestration component that dynamically selects tools or models based on input to run complex workflows like RAG QA",
        "A hardware accelerator chip for matrix multiplication",
        "A replacement for vector databases in all RAG systems",
      ],
      pl: [
        "Statyczny widget HTML wyświetlający wiadomości czatu",
        "Komponent orkiestracji, który dynamicznie wybiera narzędzia lub modele na podstawie wejścia, by uruchamiać złożone workflow (np. RAG QA)",
        "Sprzętowy akcelerator do mnożenia macierzy",
        "Zamiennik baz wektorowych we wszystkich systemach RAG",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 17,
    question: {
      en: "How do LangChain agents enable complex multi-step workflows?",
      pl: "Jak agenci LangChain umożliwiają złożone wieloetapowe workflow?",
    },
    options: {
      en: [
        "By parsing queries, deciding which tools to invoke, and managing the sequence of actions needed to complete the task",
        "By executing every possible tool in parallel with no decision logic",
        "By storing workflow steps only in browser cookies",
        "By requiring the user to hardcode every tool call in advance with no autonomy",
      ],
      pl: [
        "Przez parsowanie zapytań, decyzję które narzędzia wywołać oraz zarządzanie sekwencją działań potrzebnych do ukończenia zadania",
        "Przez równoległe wykonanie każdego możliwego narzędzia bez logiki decyzyjnej",
        "Przez przechowywanie kroków workflow wyłącznie w cookies przeglądarki",
        "Przez wymóg ręcznego zahardkodowania każdego wywołania narzędzia bez autonomii",
      ],
    },
    correctIndex: 0,
  },
  {
    id: 18,
    question: {
      en: "What is LangGraph, and how does it differ from LangChain?",
      pl: "Czym jest LangGraph i czym różni się od LangChain?",
    },
    options: {
      en: [
        "LangGraph is a vector database; LangChain is a GPU driver",
        "They are the same product with two marketing names",
        "LangGraph focuses on graph-structured task dependencies, enabling more complex interconnected flows than LangChain’s more linear sequences",
        "LangGraph only supports image generation, while LangChain only supports audio",
      ],
      pl: [
        "LangGraph to baza wektorowa; LangChain to sterownik GPU",
        "To ten sam produkt pod dwiema nazwami marketingowymi",
        "LangGraph skupia się na zależnościach zadań w strukturze grafu, umożliwiając bardziej złożone, powiązane przepływy niż bardziej liniowe sekwencje LangChain",
        "LangGraph obsługuje tylko generację obrazów, a LangChain tylko audio",
      ],
    },
    correctIndex: 2,
  },
  {
    id: 19,
    question: {
      en: "How would you use LangGraph for building a contextual question-answering system?",
      pl: "Jak użyłbyś LangGraph do budowy kontekstowego systemu Q&A?",
    },
    options: {
      en: [
        "Define a single node that always skips retrieval and generates randomly",
        "Store all questions as CSV rows and never connect them",
        "Replace LangGraph with a spreadsheet of manual answers",
        "Define nodes for retrieval, filtering, summarization, and generation, then wire dependencies so contextually relevant steps run in the right order",
      ],
      pl: [
        "Zdefiniować jeden węzeł, który zawsze pomija retrieval i generuje losowo",
        "Zapisać wszystkie pytania jako wiersze CSV i nigdy ich nie łączyć",
        "Zastąpić LangGraph arkuszem z ręcznymi odpowiedziami",
        "Zdefiniować węzły: retrieval, filtrowanie, summarization, generacja — i połączyć zależności, by kontekstowo istotne kroki szły we właściwej kolejności",
      ],
    },
    correctIndex: 3,
  },
  {
    id: 20,
    question: {
      en: "How would you evaluate the performance of a RAG system?",
      pl: "Jak ocenisz wydajność / jakość systemu RAG?",
    },
    options: {
      en: [
        "Only by measuring how colorful the UI buttons are",
        "Using retrieval precision/recall, generative accuracy, response relevance, user satisfaction, and often human/expert review for coherence and factuality",
        "By counting the number of vector databases installed on the laptop",
        "Evaluation is unnecessary if the demo looks impressive once",
      ],
      pl: [
        "Wyłącznie mierząc, jak kolorowe są przyciski UI",
        "Przez precision/recall retrieval, dokładność generacji, trafność odpowiedzi, satysfakcję użytkowników oraz często ocenę ekspertów pod kątem spójności i faktów",
        "Przez liczenie liczby baz wektorowych zainstalowanych na laptopie",
        "Ewaluacja jest zbędna, jeśli demo raz wygląda imponująco",
      ],
    },
    correctIndex: 1,
  },
  {
    id: 21,
    question: {
      en: "Explain the role of embeddings in powering search capabilities within a RAG system.",
      pl: "Wyjaśnij rolę embeddingów w wyszukiwaniu w systemie RAG.",
    },
    options: {
      en: [
        "Embeddings enable semantic search so retrieved documents match meaning, not just keywords, improving context for generation",
        "Embeddings are used only to compress images before upload",
        "Embeddings replace the generative model and answer questions directly as integers",
        "Embeddings are optional decorative metadata with no effect on retrieval",
      ],
      pl: [
        "Embeddingi umożliwiają wyszukiwanie semantyczne — dokumenty pasują znaczeniem, nie tylko słowami kluczowymi, co poprawia kontekst generacji",
        "Embeddingi służą wyłącznie do kompresji obrazów przed uploadem",
        "Embeddingi zastępują model generatywny i odpowiadają na pytania bezpośrednio jako liczby całkowite",
        "Embeddingi to opcjonalne, dekoracyjne metadane bez wpływu na retrieval",
      ],
    },
    correctIndex: 0,
  },
];
