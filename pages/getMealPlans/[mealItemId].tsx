import React from 'react';
import { useRouter } from 'next/router';

const MealItemId = () => {
  const router = useRouter();
  const getDataFromLocalStorage = (key: string): any | null => {
    if (typeof window !== "undefined") {
      // Check if window is defined (to avoid issues during server-side rendering)
      const storedData = localStorage.getItem(key);
      return storedData ? JSON.parse(storedData) : null;
    }
    return null;
  };

  const recipess = getDataFromLocalStorage("recipes");
  console.log(recipess);

  // Get the id from the URL query parameters
  const { id } = router.query;

  // Find the recipe with the matching id
  const selectedRecipe = recipess?.find((recipe: any) => recipe.id === id);

  return (
    <div>
      {selectedRecipe && (
        <div>
          <h1>{selectedRecipe.id}</h1>
          {/* Render other content of the selected recipe */}
        </div>
      )}
    </div>
  );
};

export default MealItemId;
