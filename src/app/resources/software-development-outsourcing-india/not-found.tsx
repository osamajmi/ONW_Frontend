import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Resource not found</h1>
        <Link href="/resources" className="text-primary hover:underline">Browse resources</Link>
      </div>
    </main>
  );
}
