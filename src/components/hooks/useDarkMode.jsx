import React, { useState, useEffect } from "react";
import useLocalStorage from './useLocalStorage'
export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', {DarkMode: 'off'})
  const darkToggle = document.querySelector('.dark-mode')
  useEffect (setDarkMode){
  darkToggle (){
  if (darkMode === 'on') {
   toggleDarkMode = addEventListener('click', () => {
        darkToggle.classList.toggle();
      });
  }}}
};