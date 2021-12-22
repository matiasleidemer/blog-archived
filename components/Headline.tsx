import Image from 'next/image'

const Headline = () => (
  <div className="text-center mb-12">
    <Image
      src="/profile.jpg"
      width={128}
      height={128}
      className="p-2 rounded-full"
      priority
      alt="Headshot of me"
    ></Image>

    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
      MATIAS LEIDEMER
    </h1>

    <p className="md:text-lg font-extralight text-gray-600 dark:text-gray-400">
      I write code that writes code
    </p>
  </div>
)

export default Headline
