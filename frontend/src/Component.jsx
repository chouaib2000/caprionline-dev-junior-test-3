"use client";

import { Label, Select } from "flowbite-react";


export function Component({ setMovies, movies }) {
  function handleSort(event) {
    const sortBy = event.target.value;
    let sortedMovies = [...movies];

    if (sortBy === 'year') {
      sortedMovies.sort((a, b) => b.year - a.year);
    } else if (sortBy === 'rating') {
      sortedMovies.sort((a, b) => b.rating - a.rating);
    }

    setMovies(sortedMovies);
  }

  return (
    <div className="max-w-[180px]">
      <div className="mb-2 block">
        <Label htmlFor="sort">Sort by:</Label>
      </div>
      <Select id="sort" onChange={handleSort} defaultValue="">
        <option value="" disabled hidden>Select an option</option>
        <option value="year">Year</option>
        <option value="rating">Rating</option>
      </Select>
    </div>
  );
}