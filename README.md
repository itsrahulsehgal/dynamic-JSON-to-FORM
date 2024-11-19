# Dynamic Form Generator

A dynamic, real-time form generator application built using React, TypeScript, and Tailwind CSS. This app takes a JSON schema as input, validates it, and dynamically generates a styled, responsive form.

## Features

- **Real-Time Updates**: Instant updates to the form preview as the JSON schema is edited.
- **Syntax Highlighting & Validation**: Validates JSON in real time and displays error messages for invalid syntax.
- **Responsive Design**: Split-screen interface on larger screens; stacked layout on smaller screens.
- **Dark Mode Support**: Switch between light and dark themes.
- **Form Validation**: Supports validation for all form fields and displays appropriate error messages.
- **Submission**: Submits form data to the console and displays a success message.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Form Management**: React Hook Form
- **Deployment**: Vercel

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Setup Instructions](#setup-instructions)
3. [Usage](#usage)
4. [Example JSON Schemas](#example-json-schemas)
5. [Deployment](#deployment)

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or higher)
- npm
- A modern web browser

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/itsrahulsehgal/dynamic-JSON-to-FORM.git
   ```
2. Navigate to the project directory:
   ```bash
   cd dynamic-JSON-to-FORM
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
4. Open the application in your browser:

   By default, the application will run on http://localhost:3000. Open this URL in your browser to start using the app.

## Usage

1. **Paste a valid JSON schema into the JSON Editor**  
   On the left side of the interface, paste your JSON schema into the editor.

2. **View the dynamically generated form**  
   The form will be generated in real-time and displayed in the Form Preview panel on the right side.

3. **Fill out the form and submit**  
   Complete the form and click the **"Submit"** button to log the submitted data to the console.

4. **Switch between light and dark themes**  
   Use the theme toggle button (if available) to switch between light and dark modes for better visibility.

---

## Example JSON Schemas

### **Basic Example**
```json
{

  "formTitle": "Project Requirements Survey",

  "formDescription": "Please fill out this survey about your project needs",

  "fields": [

    {

      "id": "name",

      "type": "text",

      "label": "Full Name",

      "required": true,

      "placeholder": "Enter your full name"

    },

    {

      "id": "email",

      "type": "email",

      "label": "Email Address",

      "required": true,

      "placeholder": "you@example.com",

      "validation": {

        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",

        "message": "Please enter a valid email address"

      }

    },

    {

      "id": "companySize",

      "type": "select",

      "label": "Company Size",

      "required": true,

      "options": [

        { "value": "1-50", "label": "1-50 employees" },

        { "value": "51-200", "label": "51-200 employees" },

        { "value": "201-1000", "label": "201-1000 employees" },

        { "value": "1000+", "label": "1000+ employees" }

      ]

    },

    {

      "id": "industry",

      "type": "radio",

      "label": "Industry",

      "required": true,

      "options": [

        { "value": "tech", "label": "Technology" },

        { "value": "healthcare", "label": "Healthcare" },

        { "value": "finance", "label": "Finance" },

        { "value": "retail", "label": "Retail" },

        { "value": "other", "label": "Other" }

      ]

    },

    {

      "id": "timeline",

      "type": "select",

      "label": "Project Timeline",

      "required": true,

      "options": [

        { "value": "immediate", "label": "Immediate (within 1 month)" },

        { "value": "short", "label": "Short-term (1-3 months)" },

        { "value": "medium", "label": "Medium-term (3-6 months)" },

        { "value": "long", "label": "Long-term (6+ months)" }

      ]

    },

    {

      "id": "comments",

      "type": "textarea",

      "label": "Additional Comments",

      "required": false,

      "placeholder": "Any other details you'd like to share..."

    }

  ]

}
```

## Deployment

The application is deployed and accessible at the following link:  
[View Demo on Vercel](https://dynamic-json-to-form.vercel.app/)
