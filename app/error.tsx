"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-md border border-gray-200 bg-white p-6 text-center">
        <h2 className="mb-2 text-lg font-semibold text-gray-900">
          Something went wrong
        </h2>

        <p className="mb-4 text-sm text-gray-600">
          {error.message || "An unexpected error occurred."}
        </p>

        <button
          onClick={reset}
          className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
