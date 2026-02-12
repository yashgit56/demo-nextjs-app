export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 animate-pulse">
      <div className="max-w-3xl mx-auto">
        {/* Back Link */}
        <div className="h-4 w-32 bg-gray-200 rounded mb-6"></div>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          {/* Image */}
          <div className="flex items-center justify-center bg-gray-100 rounded-xl p-6">
            <div className="w-[300px] h-[300px] bg-gray-200 rounded-lg"></div>
          </div>

          {/* Title */}
          <div className="h-8 w-3/4 bg-gray-200 rounded"></div>

          {/* Category */}
          <div className="h-6 w-24 bg-gray-200 rounded-full"></div>

          {/* Price */}
          <div className="h-8 w-32 bg-gray-200 rounded"></div>

          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>

          {/* Rating */}
          <div className="flex gap-3">
            <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
            <div className="h-6 w-24 bg-gray-200 rounded"></div>
          </div>

          {/* Button */}
          <div className="h-12 w-full bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
