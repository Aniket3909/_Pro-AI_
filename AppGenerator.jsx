// This will show loading/processing state
const AppGenerator = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl animate-pulse">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl animate-spin"></div>
        <div>
          <h3 className="text-xl font-bold text-white">Pro AI is working...</h3>
          <p className="text-white/70">Generating your perfect app</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-2 bg-white/30 rounded animate-pulse"></div>
        <div className="h-2 bg-white/20 rounded animate-pulse"></div>
        <div className="h-2 bg-white/10 rounded animate-pulse w-3/4"></div>
      </div>
    </div>
  );
};

export default AppGenerator;
