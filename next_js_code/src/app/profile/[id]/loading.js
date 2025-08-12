// app/loading.js
export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="flex space-x-2">
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            className="h-3 w-3 rounded-full bg-gray-600 dark:bg-gray-400 animate-bounce"
            style={{
              animationDelay: `${dot * 0.2}s`,
              animationDuration: '0.8s'
            }}
          />
        ))}
      </div>
    </div>
  );
}