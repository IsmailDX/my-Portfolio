'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useAppSelector } from '@/redux/hooks'
import { myStoryPage } from '@/types/myStoryPage'

type Props = {
    items: myStoryPage[]
}

const Index = ({ items }: Props) => {
    const colorMode = useAppSelector((state) => state.color.value)
    const [videoLoaded, setVideoLoaded] = useState(false)
    const [image, setImage] = useState('')
    const [blurImage, setBlurImage] = useState('')

    useEffect(() => {
        let imageUrl
        let blurImageUrl

        if (colorMode === 'dark') {
            imageUrl = '/images/preload-index-dark.png'
            blurImageUrl =
                'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCABrAL4DASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAECAwQH/8QAGRABAQEBAQEAAAAAAAAAAAAAAAERAjED/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/APPzhHFg24b8sOG/Ko15a8suWnKDSKiIuCGZADKgqBVNOpoIqKuoqCKirqKCKmqqaBAEAACjEyNGmvDflz/Ot+GkbcteWPLXlBpFREqpRFGnRoGVGlaBVNO1NoJqKq1FqCaiqtZ2ilU07U0QAgBggoyMgjTTit+K5ufW/FUb81pKx5rWURpKqVnKqUF6eo09EPStLStAWptFqbRStRadrO1ArUWnai0BanStLQVoTp6BmnRoiAANHPW3FYtOKo35rWVhzWkojWVUrOVUoL0anRoK0rU6VqB2otFqLQFqOqLUdVQuqi0WpQGggKYIwMEBCAAoVzUnFg35rSVhzWkojWVUrKVUoNNGo0aCtK1OlaB2otFqLQHVZ9U7UUUEAgAAAAAAyAAAADIAqVpKyVKqVrKqVlKqURpo1GjQVpWp0rQO1FotRVUWgEigAIAAAAAAAAAAAAABnEnFFRWphjKtGkAFpWilVCpCgaIAMgAAAAAAAAAAP//Z'
        } else if (colorMode === 'light') {
            imageUrl = '/images/preload-index-light.png'
            blurImageUrl =
                'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCABrAL4DASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAMEAgEFBv/EACAQAQEBAQACAwEBAQEAAAAAAAACAQMEERIhMRNBIjL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EABsRAQEBAAMBAQAAAAAAAAAAAAABEQISMSET/9oADAMBAAIRAxEAPwD4Cf1Z4v8A7R5+qvG3/vEdeHj2fH/x6PF5vj7+PQ46zUr0OSrmj5aq56yKoNlPGm5qIaNY+Q3QGlW1Wl1oE9E3Q+9TdNagm6pOqrrqPrrUEnVH1V9dR9dbjUI39b5l7v21G/bddlcHyljT51zrNPxovNa9ssvnTuFerwhvnvqlrlxuV7nj19Y9HjTx/Gv6x6XG2Gq9LlSrnTz+VqotEXRRmUkmzMtBV8nNonLHzAyqKqmdsurUF0m6U3dJ7pUK6ak66f0pL0poT9dR9dU9dR9qalahO79u5pe6M07OsqrnaiaefN+j46s2lW5TXyS50a/oiPJdcDbzr/E6fWPT428Lhfxp6fDp9Od+VrXrc7UxbzefRTHQHoTZmdEM9DM6AtzoP6Jc6D+gKNtirJ22KsRu7Iu3Ksm7BzpSbpTd0m6UoV1pF2o/raHpXuifVlxzaHyZDeJtbymsop1ManOw7L3P9a/rqf2Pep1a/RwANOTqvx+qNqK+NJZo9nl0Ux0eXx6fSuLYhq+ehmdEU2blqarzoP6Jst35hp+2ztk7bO2BlWVVsVZVWDt2m6W1dpOvRBjt0Tu1Xy1luTAABQAAAAAAAAOuOgo46s56k4SrjGWD50zNLnDMwVvNHtwA7usbTusUKzVFXTVaR00UvraS6+Wt9q+/RJIAANAAAAAAAAAAABqc91mMncJ917BVxj6UxJfKVMYiY7MmZgnDMxEY9D0Z6c3AK3GKw7cLrFVPabr+KrxL2/NGpEV/rDVMqX0AAQAAAAAAAAAAHVPj4mV+P+CzxbzxRGEc1EIhk4ZmMS3iI76c3HRoF1hdYbRVCp7Sd/zVlo+/5qxuIrYbthU5egADIAAAAAAAD//Z'
        }

        setImage(imageUrl)
        setBlurImage(blurImageUrl)
    }, [colorMode])

    const handleVideoLoad = () => {
        setVideoLoaded(true)
    }

    return (
        <section className="w-full h-[100dvh] fixed bg-black overflow-hidden">
            <div className="w-full h-[75dvh] fixed">
                {items.map(
                    (item) =>
                        item.colorMode === colorMode && (
                            <div
                                key={item._id}
                                className={`w-full h-full flex items-end ${
                                    colorMode === 'dark'
                                        ? 'justify-start'
                                        : 'justify-center'
                                }`}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={490}
                                    height={490}
                                    className="absolute h-[88%] w-fit object-center object-cover z-10"
                                    blurDataURL={item.blurURL}
                                />

                                <Image
                                    src={image}
                                    alt={item.name}
                                    width={490}
                                    height={490}
                                    className={`${
                                        videoLoaded === false
                                            ? 'w-full'
                                            : 'w-0 opacity-0'
                                    } h-full object-center object-cover pointer-events-none`}
                                    blurDataURL={blurImage}
                                />

                                <video
                                    src={item.video}
                                    autoPlay
                                    playsInline
                                    muted
                                    loop
                                    className={`h-full object-center object-cover pointer-events-none z-0 ${
                                        videoLoaded === true
                                            ? 'w-full'
                                            : 'w-0 opacity-0'
                                    }`}
                                    preload="auto"
                                    onPlaying={handleVideoLoad}
                                />
                            </div>
                        )
                )}
            </div>
        </section>
    )
}

export default Index
