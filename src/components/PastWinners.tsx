import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";

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
    <Card className="fixed bottom-0 left-0 right-0 bg-lottery-background/80 backdrop-blur-md border-t border-lottery-accent/20">
      <div className="container py-4">
        <h2 className="text-[#9b87f5] text-lg font-semibold mb-2">Past Winners</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-[#9b87f5]">Wallet</TableHead>
                <TableHead className="text-[#9b87f5]">Amount (SOL)</TableHead>
                <TableHead className="hidden md:table-cell text-[#9b87f5]">Transaction</TableHead>
                <TableHead className="hidden md:table-cell text-[#9b87f5]">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-[#9b87f5]">Loading winners...</TableCell>
                </TableRow>
              ) : winners?.map((winner, index) => (
                <TableRow key={winner.signature}>
                  <TableCell className="font-mono text-[#9b87f5]">{winner.walletAddress}</TableCell>
                  <TableCell className="text-[#9b87f5]">{winner.amount} SOL</TableCell>
                  <TableCell className="hidden md:table-cell font-mono text-[#9b87f5]">
                    {winner.signature.slice(0, 8)}...
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-[#9b87f5]">
                    {new Date(winner.timestamp).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Card>
  );
};