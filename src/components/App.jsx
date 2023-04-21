import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Navbar from './UI/Navbar';
import HomePage from './Pages/HomePage';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import RecipePage from './Pages/RecipePage';
import LikePage from './Pages/LikePage';
import OneRecipePage from './Pages/OneRecipePage';

export default function App({
  user, allRecipe, oneCook, like,
}) {
  const [recipeState, setRecipeState] = useState(allRecipe || []);
  const submitHandler = async (e) => {
    const formData = Object.fromEntries(new FormData(e.target));
    try {
      const response = await axios.post('/recipe', formData);
      if (response.status === 200) {
        setRecipeState((prev) => [...prev, response.data]);
      }
    } catch (error) {
      console.log('Ошибка добавления рецепта!');
    }
  };
  return (
    <div className="container">
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<HomePage recipeState={recipeState} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/recipe" element={<RecipePage submitHandler={submitHandler} />} />
        <Route path="/like" element={<LikePage like={like} recipeState={recipeState} user={user} />} />
        <Route path="/recipe/:id" element={<OneRecipePage oneCook={oneCook} />} />

      </Routes>
    </div>
  );
}
