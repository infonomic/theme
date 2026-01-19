import type React from 'react'

export const MoonIcon = ({ className, svgClassName, ...rest }: { className?: string; svgClassName?: string }): React.JSX.Element => {

  return (
    <div className={[
      'moon-icon',
      className,
    ]
      .filter(Boolean)
      .join(' ')} {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        className={svgClassName}
        focusable="false"
        aria-hidden="true"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
      >
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
      </svg>
    </div>
  )
}

MoonIcon.displayName = 'MoonIcon'
