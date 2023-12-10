import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperPaginationNavigation from "../SwiperPaginationNavigation";

export type VideoPhoto = {
    id?: number;
    url: string;
    type: "image" | "video";
    name?: string;
    post_index?: number;
};

const VideoPhotoSwiper: React.FC<{ videoPhotoList: VideoPhoto[] }> = ({
    videoPhotoList,
}) => {
    return (
        <Swiper
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            className="my-auto swiper-container relative h-full"
            modules={[Navigation, Pagination]}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
            }}
        >
            {videoPhotoList.map((item: VideoPhoto) => {
                if (item.type === "image" && typeof item.url === "string") {
                    return (
                        <SwiperSlide key={item.name}>
                            <img
                                src={item.url}
                                alt={item.name}
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    );
                } else if (
                    item.type === "video" &&
                    typeof item.url === "string"
                ) {
                    return (
                        <SwiperSlide
                            key={item.name}
                            className="flex justify-center items-center"
                        >
                            <video
                                autoPlay
                                className="object-cover w-full h-full"
                            >
                                <source src={item.url} type="video/mp4" />
                            </video>
                        </SwiperSlide>
                    );
                }
            })}
            <SwiperPaginationNavigation />
        </Swiper>
    );
};

export default VideoPhotoSwiper;
