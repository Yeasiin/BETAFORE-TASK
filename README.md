## How to Run

1. Clone the repository.
2. Install dependencies: `bun install`
   - Install Bun if not already installed: https://bun.com/docs/installation
   - On Windows: `powershell -c "irm bun.sh/install.ps1|iex"`
3. Create a `.env` file by copying `.env.example`.
4. Set `API_BASE_URL` in `.env` to `https://mm-assesment-server.vercel.app/api/v1`.
5. Run the development server: `bun dev`

- Assumptions Taken:
  - "A hardcoded discount of RS 2 is applied to products on the product card for display purposes."
