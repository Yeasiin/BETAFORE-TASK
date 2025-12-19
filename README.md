## How to Run

1. Clone the repository.
2. Install dependencies: `bun install`
   - Install Bun if not already installed: https://bun.com/docs/installation
   - On Windows: `powershell -c "irm bun.sh/install.ps1|iex"`
3. Create a `.env` file by copying `.env.example`.
4. Set `API_BASE_URL` in `.env` to `https://mm-assesment-server.vercel.app/api/v1`.
5. Run the development server: `bun dev`

- Project Structure\*\*:

  - `actions/`: All communication with the external API is handled exclusively through Server Actions. This encapsulates all data-fetching logic, ensures no API calls are made from the client, and leverages Next.js's caching capabilities.
  - `lib/`: Contains shared TypeScript type definitions (`types.ts`) to ensure type safety across the application

- Assumptions\*\*

  - New Arrivals: The "New Arrivals" section fetches the first 10 products from the API using the `?limit=10` parameter. I assumed this would return the most recent items.
  - Product Pricing Display: The `ProductCard.tsx` component displays a "discounted" price. I assumed a fictional original price (API price + 2) to demonstrate styling for both a sale price and an original price.
  - Default Category: On initial page load, the "Best Deals" section defaults to displaying products from the "electronics" category if no other category is selected via the URL.
