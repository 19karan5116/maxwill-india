export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse">
        <div className="w-12 h-12 border-4 border-maxwill-gray-200 border-t-maxwill-primary rounded-full animate-spin" />
      </div>
    </div>
  );
}
