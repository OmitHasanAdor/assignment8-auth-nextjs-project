
import Link from "next/link";
// import { Flame, MoveLeft, Newspaper } from 'lucide-react';


const NotFound = () => {
    return (
        <div>
            <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      {/* Visual Icon */}
      <div className="relative mb-8">
       
     
      </div>

      {/* Error Message */}
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Page is not found!
      </h1>
      <p className="text-slate-600 max-w-md mb-8">
    The page you are looking for is not available. Visit our home page to explore more content and stay updated on our fiery adventures.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/"
          className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
        
          Back to the Lair (Home)
        </Link>
        
        <Link 
          href="/"
          className="flex items-center justify-center gap-2 border border-slate-300 hover:bg-slate-100 text-slate-700 px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Explore other products
        </Link>
      </div>

      {/* Decorative Background Element */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 via-red-600 to-orange-500" />
    </div>
        </div>
    );
};

export default NotFound;