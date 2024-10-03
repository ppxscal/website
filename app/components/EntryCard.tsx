// components/EntryCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface EntryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  external?: boolean; // Add this line
}

export default function EntryCard({ title, description, imageSrc, link, external = false }: EntryCardProps) {
  return (
    <>
      {external ? (
        <a href={link} className="block mb-12 w-2/3 mx-auto" target="_blank" rel="noopener noreferrer">
          <h2 className="text-center text-2xl">{title}</h2>
          <div className="relative aspect-video mb-4">
            <Image
              src={imageSrc}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <p className="text-sm md:text-base lg:text-lg text-center">{description}</p>
        </a>
      ) : (
        <Link href={link} className="block mb-12 w-2/3 mx-auto">
          <h2 className="text-center text-2xl">{title}</h2>
          <div className="relative aspect-video mb-4">
            <Image
              src={imageSrc}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <p className="text-sm md:text-base lg:text-lg text-center">{description}</p>
        </Link>
      )}
    </>
  );
}