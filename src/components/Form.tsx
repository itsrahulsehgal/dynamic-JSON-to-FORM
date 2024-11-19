import React, { useState } from "react";

interface Field {
  id: string;
  type: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  validation?: {
    pattern?: string;
    message?: string;
  };
  options?: { value: string; label: string }[];
}

interface Schema {
  formTitle: string;
  formDescription?: string;
  fields: Field[];
}

interface FormProps {
  schema: Schema;
  theme: string;
}

const Form: React.FC<FormProps> = ({ schema, theme }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (fieldId: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldId]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className={`${theme === "dark" ? "dark" : ""} max-w-3xl mx-auto p-6`}>
      <h1 className="text-2xl font-bold mb-6 text-center">{schema.formTitle}</h1>
      {schema.formDescription && (
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
          {schema.formDescription}
        </p>
      )}
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      >
        {schema.fields.map((field) => (
          <div key={field.id} className="mb-5">
            <label
              htmlFor={field.id}
              className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
            >
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            {field.type === "text" || field.type === "email" ? (
              <input
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                required={field.required}
                pattern={field.validation?.pattern}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200"
              />
            ) : field.type === "select" ? (
              <select
                id={field.id}
                required={field.required}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200"
              >
                <option value="">Select...</option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === "radio" ? (
              field.options?.map((option) => (
                <div key={option.value} className="flex items-center mb-2">
                  <input
                    type="radio"
                    name={field.id}
                    value={option.value}
                    required={field.required}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    className="mr-2"
                  />
                  <label className="dark:text-gray-300">{option.label}</label>
                </div>
              ))
            ) : field.type === "textarea" ? (
              <textarea
                id={field.id}
                placeholder={field.placeholder}
                required={field.required}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200"
              ></textarea>
            ) : null}
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Submit
        </button>
      </form>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-lg text-center">
            <h2 className="text-lg font-bold text-gray-700 dark:text-gray-200">
              Submission Successful!
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Thank you for filling out the form.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
