import { VariantProps } from "class-variance-authority";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface InputWithButton {
  inputProps: React.ComponentProps<"input">;
  buttonProps: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants>;
  buttonContent: string | React.ReactElement;
  className?: string;
}

export default function InputWithButton({
  inputProps,
  buttonProps,
  buttonContent,
  className,
}: InputWithButton) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Input {...inputProps} />
      <Button {...buttonProps}>{buttonContent}</Button>
    </div>
  );
}
