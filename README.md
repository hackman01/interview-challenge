## Getting Started

Step 1: Clone the repository to your local system. Ensure not to fork it.

Step 2: Create a new branch - "your_name_vidyalai" in your local repository for making changes.

Step 3: Install packages and make sure you are using Node.js version 18.20 or higher.

```bash
npm i
```

Step 4: Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result 

## TASKS 
**Completed Tasks**
- [x] Fix carousel scrolling UI: When navigation buttons are clicked, ensure a new image is shown. Additionally, center the carousel navigation buttons vertically relative to the image.
- [x] Replace dummy images by fetching each album of post using "https://jsonplaceholder.typicode.com/albums/1/photos" in /api/v1/posts route.
- [x] Make the top nav bar sticky during scrolling.
- [x] Implement functionality to load more posts upon clicking the "Load More" button. Hide the "Load More" button if no posts exist.
- [x] Display the user's name and email in each post. Show the first letter for both the first and last names.

  ![Screenshot from 2024-05-04 08-35-47](https://github.com/user-attachments/assets/14bbb6e4-01a7-4186-af9e-a453cff446f8)

- [x] Convert `UserList` React class component to functional component and convert `witUserData` HOC (Higher order Component) to a custom React hooks
- [x] Convert `useWindowWidth` hook to ContextAPI. Declare the ContextAPI globally and access the `isSmallerDevice` property.









