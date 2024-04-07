import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
     /* Indigo */
    --color-brand-50: #eef2ff;
    --color-brand-100: #e0e7ff;
    --color-brand-200: #c7d2fe;
    --color-brand-500: #6366f1;
    --color-brand-600: #4f46e5;
    --color-brand-700: #4338ca;
    --color-brand-800: #3730a3;
    --color-brand-900: #312e81;

    --brand-atualizada: #4104a8;

    /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;

  --color-green-100: #dcfce7;
  --color-green-700: #15803d;

  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;

  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;

  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    /* Creating animations for dark mode */
    transition: background-color 0.3s, border 0.3s;
}

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Poppins", sans-serif;
    
    color: var(--color-grey-700);
    //transition: color 0.3s, background-color 0.3s;
    //line-height: 1.5;

    font-size: 1.6rem;
    min-height: 100vh;
  }

  img {
    max-width: 100%;
    /* For dark mode */
    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    font: inherit;
    color: inherit;
    cursor: pointer;
  }

`;

export default GlobalStyles;
