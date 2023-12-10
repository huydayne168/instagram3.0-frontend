import React, { useCallback } from "react";
// import { VideoPhoto } from "./CreatePostModal";
import AddMoreVideoPhotoInput from "./AddMoreVideoPhotoInput";
import { VideoPhotoPreview } from "./CreatePostModal";
import VideoPhotoSwiper from "../UI/VideoPhotoSwiper";

const PhotoVideoPreview: React.FC<{
    videoPhotoList: VideoPhotoPreview[];
    getFilesListsHandler: Function;
}> = ({ videoPhotoList, getFilesListsHandler }) => {
    const addMoreFile = useCallback((files: FileList) => {
        getFilesListsHandler(files);
    }, []);

    return (
        <div className="h-full w-3/5 my-auto relative ">
            <VideoPhotoSwiper videoPhotoList={videoPhotoList} />
            <AddMoreVideoPhotoInput addMoreFile={addMoreFile} />
        </div>
    );
};

export default PhotoVideoPreview;
