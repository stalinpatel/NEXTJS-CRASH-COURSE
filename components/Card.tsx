// import { getImageUrl } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string; // Add imageUrl prop
  priority?: boolean;
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  description,
  price,
  imageUrl,
  priority = false, 
}) => {
const imageSizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw";

  return (
    <Link href={`/products/${id}`}>
      <div className="max-w-lg bg-gray-953 rounded-sm overflow-hidden h-full flex flex-col justify-between">
        <div>
          <div className="relative h-96 bg-center ">
            <Image
              src={imageUrl}
              // src={getImageUrl(imageUrl)}
              // src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyE7vPfgc2QNJPEMGKnRBo0yvMDYZ_uL0lZg&s"}
              alt={name}
              fill={true}
              className="rounded-t"
              sizes={imageSizes}
              priority={priority}
              style={{  
                objectFit: 'cover',
              }}
            />
          </div>
          <div className="px-6 py-4">
            <div className="text-2xl mb-2 uppercase line-clamp-2">{name}</div>
            <p className="text-gray-700 text-base truncate uppercase">
              {description}
            </p>
          </div>
        </div>
        <div className="px-6 py-2">
          <span className="inline-block text-2xl text-gray-952 mr-2">
            ${price}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;