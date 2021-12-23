import Image from 'next/image'
import Prose from './Prose'

const FooterCard = () => (
  <div className="flex items-center mb-12">
    <div className="flex items-center">
      <Image
        alt="Matias Leidemer"
        height={64}
        width={64}
        src="/profile.jpg"
        className="rounded-full"
      />
    </div>
    <div className="ml-4 text-xs md:text-base prose dark:prose-invert">
      <Prose>
        My name is Matias. I&apos;m a software developer from Brazil. You can{' '}
        <a
          href="https://twitter.com/matiasleidemer"
          target="_blank"
          rel="noreferrer"
        >
          follow me on Twitter
        </a>
        .
      </Prose>
    </div>
  </div>
)

export default FooterCard
