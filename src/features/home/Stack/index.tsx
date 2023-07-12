import Image from "next/image"

const Stack = () => {
  const items = [
    <Image
      key={0}
      src="/images/carousel/nextjs.png"
      width="0"
      height="0"
      sizes="100vw"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        padding: "1rem 0",
        border: "none",
      }}
      alt=""
    />,
    <Image
      key={1}
      src="/images/carousel/nestjs.png"
      width="0"
      height="0"
      sizes="100vw"
      style={{
        width: "100%",
        height: "100%",
        padding: "1rem 0",
        objectFit: "contain",
        border: "none",
      }}
      alt=""
    />,
    <Image
      key={2}
      src="/images/carousel/postgre.webp"
      width="0"
      height="0"
      sizes="100vw"
      style={{
        width: "100%",
        height: "100%",
        padding: "1rem 0",
        objectFit: "contain",
        border: "none",
      }}
      alt=""
    />,
    <Image
      key={3}
      src="/images/carousel/docker.webp"
      width="0"
      height="0"
      sizes="100vw"
      style={{
        width: "100%",
        height: "100%",
        padding: "0 2rem",
        objectFit: "contain",
        border: "none",
      }}
      alt=""
    />,
    <Image
      key={4}
      src="/images/carousel/kubernetes.png"
      width="0"
      height="0"
      sizes="100vw"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        padding: "1rem 0",
        border: "none",
      }}
      alt=""
    />,
    <Image
      key={5}
      src="/images/carousel/aws.png"
      width="0"
      height="0"
      sizes="100vw"
      style={{
        width: "100%",
        height: "100%",

        objectFit: "contain",
        border: "none",
      }}
      alt=""
    />,
    <Image
      key={6}
      src="/images/carousel/github.png"
      width="0"
      height="0"
      sizes="100vw"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        padding: "1rem 0",
        border: "none",
      }}
      alt=""
    />,
    <Image
      key={7}
      src="/images/carousel/jira.png"
      width="0"
      height="0"
      sizes="100vw"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        border: "none",
      }}
      alt=""
    />,
  ]
  const loopedItems = [...items, ...items, ...items]
  return (
    <div className="flex items-center justify-center w-full bg-gray-200">
      <div className="relative w-full overflow-hidden bg-white shadow-lg">
        <div className="flex items-center justify-center w-full animate-carousel">
          {loopedItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[250px] h-[100px] text-black"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stack
