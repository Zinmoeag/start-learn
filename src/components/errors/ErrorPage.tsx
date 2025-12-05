export default function ErrorPage({
  statusCode = "",
  title = "Something went wrong",
  message = "An unexpected error occured. Try refreshing the page, or head back home.",
  onRetry,
  showHome = true,
  homeHref = "/",
}: {
  statusCode?: number | string;
  title?: string;
  message?: string;
  onRetry?: () => void;
  showHome?: boolean;
  homeHref?: string;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <section className="p-10 flex flex-col justify-center gap-6">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-red-50 p-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.72-1.36 3.485 0l5.454 9.69c.75 1.333-.213 2.99-1.742 2.99H4.545c-1.53 0-2.492-1.657-1.742-2.99l5.454-9.69zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-7a1 1 0 00-.993.883L9 7v4a1 1 0 001.993.117L11 11V7a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Error{statusCode ? ` • ${statusCode}` : ""}</p>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">{title}</h1>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">{message}</p>

          <div className="flex flex-wrap gap-3">
            {onRetry && (
              <button
                onClick={onRetry}
                className="inline-flex items-center px-4 py-2 rounded-lg border border-transparent text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-label="Retry"
              >
                Retry
              </button>
            )}

            {showHome && (
              <a
                href={homeHref}
                className="inline-flex items-center px-4 py-2 rounded-lg border text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Home
              </a>
            )}

            <a
              href="mailto:support@example.com"
              className="inline-flex items-center px-4 py-2 rounded-lg border text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Contact support
            </a>
          </div>

          <p className="text-xs text-gray-400 mt-4">Error ID: <span className="font-mono">—</span></p>
        </section>

        <aside className="hidden md:flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white p-6">
          {/* Decorative illustration — responsive & accessible */}
          <div className="max-w-sm">
            <svg viewBox="0 0 600 400" className="w-full h-auto" role="img" aria-hidden>
              <g fill="none" fillRule="evenodd">
                <rect width="600" height="400" rx="24" fill="#EEF2FF" />
                <g transform="translate(80 40)">
                  <circle cx="200" cy="120" r="72" fill="#FFFFFF" opacity="0.9" />
                  <path d="M40 320c60-80 180-80 240 0" stroke="#C7D2FE" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                  <rect x="0" y="0" width="120" height="80" rx="14" fill="#FFFFFF" opacity="0.9" />
                </g>
              </g>
            </svg>

            <p className="mt-6 text-sm text-gray-500">If the problem persists, please try clearing your browser cache, or contact the site administrator.</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
