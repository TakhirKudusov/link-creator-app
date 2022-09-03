const handleGetLogged = (): boolean | null => {
  const isLogged = localStorage.getItem("isLogged");
  if (isLogged !== null) {
    return JSON.parse(isLogged) === "true";
  }
  return isLogged;
};

export { handleGetLogged };
