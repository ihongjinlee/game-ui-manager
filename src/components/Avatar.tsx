import Image from 'next/image';

type AvatarSize = 'medium' | 'xlarge';

type Props = {
  image: string;
  size?: AvatarSize;
  priority: boolean;
};

export default function Avatar({
  image,
  size = 'medium',
  priority = false,
}: Props) {
  return (
    <div className={`${getContainerStyle(size)}`}>
      <Image
        className={`rounded-full ${getImageSizeStyle(size).image}`}
        alt='user profile'
        src={image}
        referrerPolicy='no-referrer'
        width={140}
        height={140}
        priority={priority}
      />
    </div>
  );
}

function getContainerStyle(size: AvatarSize): string {
  const baseStyle = 'rounded-full flex justify-center items-center';
  const { container } = getImageSizeStyle(size);
  return `${baseStyle} ${container}`;
}

type ImageSizeStyle = {
  container: string;
  image: string;
};

function getImageSizeStyle(size: AvatarSize): ImageSizeStyle {
  switch (size) {
    case 'medium':
      return {
        container: 'w-11 h-11',
        image: 'w-[42px] h-[42px]',
      };
    case 'xlarge':
      return {
        container: 'w-[142px] h-[142px]',
        image: 'w-[138px] h-[138px] p-[0.3rem]',
      };
    default:
      throw new Error(`Unsupported type size: ${size}`);
  }
}
