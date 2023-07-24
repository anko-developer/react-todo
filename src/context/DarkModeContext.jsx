import { createContext, useState, useContext, useEffect } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({children}) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    // setDarkMode((prev) => !prev);
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  // 처음 mount 됐을 때 useEffect 실행으로 초기값 설정 하는 것!
  useEffect(() => {
    const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);
  return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
    {children}
  </DarkModeContext.Provider>
}

function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}

// hook 만들기
export const useDarkMode = () => useContext(DarkModeContext);