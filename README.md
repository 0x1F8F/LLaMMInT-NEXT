# LLaMMInT AI
## Overview
This is a Next(Next 13.5) web application to chat with LLaMMInT which is a fine tuned version of Mistral-7b-Instruct
## Requirements
- Bun(1.0.4)
- Next(13.5)
- Redis(7.2.x)
- Jotai
- Python
    - websockets
    - pytorch
    - transformers
    - model(LLaMMInT/Mistral)
## Run

- To host over network
`bunx next -H 0.0.0.0 -p 80`
- To run locally
`bun run dev`