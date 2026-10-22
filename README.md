# Elevvo Client Registration

A dynamic and responsive **client registration webpage** built using HTML5, CSS3, and vanilla JavaScript. This project provides a registration form that validates user input, handles form events, and adds each valid entry to a table in real time.

## Project Overview

The **Elevvo Client Registration** project is a front-end web application created for Module 3 of the Elevvo Pathways Frontend Developer Internship. It demonstrates JavaScript DOM manipulation, event handling, and client-side form validation.

The webpage includes:

- Client registration form
- Personal details section
- Contact details section
- Real-time form validation
- Dynamic table of registered clients

## Features

### Registration Form
The form is divided into two sections:

- **Personal Details:** Name, Date of Birth, Gender, Profession
- **Contact Details:** Email, Phone Number, Address

Required fields are marked with an asterisk (`*`).

### Form Validation
Validation is handled entirely in JavaScript:

- **Name:** required
- **Date of Birth:** required and cannot be a future date
- **Email:** required and must be in a valid format
- **Phone Number:** required, numeric, and 7 to 11 digits long

Invalid fields are highlighted with a red border and an inline error message. Incorrect or incomplete data is never added to the table.

### Dynamic Client Table
- Valid submissions are added instantly to the **Registered Clients** table
- No page reload is needed
- Empty optional fields are displayed as `-`

### Form Events
- **Submit:** validates the data and adds a new table row
- **Reset:** clears the form and all error messages
- After a successful submission, the form clears and focus returns to the Name field

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure, form, and table |
| CSS3 | Styling, grid/flexbox layout, and responsive design |
| JavaScript (ES6) | Validation, event handling, and DOM manipulation |
| Semantic HTML | Meaningful and accessible page structure |

## Project Structure

```text
Elevvo_Frontend_Development_mod3/
│
├── index.html
├── style.css
├── script.js
├── problem statement.md
└── README.md
```

### File Description

**`index.html`**
Contains the HTML structure of the registration form and the clients table.

**`style.css`**
Contains the styling, layout, and responsive design of the page.

**`script.js`**
Contains the validation logic, event handlers, and the code that adds rows to the table.

**`problem statement.md`**
Describes the project requirements.

**`README.md`**
Project documentation and information about the webpage.

## JavaScript Functions

| Function | Purpose |
|---|---|
| `showError()` | Displays an error message and marks the input as invalid |
| `clearErrors()` | Removes all error messages and invalid styles |
| `isValidEmail()` | Checks the email format |
| `validateForm()` | Runs all validation rules and returns true or false |
| `makeCell()` | Creates a table cell, using `-` for empty values |
| `addRow()` | Builds a table row and appends it to the table body |

## Accessibility

The project uses several HTML accessibility features, including:

- Semantic elements such as `<header>`, `<main>`, `<section>`, and `<footer>`
- Form fields grouped with `<fieldset>` and `<legend>`
- Labels connected to their corresponding inputs using `for` and `id`
- Visible error messages next to each field
- Scrollable table wrapper for small screens

## Future Improvements

- Save registered clients using `localStorage`
- Add edit and delete options for table rows
- Add search, sort, and filter for the table
- Add ARIA attributes for error messages

## Author

**Mahmuda Adeeba Tul Husna**
**Role:** Front-end Developer Intern
**Location:** Dhaka, Bangladesh

### Profiles

- GitHub: Adeeba333

## License

This project is created for educational and portfolio purposes.

© 2026 Mahmuda Adeeba Tul Husna. All rights reserved.
