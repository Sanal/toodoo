import { Progress } from "@/components/ui/progress";

interface ProgressBar {
  className?: string;
}

export default function ProgressBar({ className }: ProgressBar) {
  return <Progress value={70} className={className} />;
}
