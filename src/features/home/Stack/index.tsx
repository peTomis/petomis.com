import Image from "next/image"

const Stack = () => {
  const items = [
    <Image
      key={0}
      src="/images/carousel/nextjs.png"
      height={100}
      width={150}
      alt=""
    />,
    <Image
      key={1}
      src="/images/carousel/nestjs.png"
      height={100}
      width={150}
      alt=""
    />,
    <Image
      key={2}
      src="/images/carousel/postgre.webp"
      height={100}
      width={150}
      alt=""
    />,
    <Image
      key={3}
      src="/images/carousel/docker.webp"
      height={100}
      width={150}
      alt=""
    />,
    <Image
      key={4}
      src="/images/carousel/kubernetes.png"
      height={100}
      width={150}
      alt=""
    />,
    <Image
      key={5}
      src="/images/carousel/aws.png"
      height={100}
      width={150}
      alt=""
    />,
    <Image
      key={6}
      src="/images/carousel/github.png"
      height={100}
      width={150}
      alt=""
    />,
    <Image
      key={7}
      src="/images/carousel/jira.png"
      height={100}
      width={150}
      alt=""
    />,
  ]
  const loopedItems = [...items, ...items, ...items]
  return (
    <div className="flex items-center justify-center w-full bg-gray-200">
      <div className="relative w-full overflow-hidden bg-white shadow-lg">
        <div className="flex items-center w-full animate-carousel">
          {loopedItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 py-4 w-[250px] text-black"
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
