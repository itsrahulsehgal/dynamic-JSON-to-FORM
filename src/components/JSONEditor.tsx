import React, { useState } from "react";

interface JSONEditorProps {
  onChange: (json: string) => void;
  error: string | null;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ onChange, error }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const json = e.target.value;
    setValue(json);
    onChange(json);
  };

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-80 p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-mono text-sm bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
        value={value}
        onChange={handleChange}
        placeholder="Paste your JSON schema here..."
      />
      {error && (
        <div className="bg-red-100 text-red-700 border border-red-300 rounded-md p-2 text-sm font-medium">
          {error}
        </div>
      )}
    </div>
  );
};

export default JSONEditor;
