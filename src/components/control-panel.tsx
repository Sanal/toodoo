import Container from "@/components/container";
import InputWithButton from "@/components/input-with-button";
import { cn } from "@/lib/utils";

interface ControlPanel {
  className?: string;
}

export default function ControlPanel({ className }: ControlPanel) {
  return (
    <Container className={cn("grid grid-cols-3 gap-4", className)}>
      <InputWithButton
        inputProps={{ placeholder: "Enter category title" }}
        buttonProps={{ type: "button" }}
        buttonContent="Add"
      />
      <InputWithButton
        inputProps={{ placeholder: "Text input with button" }}
        buttonProps={{ type: "button" }}
        buttonContent="Add"
        className="col-[2/-1]"
      />
    </Container>
  );
}
