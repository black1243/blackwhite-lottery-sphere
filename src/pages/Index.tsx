import { Timer } from "@/components/Timer";
import { TicketPurchase } from "@/components/TicketPurchase";
import { PastWinners } from "@/components/PastWinners";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [wallet, setWallet] = useState<any>(null);
  const { toast } = useToast();

  const connectWallet = async () => {
    try {
      // @ts-ignore
      const { solana } = window;

      if (!solana?.isPhantom) {
        toast({
          variant: "destructive",
          title: "Phantom wallet not found",
          description: "Please install Phantom wallet extension",
        });
        window.open("https://phantom.app/", "_blank");
        return;
      }

      const response = await solana.connect();
      setWallet(response.publicKey.toString());
      toast({
        title: "Wallet connected",
        description: "Successfully connected to Phantom wallet",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Connection failed",
        description: "Failed to connect to Phantom wallet",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lottery-background to-lottery-background/90 relative overflow-hidden">
      {/* Wallet Connection Button */}
      <div className="absolute top-4 right-4 z-20">
        <Button
          onClick={connectWallet}
          className="bg-[#9945FF] hover:bg-[#7C3AE6] text-white flex items-center gap-2 transition-all duration-200 hover:scale-105"
        >
          <Wallet className="w-4 h-4" />
          {wallet ? `${wallet.slice(0, 4)}...${wallet.slice(-4)}` : "Connect Wallet"}
        </Button>
      </div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 pointer-events-none"
        style={{ backgroundImage: 'url(/planet.img)' }}
      />
      
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