import React, { useState } from "react";
import JSONEditor from "./components/JSONEditor";
import Form from "./components/Form";
import { FormSchema } from "./types/FormSchema";
import { useTheme } from "./ThemeContext"; // Import the useTheme hook

const App: React.FC = () => {
  const [schema, setSchema] = useState<FormSchema | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Access dark mode state and toggle function
  const { theme, toggleTheme } = useTheme();

  const handleJSONChange = (json: string) => {
    try {
      const parsed = JSON.parse(json) as FormSchema;
      setSchema(parsed);
      setError(null);
    } catch (err) {
      setError("Invalid JSON format");
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-950 text-gray-200" : "bg-gray-50 text-gray-800"
      }`}
    >
      <header className="flex justify-between items-center px-6 py-4 shadow-md bg-gray-100 dark:bg-gray-900">
        <h1 className="text-xl font-bold tracking-wide">
          Dynamic JSON Form Builder
        </h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-md font-medium transition-all bg-blue-600 text-white hover:bg-blue-500 focus:ring focus:ring-blue-300"
        >
          {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </header>

      <main className="p-6 flex flex-col lg:flex-row gap-6">
        {/* JSON Editor */}
        <section
          className="flex-1 p-4 rounded-lg shadow-lg border transition-all 
          bg-white dark:bg-gray-800 dark:border-gray-700"
        >
          <h2 className="text-lg font-semibold mb-4">JSON Schema Editor</h2>
          <div className="relative">
            <JSONEditor onChange={handleJSONChange} error={error} />
            {error && (
              <p className="absolute top-full mt-2 text-sm text-red-500">
                {error}
              </p>
            )}
          </div>
        </section>

        {/* Form Preview */}
        <section
          className="flex-1 p-4 rounded-lg shadow-lg border transition-all 
          bg-gray-50 dark:bg-gray-900 dark:border-gray-700"
        >
          <h2 className="text-lg font-semibold mb-4">Form Preview</h2>
          {schema ? (
            <Form schema={schema} theme={theme} />
          ) : (
            <p className="text-sm italic text-gray-600 dark:text-gray-400">
              Enter a valid JSON schema to generate a preview.
            </p>
          )}
        </section>
      </main>
    </div>
  );
};

export default App;
