import Container from "@/components/container";
import { Progress } from "@/components/ui/progress";

interface ProgressBar {
  className?: string;
}

export default function ProgressBar({ className }: ProgressBar) {
  return (
    <Container className={className}>
      <Progress value={70} />
    </Container>
  );
}
