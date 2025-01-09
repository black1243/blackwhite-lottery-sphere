import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

interface WinnerTransaction {
  signature: string;
  walletAddress: string;
  amount: number;
  timestamp: string;
}

// This function will later be replaced with actual Solana blockchain data fetching
const fetchWinnerTransactions = async (): Promise<WinnerTransaction[]> => {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock data structured like real Solana transactions
  return [
    {
      signature: "5xhvH9qb8CJc...",
      walletAddress: "8x4f...3d2e",
      amount: 5,
      timestamp: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      signature: "3nKjL7mP9wRx...",
      walletAddress: "2a9b...7c1d",
      amount: 3,
      timestamp: new Date(Date.now() - 172800000).toISOString(),
    },
    {
      signature: "9pQrM4vN2sYt...",
      walletAddress: "6e5d...9f8g",
      amount: 7,
      timestamp: new Date(Date.now() - 259200000).toISOString(),
    },
  ];
};

export const PastWinners = () => {
  const { data: winners, isLoading } = useQuery({
    queryKey: ['winners'],
    queryFn: fetchWinnerTransactions,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="fixed bottom-0 left-0 right-0 bg-lottery-background/80 backdrop-blur-md border-t border-lottery-accent/20 max-h-[30vh]">
        <div className="container py-4 h-full">
          <h2 className="text-[#9b87f5] text-lg font-semibold mb-2">Past Winners</h2>
          <ScrollArea className="h-[calc(30vh-6rem)]">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="text-[#9b87f5]">Wallet</TableHead>
                    <TableHead className="text-[#9b87f5]">Amount (SOL)</TableHead>
                    <TableHead className="hidden md:table-cell text-[#9b87f5]">Transaction</TableHead>
                    <TableHead className="hidden md:table-cell text-[#9b87f5]">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center text-[#9b87f5]">
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          Loading winners...
                        </motion.div>
                      </TableCell>
                    </TableRow>
                  ) : winners?.map((winner, index) => (
                    <motion.tr
                      key={winner.signature}
                      className="group transition-all duration-200 hover:bg-white/5 cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <TableCell className="font-mono text-[#9b87f5] group-hover:text-white transition-colors">
                        {winner.walletAddress}
                      </TableCell>
                      <TableCell className="text-[#9b87f5] group-hover:text-white transition-colors">
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className="inline-block"
                        >
                          {winner.amount} SOL
                        </motion.span>
                      </TableCell>
                      <TableCell className="hidden md:table-cell font-mono text-[#9b87f5] group-hover:text-white transition-colors">
                        {winner.signature.slice(0, 8)}...
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-[#9b87f5] group-hover:text-white transition-colors">
                        {new Date(winner.timestamp).toLocaleDateString()}
                      </TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ScrollArea>
        </div>
      </Card>
    </motion.div>
  );
};