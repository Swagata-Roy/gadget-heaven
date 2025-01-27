# GadgetHeaven - Your Tech Shopping Destination 🛍️

Welcome to GadgetHeaven, a modern e-commerce platform for all your gadget needs. Browse through our extensive collection of computers, phones, smart watches, and other tech accessories.

## Live Website Link

[Visit GadgetHeaven](https://gadgetheavenofficial.netlify.app/)

## Requirements Document Link

[Project Requirements](./Requirements.pdf)

## React Fundamental Concepts Used

1. **Component Architecture**
   - Reusable components like ProductCard, Banner
   - Layout components for consistent structure
   - Component composition and props drilling avoidance

2. **React Hooks**
   - useState for local state management
   - useEffect for side effects
   - useContext for global state access
   - Custom hooks (useTitle) for shared functionality

3. **Context API**
   - CartContext for shopping cart management
   - WishListContext for wishlist functionality
   - Global state management without prop drilling

4. **React Router**
   - Dynamic routing with nested routes
   - Protected routes
   - URL parameter handling
   - useLocation for route-based styling
   - useNavigate for programmatic navigation

5. **React Performance Optimization**
   - useMemo for expensive calculations
   - Proper dependency arrays in useEffect
   - Conditional rendering optimization

## Data Management

- **Context API**: Used for managing global state like cart and wishlist items
- **Local Storage**: Persists cart and wishlist data across page refreshes
- **State Management**:
  - Cart items with add/remove functionality
  - Wishlist with add/remove capability
  - Dynamic product filtering by category

## Key Features

1. **Responsive Design & Dynamic UI**
   - Fully responsive layout
   - Dynamic background colors based on route
   - Smooth transitions and animations
   - Category-based product filtering

2. **Shopping Cart Management**
   - Add/remove products
   - Price sorting functionality
   - Total price calculation
   - Purchase completion with modal
   - Cart data persistence

3. **Wishlist System**
   - Add/remove from wishlist
   - Disable heart icon after adding
   - Wishlist data persistence
   - Easy access to wished items

4. **Product Management**
   - Detailed product information
   - Category-based filtering
   - Availability status
   - Rating system
   - Comprehensive specifications

5. **Advanced Features**
   - Toast notifications for actions
   - Dynamic page titles
   - Statistics dashboard
   - Sort products by price
   - Error handling with 404 page