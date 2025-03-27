import useSwipeHandler from "@/hooks/useSwipeHandler"
import ScrollIndicator from "@/ui/atoms/scroll-indicator"
import CarouselElementSkewed from "@/ui/molecules/carousel-element-skewed"
import React, { useEffect } from "react"

interface Props {
  elements: React.JSX.Element[]
}

const Carousel = ({ elements }: Props) => {
  const carouselRef = React.useRef<HTMLDivElement>(null)

  const [hovered, setHovered] = React.useState<number>(
    Math.floor(elements.length / 2)
  )

  const [swipingDirection, setSwipingDirection] = React.useState<
    "left" | "right" | undefined
  >(undefined)

  useSwipeHandler(
    carouselRef,
    () => {
      if (hovered < elements.length - 1) {
        setSwipingDirection("left")
        setHovered((prevHovered) =>
          Math.min(prevHovered + 1, elements.length - 1)
        )
      }
    },
    () => {
      if (hovered > 0) {
        setSwipingDirection("right")
        setHovered((prevHovered) => Math.max(prevHovered - 1, 0))
      }
    }
  )

  useEffect(() => {
    setSwipingDirection(undefined)
  }, [hovered])

  const rendered = elements.map((Element, i) => {
    const ElementWithProps = React.cloneElement(Element, {
      selected: hovered === i,
    })

    return (
      <CarouselElementSkewed
        key={i}
        hovered={hovered === i}
        onMouseEnter={() => setHovered(i)}
        color={Element.props.color}
        swipingDirection={swipingDirection}
      >
        {ElementWithProps}
      </CarouselElementSkewed>
    )
  })

  return (
    <div
      id="carousel-container-background"
      className="flex flex-col items-center justify-center w-full"
    >
      <div
        id="carousel-container"
        ref={carouselRef}
        className="flex flex-col items-center justify-center space-y-8 max-w-[1200px]"
      >
        <div
          id="carousel-description-mobile-container"
          className="flex flex-row items-center justify-center w-full space-x-4 overflow-visible"
        >
          {rendered[hovered]}
        </div>
        <div id="carousel-buttons-container" className="z-10 pt-4">
          <ScrollIndicator
            count={elements.length}
            selectedId={hovered}
            activeColor={elements[hovered].props.color}
            onClick={(index) => setHovered(index)}
          />
        </div>
      </div>
    </div>
  )
}

export default Carousel
