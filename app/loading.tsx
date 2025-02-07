import React from "react";

export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-bg-[#02071D] to-indigo-700">
            <div className="flex flex-col items-center">
                {/* Spinner */}
                <div
                    className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"
                    role="status"
                >
                    <span className="sr-only">Loading...</span>
                </div>
                {/* Loading text */}
                <p className="mt-4 text-xl font-semibold text-white">Loading...</p>
            </div>
        </div>
    );
}
