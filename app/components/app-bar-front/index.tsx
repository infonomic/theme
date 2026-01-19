'use client'

import cx from 'classnames'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ThemeSwitch } from '../../theme/theme-switch'

interface AppBarProps {
  className?: string
  ref?: React.Ref<HTMLDivElement>
}

export const AppBarFront = ({ className, ref, ...other }: AppBarProps) => {
  const pathName = usePathname()
  const [hasScrolled, setHasScrolled] = useState(false)

  const handleScroll = (): void => {
    // TODO - refine for correct locale detection
    // For now home / and anything with a two character path / locale will
    // work.
    if (pathName.length <= 3) {
      const position = window.scrollY
      if (position > 20) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const appBarBackground =
    hasScrolled
      ? 'bg-white dark:bg-zinc-950'
      : 'bg-transparent dark:bg-transparent'

  return (
    <>
      <header
        className={cx('w-full sticky top-0 z-30', appBarBackground, className)}
        ref={ref}
        {...other}
      >
        <div
          className={cx(
            'app-bar flex h-[60px] w-full items-center gap-4 pl-0 pr-[12px]',
            'sm:gap-2 sm:pl-0 sm:pr-[18px]',
            'transition-all duration-500 ease-out'
          )}
        >
          <ThemeSwitch className="mr-0 ml-auto" />
        </div>
      </header>
    </>
  )
}
