export function Logo() {
  return (
    <strong className="mx-1 flex items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2204_308)">
          <rect width={32} height={32} rx={8} fill="#fff" />
          <rect
            width={32}
            height={32}
            rx={8}
            fill="url(#paint0_linear_2204_308)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 2.039C8.29 2.039 2.039 8.289 2.039 16c0 7.71 6.25 13.961 13.961 13.961 7.71 0 13.961-6.25 13.961-13.961 0-7.71-6.25-13.961-13.961-13.961zM1.961 16C1.961 8.247 8.247 1.961 16 1.961S30.039 8.247 30.039 16 23.753 30.039 16 30.039 1.961 23.753 1.961 16z"
            fill="#D0D5DD"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 12.078a3.922 3.922 0 100 7.845 3.922 3.922 0 000-7.845zM12 16a4 4 0 118 0 4 4 0 01-8 0z"
            fill="#D0D5DD"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 13.32a2.68 2.68 0 100 5.36 2.68 2.68 0 000-5.36zM13.243 16a2.757 2.757 0 115.514 0 2.757 2.757 0 01-5.514 0z"
            fill="#D0D5DD"
          />
          <path d="M15.961 0h.078v32h-.078V0z" fill="#D0D5DD" />
          <path d="M32 15.96v.079H0v-.078h32z" fill="#D0D5DD" />
          <path
            d="M26.602 0h.078v32h-.078V0zM10.64 0h.078v32h-.077V0zM21.282 0h.077v32h-.077V0zM5.32 0h.078v32H5.32V0z"
            fill="#D0D5DD"
          />
          <path
            d="M32 26.602v.077H0v-.077h32zM32 10.64v.078H0v-.077h32zM32 21.281v.078H0v-.078h32zM32 5.32v.078H0V5.32h32z"
            fill="#D0D5DD"
          />
          <g filter="url(#filter0_dd_2204_308)">
            <circle cx={16} cy={16} r={8} fill="url(#paint1_linear_2204_308)" />
          </g>
          <g filter="url(#filter1_b_2204_308)">
            <path
              d="M0 16h32v3.2c0 4.48 0 6.72-.872 8.432a8 8 0 01-3.496 3.496C25.92 32 23.68 32 19.2 32h-6.4c-4.48 0-6.72 0-8.432-.872a8 8 0 01-3.496-3.496C0 25.92 0 23.68 0 19.2V16z"
              fill="#fff"
              fillOpacity={0.2}
            />
          </g>
        </g>
        <rect
          x={0.15}
          y={0.15}
          width={31.7}
          height={31.7}
          rx={7.85}
          stroke="#D0D5DD"
          strokeWidth={0.3}
        />
        <defs>
          <filter
            id="filter0_dd_2204_308"
            x={5}
            y={6}
            width={22}
            height={22}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={1} />
            <feGaussianBlur stdDeviation={1} />
            <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2204_308"
            />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={1} />
            <feGaussianBlur stdDeviation={1.5} />
            <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
            <feBlend
              in2="effect1_dropShadow_2204_308"
              result="effect2_dropShadow_2204_308"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow_2204_308"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_b_2204_308"
            x={-5}
            y={11}
            width={42}
            height={26}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation={2.5} />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_2204_308"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_backgroundBlur_2204_308"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2204_308"
            x1={16}
            y1={0}
            x2={16}
            y2={32}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset={1} stopColor="#D0D5DD" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2204_308"
            x1={12}
            y1={24}
            x2={20}
            y2={8}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#53389E" />
            <stop offset={1} stopColor="#6941C6" />
          </linearGradient>
          <clipPath id="clip0_2204_308">
            <rect width={32} height={32} rx={8} fill="#fff" />
          </clipPath>
        </defs>
      </svg>
      <span>Untitled UI</span>
    </strong>
  )
}