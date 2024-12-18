"use client"

import type { MotionProps } from "framer-motion"
import { motion, useAnimation, useInView } from "framer-motion"
import type { ReactNode } from "react"
import React, { useEffect, useRef } from "react"

type MotionDivProps = MotionProps & {
  children?: ReactNode
} & React.ComponentPropsWithoutRef<"div">

export const MotionDiv: React.FC<MotionDivProps> = ({
  children,
  className,
  ...props
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
