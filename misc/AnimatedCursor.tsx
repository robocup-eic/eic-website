import { CSSProperties, Fragment, MutableRefObject, useCallback, useEffect, useRef, useState } from "react"
import { useEventListener } from "usehooks-ts"

const config = {
  tomato: "220, 90, 90",
  creamy: "236, 231, 227",
}

/**
 * Animated Cursor
 * Replaces the native cursor with a custom animated cursor.
 *
 * @author Stephen Scaff
 * adapted by betich
 */
export default function AnimatedCursor({
  // preview:
  // rgb(220, 90, 90)
  // rgb(46, 46, 46)
  // rgb(252, 186, 3)
  outerAlpha = 0.4,
  innerSize = 12,
  outerSize = 12,
  outerScale = 5,
  innerScale = 0.7,
}) {
  const cursorOuterRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
  const cursorInnerRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
  const requestRef: MutableRefObject<number | undefined> = useRef()
  const previousTimeRef = useRef(0) // arbitrary value
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(true)
  const [isActive, setIsActive] = useState(false)
  const [isActiveClickable, setIsActiveClickable] = useState(false)
  const [color, setColor] = useState(config.tomato)
  let endX = useRef(0)
  let endY = useRef(0)

  const documentRef = useRef<Document>(typeof window !== "undefined" ? document : null)

  const onMouseMove = useCallback(({ clientX, clientY }: { clientX: number; clientY: number }) => {
    setCoords({ x: clientX, y: clientY })
    if (cursorInnerRef.current) {
      cursorInnerRef.current.style.top = clientY + "px"
      cursorInnerRef.current.style.left = clientX + "px"
    }
    endX.current = clientX
    endY.current = clientY
  }, [])

  const animateOuterCursor = useCallback(
    (time: number) => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x) / 8
        coords.y += (endY.current - coords.y) / 8
        if (cursorOuterRef.current) {
          cursorOuterRef.current.style.top = coords.y + "px"
          cursorOuterRef.current.style.left = coords.x + "px"
        }
      }
      previousTimeRef.current = time
      requestRef.current = requestAnimationFrame(animateOuterCursor)
    },
    [requestRef] // eslint-disable-line
  )

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor)
  }, [animateOuterCursor])

  const onMouseDown = useCallback(() => setIsActive(true), [])
  const onMouseUp = useCallback(() => setIsActive(false), [])
  const onMouseEnter = useCallback(() => setIsVisible(true), [])
  const onMouseLeave = useCallback(() => setIsVisible(false), [])

  useEventListener("mousemove", onMouseMove, documentRef)
  useEventListener("mousedown", onMouseDown, documentRef)
  useEventListener("mouseup", onMouseUp, documentRef)
  useEventListener("mouseenter", onMouseEnter, documentRef)
  useEventListener("mouseleave", onMouseLeave, documentRef)

  useEffect(() => {
    if (isActive) {
      if (cursorInnerRef.current) cursorInnerRef.current.style.transform = `scale(${innerScale})`
      if (cursorOuterRef.current) cursorOuterRef.current.style.transform = `scale(${outerScale})`
    } else {
      if (cursorInnerRef.current) cursorInnerRef.current.style.transform = "scale(1)"
      if (cursorOuterRef.current) cursorOuterRef.current.style.transform = "scale(1)"
    }
  }, [innerScale, outerScale, isActive])

  useEffect(() => {
    if (isActiveClickable) {
      if (cursorInnerRef.current) cursorInnerRef.current.style.transform = `scale(${innerScale * 1.3})`
      if (cursorOuterRef.current) cursorOuterRef.current.style.transform = `scale(${outerScale * 1.4})`
    }
  }, [innerScale, outerScale, isActiveClickable])

  useEffect(() => {
    if (isVisible) {
      if (cursorInnerRef.current) cursorInnerRef.current.style.opacity = "1"
      if (cursorOuterRef.current) cursorOuterRef.current.style.opacity = "1"
    } else {
      if (cursorInnerRef.current) cursorInnerRef.current.style.opacity = "0"
      if (cursorOuterRef.current) cursorOuterRef.current.style.opacity = "0"
    }
  }, [isVisible])

  useEffect(() => {
    const clickables = document.querySelectorAll<HTMLElement>(
      'a, input[type="submit"], input[type="image"], label[for], select, button, .link'
    )
    clickables.forEach((el) => {
      el.style.cursor = "none"

      el.addEventListener("mouseover", () => {
        setIsActive(true)
      })
      el.addEventListener("click", () => {
        setIsActive(true)
        setIsActiveClickable(false)
      })
      el.addEventListener("mousedown", () => {
        setIsActiveClickable(true)
      })
      el.addEventListener("mouseup", () => {
        setIsActive(true)
      })
      el.addEventListener("mouseout", () => {
        setIsActive(false)
        setIsActiveClickable(false)
      })
    })

    return () => {
      clickables.forEach((el) => {
        el.removeEventListener("mouseover", () => {
          setIsActive(true)
        })
        el.removeEventListener("click", () => {
          setIsActive(true)
          setIsActiveClickable(false)
        })
        el.removeEventListener("mousedown", () => {
          setIsActiveClickable(true)
        })
        el.removeEventListener("mouseup", () => {
          setIsActive(true)
        })
        el.removeEventListener("mouseout", () => {
          setIsActive(false)
          setIsActiveClickable(false)
        })
      })
    }
  }, [isActive])

  useEffect(() => {
    const tomatoElements = document.querySelectorAll<HTMLElement>(".bg-tomato")
    tomatoElements.forEach((el) => {
      el.style.cursor = "none"
      el.addEventListener("mouseover", () => {
        setColor(config.creamy)
      })
      el.addEventListener("mouseout", () => {
        setColor(config.tomato)
      })
    })

    return () => {
      tomatoElements.forEach((el) => {
        el.removeEventListener("mouseover", () => {
          setColor(config.tomato)
        })
        el.removeEventListener("mouseout", () => {
          setColor(config.creamy)
        })
      })
    }
  }, [color])

  useEffect(() => {
    const videoElements = document.querySelectorAll<HTMLElement>("video, iframe")
    videoElements.forEach((el) => {
      el.style.cursor = "none"
      el.addEventListener("mouseover", () => {
        setIsVisible(false)
      })
      el.addEventListener("mouseout", () => {
        setIsVisible(true)
      })
    })

    return () => {
      videoElements.forEach((el) => {
        el.removeEventListener("mouseover", () => {
          setIsVisible(false)
        })
        el.removeEventListener("mouseout", () => {
          setIsVisible(true)
        })
      })
    }
  }, [isVisible])

  const styles: Record<string, CSSProperties> = {
    cursor: {
      zIndex: 999,
      position: "fixed",
      opacity: 1,
      pointerEvents: "none",
      transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    },
    cursorInner: {
      zIndex: 999,
      position: "fixed",
      borderRadius: "50%",
      width: innerSize,
      height: innerSize,
      pointerEvents: "none",
      backgroundColor: `rgba(${color}, 1)`,
      transition: "opacity 0.15s ease-in-out, transform 0.25s ease-in-out",
    },
    cursorOuter: {
      zIndex: 999,
      position: "fixed",
      borderRadius: "50%",
      pointerEvents: "none",
      width: outerSize,
      height: outerSize,
      backgroundColor: `rgba(${color}, ${outerAlpha})`,
      transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    },
  }

  return (
    <Fragment>
      <div ref={cursorOuterRef} style={styles.cursorOuter} />
      <div ref={cursorInnerRef} style={styles.cursorInner} />
    </Fragment>
  )
}
