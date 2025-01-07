import { Timer } from "@/components/Timer";
import { TicketPurchase } from "@/components/TicketPurchase";
import { PastWinners } from "@/components/PastWinners";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lottery-background to-lottery-background/90 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] pointer-events-none" />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pb-24">
        <Timer />
        <div className="mt-12">
          <TicketPurchase />
        </div>
      </div>

      {/* Past Winners */}
      <PastWinners />
    </div>
  );
};

export default Index;