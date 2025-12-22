import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-2xl text-center w-[350px]">
        <h3 className="text-2xl font-semibold mb-3">Welcome to Pay-Link</h3>
        <p className="text-gray-600 mb-6">This is your first application.</p>

        <Link 
          href="/dashboard"
          className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
