import { Card } from "@/components/ui/card";

const MOCK_WINNERS = [
  { name: "wallet:8x4f...3d2e", amount: "5 SOL" },
  { name: "wallet:2a9b...7c1d", amount: "3 SOL" },
  { name: "wallet:6e5d...9f8g", amount: "7 SOL" },
];

export const PastWinners = () => {
  return (
    <Card className="fixed bottom-0 left-0 right-0 bg-lottery-background/80 backdrop-blur-md border-t border-lottery-accent/20">
      <div className="container py-4">
        <h2 className="text-lottery-foreground text-lg font-semibold mb-2">Past Winners</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {MOCK_WINNERS.map((winner, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-lottery-accent"
            >
              <span>{winner.name}</span>
              <span className="text-lottery-foreground">{winner.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};