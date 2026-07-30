# GenAI Interview Quiz

Quizy ABCD (PL/EN) do rozmów GenAI:

1. **RAG & GenAI** — retrieval, embeddingi, LangChain/LangGraph, prompting
2. **Accenture GenAI Interview** — fundamenty LLM, produkcyjny RAG, security, multi-agent

## Lokalnie

```bash
npm install
npm run dev
```

## GitHub Pages

Po pierwszym pushu na `main` workflow `.github/workflows/deploy-pages.yml` zbuduje i wypublikuje stronę.

W repo: **Settings → Pages → Source: GitHub Actions**.

Adres (przy nazwie repo `rag-quiz`): `https://<user>.github.io/rag-quiz/`

Lokalny build pod Pages:

```bash
VITE_BASE=/rag-quiz/ npm run build
```
