// External Libraries
import React from "react"

// Molecules
import CarouselElementSkewed from "@/ui/molecules/carousel-element-skewed"

// Atoms
import CarouselButton from "@/ui/atoms/carousel-button"

interface Props {
  elements: React.JSX.Element[]
}

const Carousel = ({ elements }: Props) => {
  const carouselRef = React.useRef<HTMLDivElement>(null)

  const [hovered, setHovered] = React.useState<number>(
    Math.floor(elements.length / 2)
  )

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
      >
        {ElementWithProps}
      </CarouselElementSkewed>
    )
  })

  const buttons: React.JSX.Element[] = elements.map((e, i) => (
    <CarouselButton
      key={i}
      hovered={hovered === i}
      onMouseEnter={() => setHovered(i)}
      bg={e.props.color}
    />
  ))

  return (
    <div
      id="carousel-container-background"
      className="flex flex-col items-center justify-center w-full sm:px-2"
    >
      <div
        id="carousel-container"
        ref={carouselRef}
        className="flex flex-col items-center justify-center space-y-8 max-w-[1200px]"
      >
        <div
          id="carousel-descriptions-desktop-container"
          className="flex-row items-center justify-center hidden space-x-4 overflow-visible sm:flex"
        >
          {rendered}
        </div>
        <div
          id="carousel-description-mobile-container"
          className="flex flex-row items-center justify-center w-full space-x-4 overflow-visible sm:hidden"
        >
          {rendered[hovered]}
        </div>
        <div
          id="carousel-buttons-container"
          className="flex flex-row items-center justify-center w-full space-x-4"
        >
          {buttons}
        </div>
      </div>
    </div>
  )
}

export default Carousel
