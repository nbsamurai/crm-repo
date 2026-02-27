import { useCallback, useEffect, useState } from "react";
import { initializePaddle } from "@paddle/paddle-js";

export function usePaddle() {
  const [paddle, setPaddle] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const initPaddle = async () => {
      const clientToken = import.meta.env.VITE_PADDLE_CLIENT_TOKEN;

      if (!clientToken) {
        console.error(
          "Missing VITE_PADDLE_CLIENT_TOKEN in environment variables."
        );
        return;
      }

      try {
        const paddleInstance = await initializePaddle({
          environment: "sandbox",
          token: clientToken,
        });

        if (isMounted) {
          setPaddle(paddleInstance ?? null);
        }
      } catch (error) {
        console.error("Failed to initialize Paddle:", error);
      }
    };

    initPaddle();

    return () => {
      isMounted = false;
    };
  }, []);

  const openCheckout = useCallback(
    async (items) => {
      if (!paddle) {
        console.error("Paddle is not ready yet.");
        return;
      }

      paddle.Checkout.open({ items });
    },
    [paddle]
  );

  return {
    isReady: paddle !== null,
    openCheckout,
  };
}
