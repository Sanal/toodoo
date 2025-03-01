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
        buttonProps={{ type: "button", disabled: true }}
        buttonContent="Add"
      />
      <InputWithButton
        inputProps={{ placeholder: "Enter task title" }}
        buttonProps={{ type: "button", disabled: true }}
        buttonContent="Add"
        className="col-[2/-1]"
      />
    </Container>
  );
}
