import Image from 'next/image';

type Props = {
  image: string;
  priority: boolean;
};

export default function Avatar({ image, priority = false }: Props) {
  return (
    <div className='rounded-full flex justify-center items-center w-[142px] h-[142px]'>
      <Image
        className='rounded-full w-[140px] h-[140px] p-[0.3rem]'
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
