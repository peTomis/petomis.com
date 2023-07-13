import React, { useState } from "react"
import style from "./style.module.css"
import ArrowIcon from "@/ui/icons/Arrow"

type Props = {
  items: React.ReactNode[]
}

export const Carousel = ({ items }: Props) => {
  const [activeItem, setActiveItem] = useState<number>(0)
  const [previousItem, setPreviousItem] = useState<number>(items.length - 1)
  const [nextItem, setNextItem] = useState<number>(items.length === 1 ? 0 : 1)

  const handleChange = (direction: "left" | "right") => {
    const moveLeft = (n: number) => {
      if (n == 0) return items.length - 1
      return n - 1
    }

    const moveRight = (n: number) => {
      if (n === items.length - 1) return 0
      return n + 1
    }

    if (direction === "left") {
      setActiveItem(moveLeft(activeItem))
      setPreviousItem(moveLeft(previousItem))
      setNextItem(moveLeft(nextItem))
    }

    if (direction === "right") {
      setActiveItem(moveRight(activeItem))
      setPreviousItem(moveRight(previousItem))
      setNextItem(moveRight(nextItem))
    }
  }

  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.renderedItem}>
          <div onClick={() => handleChange("left")} className={style.arrowLeft}>
            <ArrowIcon />
          </div>
          {items[activeItem]}
          <div
            onClick={() => handleChange("right")}
            className={style.arrowRight}
          >
            <ArrowIcon />
          </div>
        </div>
      </div>
      <div className={`${style.inner} ${style.rightActiveItem}`}>
        <div className={style.renderedItem}>{items[previousItem]}</div>
      </div>
      <div className={`${style.inner} ${style.leftActiveItem}`}>
        <div className={style.renderedItem}>{items[nextItem]}</div>
      </div>
    </div>
  )
}
