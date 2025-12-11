export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm text-gray-600 font-medium animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
