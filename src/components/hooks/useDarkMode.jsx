import React, { useState, useEffect } from "react";
import useLocalStorage from './useLocalStorage'
export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('key')
};