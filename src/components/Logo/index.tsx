/*
 * @Description:
 * @Author: LeoSunQi
 * @Date: 2023-09-27 17:21:59
 * @LastEditTime: 2023-09-28 18:43:33
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import { motion } from 'framer-motion'

interface LogoProps {
  width?: number
  height?: number
  repeatType?: boolean
}

const LeoLogo = ({ width, repeatType = false }: LogoProps) => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: 'rgba(0, 145, 255, 0)',
      // x: 100, y: 100,
      scale: 0.96,
      rotate: 90
    },
    visible: {
      pathLength: 1,
      fill: 'rgba(0, 145, 255, 1)',
      // x: 0, y: 0,
      scale: 1,
      rotate: 0
    }
  }

  const fill: any = {
    duration: 3,
    ease: [1, 0, 0.8, 1]
  }

  if (repeatType) {
    fill.repeatType = 'reverse'
    fill.repeat = Infinity
  }

  return (
    <svg width={width} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        overflow="visible"
        stroke="rgba(0, 145, 255, 1)"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: 'easeInOut' },
          fill
        }}
        d="M256,16 C388.54834,16 496,123.45166 496,256 C496,388.54834 388.54834,496 256,496 C123.45166,496 16,388.54834 16,256 C16,123.45166 123.45166,16 256,16 Z M256,43 C138.363348,43 43,138.363348 43,256 C43,373.636652 138.363348,469 256,469 C373.636652,469 469,373.636652 469,256 C469,138.363348 373.636652,43 256,43 Z M367.670647,116.501584 C420.261051,169.507103 420.991509,254.988598 369.862022,308.896271 C369.641392,309.151332 369.411477,309.400632 369.17081,309.643198 L268.137033,411.457418 L264.946677,414.635836 C231.484899,447.801683 227.246182,445.72401 191.495506,409.763136 L111.665239,329.30518 C106.278254,323.875674 106.278254,315.072705 111.665239,309.643198 C117.052223,304.213692 125.786252,304.213692 131.173236,309.643198 L191.39159,370.336878 C222.871607,402.065378 238.835176,401.683656 270.126357,370.145483 L349.604845,290.043098 C348.47571,286.320976 346.450595,282.815738 343.5295,279.871585 C334.00608,270.272994 318.565566,270.272994 309.042147,279.871585 L241.287821,348.166068 C225.396323,344.598706 210.014695,338.141875 195.9689,328.795575 L193.320635,326.987915 L245.745661,274.148544 C255.269081,264.549953 255.269081,248.987561 245.745661,239.38897 C236.222241,229.790378 220.781727,229.790378 211.258308,239.38897 L158.833574,292.224702 L158.104027,291.159504 C148.25475,276.573737 141.493723,260.504614 137.820456,243.881997 L202.131351,179.068819 C211.654771,169.470227 211.654771,153.907836 202.131351,144.309244 C192.607932,134.710653 177.167418,134.710653 167.643998,144.309244 L141.361234,170.785683 C147.825184,150.939367 158.885262,132.281371 174.541469,116.501584 C227.872619,62.7494719 314.339497,62.7494719 367.670647,116.501584 Z M286.182921,144.994809 C271.147258,160.030472 271.147258,184.408098 286.182921,199.44376 C301.218583,214.479423 325.596209,214.479423 340.631872,199.44376 C355.667534,184.408098 355.667534,160.030472 340.631872,144.994809 C325.596209,129.959147 301.218583,129.959147 286.182921,144.994809 Z"
      />
    </svg>
  )
}

LeoLogo.displayName = 'LeoLogo'

export { LeoLogo }
