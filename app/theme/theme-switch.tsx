'use client'

import type React from 'react'

import { LightIcon } from './light-icon'
import { MoonIcon } from './moon-icon'

import { useTheme } from './provider'
import { Theme } from './utils'

import './theme-switch.css'

type ThemeSwitchIntrinsicProps = React.JSX.IntrinsicElements['div']
interface ThemeSwitchProps extends ThemeSwitchIntrinsicProps {
  className?: string
  moonIconClassName?: string
  lightIconClassName?: string
  ref?: React.Ref<HTMLDivElement>
}

const ThemeSwitch = ({
  className,
  moonIconClassName,
  lightIconClassName,
  ref,
  ...rest
}: ThemeSwitchProps) => {
  const { theme, setTheme } = useTheme()
  const isDark = theme === Theme.DARK

  const handleThemeChange = (): void => {
    setTheme(isDark ? Theme.LIGHT : Theme.DARK)
  }

  return (
    <div
      ref={ref}
      className={[
        'component--theme-switch flex items-center justify-center',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role="button"
      tabIndex={0}
      aria-label="Change theme"
      onClick={handleThemeChange}
      onKeyDown={handleThemeChange}
      {...rest}
    >
      <div className="relative w-[24px] h-[24px] flex items-center justify-center">
        {/* Both icons are always rendered; CSS handles visibility to avoid hydration mismatches */}
        <div className="light">
          <LightIcon className="text-white" svgClassName={[
            lightIconClassName,
          ]
            .filter(Boolean)
            .join(' ')} />
        </div>
        <div className="moon">
          <MoonIcon className="text-black" svgClassName={[
            moonIconClassName,
          ]
            .filter(Boolean)
            .join(' ')} />
        </div>
      </div>
    </div>
  )
}

ThemeSwitch.displayName = 'ThemeSwitch'

export { ThemeSwitch }
export type { ThemeSwitchProps }
