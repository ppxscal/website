// components/EntryCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface EntryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

export default function EntryCard({ title, description, imageSrc, link }: EntryCardProps) {
  return (
    <Link href={link} className="block mb-12">
      <div className="relative aspect-video mb-4 w-2/3 mx-auto">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className = "text-center"> 
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </Link>
  );
}