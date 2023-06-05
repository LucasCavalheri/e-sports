interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
}

export function Label({ children, ...rest }: LabelProps) {
  return (
    <label {...rest} className="font-semibold">
      {children}
    </label>
  )
}
