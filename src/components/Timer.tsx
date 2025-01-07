import { useEffect, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState<string>("00:00:00");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animate-float">
      <h1 className="text-6xl md:text-8xl font-bold text-lottery-foreground tracking-wider font-mono">
        {time}
      </h1>
      <p className="text-lottery-accent mt-2 text-sm md:text-base">
        Time until next draw
      </p>
    </div>
  );
};