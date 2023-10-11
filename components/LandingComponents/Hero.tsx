import { FunctionComponent } from 'react';
import { CtaLink } from '../Buttons';
import Image from 'next/image';

type SongScene = {
  scene: string;
  genre: string;
};

const songScenes: SongScene[] = [
  {
    scene: 'Bring your wife to the beach at sunset and earbuds to share.',
    genre: 'romantic',
  },
];

export const Hero: FunctionComponent = () => {
  return (
    <div className={'flex flex-col gap-3 md:gap-5 items-center text-center'}>
      <div>
        <div className={'relative'}>
          <Image
            priority
            alt={
              'Two people sitting closely by the seaside at sunset, with cliffs in the background and orange flowers in the foreground.'
            }
            className={'rounded-xl rounded-b-none md:rounded-b-xl'}
            src={'/images/scenes/romantic-scene.webp'}
            height={400}
            width={800}
            placeholder={'blur'}
            blurDataURL={
              'data:image/webp;base64,UklGRg4FAABXRUJQVlA4WAoAAAAgAAAAYgEAsAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggIAMAAHAjAJ0BKmMBsQA+7XKvUy04qaKkU+ujEB2JZ27gCg+CSX/keDdTPcmz6BXrxlHXjHWCk/ymUxKKZCuX7lZAFmH/UKkPQABTPVSa0+TwvOY6b/HkVZQNX8/95NafUqgZkPnv3OPNQho1EGDoGmPhLNPFE2txZgWwmvMsfYhruqKr4v1vBi/5EujLOG8p+u9FJqSV2PQM7vbc7CTsrWEMpB5RRgNcVUB6RzSa8FX3eJ4rbytVt5zLN144sMPH8eOceEy03jqxrjueQ3weronaAyBtKAw73Cr2bEdvjl5V2zJApXppD5roF6xsfSn0XKbtK1CsFVFBaql75pId5uVBBJP9lvJMiAfObCTaGefRluEaKK2jVuy2BHh2Go94C0R07idquAAA3D8s3Nr84/I7P3WpcbR1VSCIAtZn7XLs9HUqtxr+fcRLJEsuQUhrvXE3Z2ExXGCD/HNimaOFE4g8MvMZjfRJdKIvWHmCcipsCKAIwrXDfEicH/GqB/Bv77jfhzIaqMvww5zOXPwf86wjR1GghEgmUNRS/NM+RwAN71RZn4PF5bN+X9JnbnYS3QsUu63rm+I1r5rpPieQGiYI/mvceW98OhnV2sHsQwmyfjTYyoAz3K/fbFtMkiDTJ007Y2av1njHeQbO+MDrT1OZYC1FWtYNE9ieN8uPMRX7k55taG/ceVFhJ72tGnGy+kwnQB+lP67yW0eAyKZZX9s1fp2VlDCTb5u+isjI/7/9C8Qk7yrMJc40KFnoQax/QLcsEQzor87rszn8lwm9BA32OezC53V/ASSkiAe9rUzVeOg24luQyyZgJVPFhrdb8o1T8C6+Op4XBGHKHmAYJskdPM7U0GPVpxIlyiZCdMIK7Y0X5sMpkAcBbRwWWcII6ajv3MQnF3l04RvNPH2WAokztu+ocXXdBnhyQIYXlH5FeZtkq6X6O0IMPpjpGNaoLrqyv6Uv2E8Oyk+DBJrUubyn36gcn0a2BQVM0XrlXsz7r/GqcFGdY8g1dHRljTUH7MsFTiVjO4gc4m8VKAeHpP4XjbIs8YaQOSWNlAAfqj4UggAA'
            }
          />
          <h4
            className={
              'hidden md:inline-block absolute top-1/2 left-1/2 w-4/5 transform -translate-x-1/2 text-white bg-black backdrop-blur-sm p-2 bg-opacity-30 rounded-xl'
            }
          >
            {songScenes.at(0)?.scene}
          </h4>
        </div>

        <p
          className={
            'md:hidden text-white bg-black backdrop-blur-sm p-2 bg-opacity-40 tracking-wide rounded-xl rounded-t-none'
          }
        >
          {songScenes.at(0)?.scene}
        </p>
      </div>

      <CtaLink
        href={`/play/${songScenes.at(0)?.genre}`}
        classNames={'max-w-[80%] md:max-w-none'}
      >
        Start this {songScenes.at(0)?.genre} Song & Scene
      </CtaLink>
    </div>
  );
};
