# E-Commerce Project Instructions

## 1. Create a Navigation Bar

- Design a navigation bar similar to the one in the project template.
- Link all the pages created:
  - **Signup Page**
  - **Login Page**
  - **Men's Page**
  - **Women's Page**
- Ensure that each link redirects to the appropriate page.
- Authentication:
  - Check if the user is logged in. If not, restrict access to product pages (Men's and Women's pages).
  - Redirect unauthenticated users to the login page if they attempt to access restricted product pages.

## 2. Add to Cart Functionality

- **Product Page** : Implement "Add to Cart" functionality.
  - When a user clicks "Add to Cart," the product should be added to the user's cart.
  - Store cart data in local storage.
- **Cart Page**:
  - Create a Cart.html page to display all products added to the cart.
  - Allow users to:
    - Increase the quantity of items in the cart, with price updates reflecting the new quantity.
    - Delete items from the cart.
  - Display the total number of items and the total price at the top right corner of the page.
- **Promo Code**:
  - Provide an input box and "Apply Promo" button.
  - If the user enters the code flmi30, apply a 30% discount and update the total price accordingly.

## 3. Payment Page

- **Payment Form**:
  - Create a form with fields for card number, CVV, expiry date, and name.
  - Use appropriate input types for each field.
  - Validate the form so that even one incorrect field shows an alert with "Error."
  - Hardcode valid values for card number, CVV, etc. (Name can be any input).
  - If all data is correct, redirect the user to an OTP.html page.
- **OTP Verification**:
  - On OTP.html, prompt the user to enter an OTP.
  - If the OTP entered is 1234, display an alert saying "Payment successful."

## 4. Product Page Enhancements

- **Sorting Functionality** (for both mens.html and womens.html):
  - Sort by Price:
    - High to Low
    - Low to High
  - Sort by Name:
    - Ascending
    - Descending
- **Filter by Category**:
  - Add a "brand" key to the men's and women's product data objects to enable filtering by category.
