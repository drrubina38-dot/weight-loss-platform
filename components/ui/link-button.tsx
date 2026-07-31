import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

// Marketing-sized button styles for use on links and CTAs.
export const marketingButton = cva(
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-5 hover:-translate-y-0.5 active:translate-y-0',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90',
        outline: 'border border-primary/30 bg-background text-primary hover:bg-secondary',
        white: 'bg-background text-primary shadow-lg hover:bg-secondary',
        ghost: 'text-primary hover:bg-secondary',
      },
      size: {
        default: 'h-11 px-6 text-sm',
        lg: 'h-13 px-8 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
  },
)

type LinkButtonProps = React.ComponentProps<typeof Link> & VariantProps<typeof marketingButton>

export function LinkButton({ className, variant, size, ...props }: LinkButtonProps) {
  return <Link className={cn(marketingButton({ variant, size, className }))} {...props} />
}
