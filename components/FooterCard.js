import Image from 'next/image'

const FooterCard = () => (
  <div className="flex items-center">
    <div className="flex items-center">
      <Image
        alt="Matias Leidemer"
        height={64}
        width={64}
        src="/profile.jpg"
        className="rounded-full"
      />
    </div>
    <div className="ml-4 prose dark:prose-dark text-xs md:text-base">
      My name is Matias. I&apos;m a software developer from Brazil. You can{' '}
      <a
        href="https://twitter.com/matiasleidemer"
        target="_blank"
        rel="noreferrer"
      >
        follow me on Twitter
      </a>
      .
    </div>
  </div>
)

export default FooterCard
