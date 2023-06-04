interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  title: string
}

export function Label({ title, ...rest }: LabelProps) {
  return (
    <label {...rest} className="font-semibold">
      {title}
    </label>
  )
}
