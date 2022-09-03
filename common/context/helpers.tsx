const handleGetLogged = (): string | null => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken !== null) {
    return JSON.parse(accessToken);
  }
  return accessToken;
};

export { handleGetLogged };
