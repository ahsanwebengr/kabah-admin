import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef(
  ({ className, onChange, id, name, checked, ...props }, ref) => {
    const handleChange = (checked) => {
      const syntheticEvent = {
        target: {
          name,
          value: checked,
        },
      };
      onChange(syntheticEvent);
    };

    return (
      <CheckboxPrimitive.Root
        ref={ref}
        id={name}
        className={cn(
          "ring-offset-background data-[state=checked]:text-primary-foreground peer h-4 w-4 shrink-0 rounded-sm border border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary",
          className,
        )}
        checked={checked}
        onCheckedChange={handleChange}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn("flex items-center justify-center text-white")}
        >
          <Check className="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  },
);

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
