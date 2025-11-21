# Frontend Assignment 
  
  This webpage consists of Navbar, and a intro page , trendy products , top selling products, customer review, best o2 card, footer of the web page.

## Components

  * Navbar - Main navigation with links and cart icon.
  * HeroBanner - Introductory banner section.
  * PlantCard / ProductsCard - Display product information.
  * SectionTitle - Reusable component for section headings.
  * Button - Reusable button component.
  * TestimonialCard - Displays customer reviews with navigation.
  * Footer - Footer section with additional info and links. 
  * CartContext - This context provides data and actions to child components through React's Context API.

## Data Flow
  
  The application's state and data, such as product info and cart details, are managed globally via a React Context called CartContext. This context provides data and actions to child components through React's Context API, enabling components like ProductsCard and Navbar to access and manipulate shared state seamlessly.

## Tech Stack used
  
  React.js.
  Tailwind css.
  Javascript.
  JSX.
  CSS.
  HTML.

## Instructions to run

 ### Install all required dependencies
 npm install

 ### Start the Vite development server
 npm run dev
