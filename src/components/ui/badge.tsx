import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline"
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
          {
            "bg-blue-600 text-white": variant === "default",
            "bg-gray-700 text-gray-200": variant === "secondary",
            "bg-red-600 text-white": variant === "destructive",
            "border border-gray-700 bg-transparent": variant === "outline",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("h-2 w-full overflow-hidden rounded-full bg-gray-700", className)}
        {...props}
      >
        <div
          className="h-full bg-blue-600 transition-all"
          style={{ width: `${(value / max) * 100}%` }}
        />
      </div>
    )
  }
)
Progress.displayName = "Progress"