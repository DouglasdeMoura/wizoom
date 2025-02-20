import { FC, SVGProps } from 'react'

const Lock: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="far"
      data-icon="lock-alt"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="prefix__svg-inline--fa prefix__fa-lock-alt prefix__fa-w-14 prefix__fa-9x"
      {...props}
    >
      <path
        fill="currentColor"
        d="M224 412c-15.5 0-28-12.5-28-28v-64c0-15.5 12.5-28 28-28s28 12.5 28 28v64c0 15.5-12.5 28-28 28zm224-172v224c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V240c0-26.5 21.5-48 48-48h32v-48C80 64.5 144.8-.2 224.4 0 304 .2 368 65.8 368 145.4V192h32c26.5 0 48 21.5 48 48zm-320-48h192v-48c0-52.9-43.1-96-96-96s-96 43.1-96 96v48zm272 48H48v224h352V240z"
      />
    </svg>
  )
}

export default Lock
