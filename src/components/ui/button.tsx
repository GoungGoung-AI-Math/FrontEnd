import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

// 커스텀 예정 (메인컬러 설정 후 수정)
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: 'bg-brand-primary-500 hover:bg-brand-primary-400 text-center text-white rounded-md',
        outline:
          'border border-brand-primary-400 bg-white hover:bg-brand-primary-100 text-center text-brand-primary-500 ',
        secondary: 'bg-brand-secondary text-center text-white',
        disable: 'bg-grayscale-200 text-center text-white',
        ghost: 'border border-grayscale-100 bg-white text-center text-grayscale-200',
        kakao: 'text-grayscale-900 bg-[#FBD821] text-button-md hover:bg-[#FBD821]/80 hover:text-gray-700',
        gray: 'bg-grayscale-100 text-button-sm font-normal',
        none: 'bg-transparent',
        default:
          'bg-grayscale-black text-gray-50 shadow hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90',
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
