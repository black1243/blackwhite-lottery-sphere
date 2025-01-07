import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const TicketPurchase = () => {
  const [ticketCount, setTicketCount] = useState<number>(1);

  const handlePurchase = () => {
    toast.success(`Successfully purchased ${ticketCount} tickets!`);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-xs mx-auto">
      <div className="flex items-center gap-2 w-full">
        <Input
          type="number"
          min="1"
          value={ticketCount}
          onChange={(e) => setTicketCount(Math.max(1, parseInt(e.target.value) || 1))}
          className="bg-lottery-background border-lottery-accent text-lottery-foreground"
        />
        <Button
          onClick={handlePurchase}
          className="bg-lottery-foreground text-lottery-background hover:bg-lottery-accent transition-colors"
        >
          Buy Tickets
        </Button>
      </div>
      <p className="text-lottery-accent text-sm">
        Total: {ticketCount} {ticketCount === 1 ? "ticket" : "tickets"}
      </p>
    </div>
  );
};