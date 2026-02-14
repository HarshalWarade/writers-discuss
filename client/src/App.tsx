import { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState("Checking vibe...");

  useEffect(() => {
    const checkVibe = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_DEPLOYED_BE_DOMAIN}/vibe-check`,
          {
            method: "GET",
            credentials: "include",
          },
        );

        if (!response.ok) {
          throw new Error("Failed to connect to backend");
        }

        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error("Error:", error);
        setMessage("Backend not reachable ❌");
      }
    };

    checkVibe();
  }, []);

  return (
    <div>
      <h2>Writers Discuss</h2>
      <div>{message}</div>
    </div>
  );
};

export default App;
