import { useCallback, useEffect, useState } from "react";
import Heading from "./Heading";
import PhotoVideoInput from "./PhotoVideoInput";
import PhotoVideoPreview from "./PhotoVideoPreview";
import readFileAsDataURL from "../../utils/readImageFile";
import StatusInput from "./StatusInput";

export type VideoPhotoPreview = {
    url: string;
    type: "video" | "image";
    name: string;
};

const CreatePostModal = () => {
    const [filesList, setFilesList] = useState<File[]>([]);
    const [videoPhotoList, setVideoPhotoList] = useState<VideoPhotoPreview[]>(
        []
    );
    const [caption, setCaption] = useState<string>("");

    const getFilesListHandler = useCallback((files: FileList) => {
        setFilesList((pre) => {
            return [...pre, ...Array.from(files)];
        });
    }, []);

    useEffect(() => {
        filesList.forEach(async (file: File, index) => {
            const url = await readFileAsDataURL(file);
            if (typeof url === "string") {
                setVideoPhotoList((pre) => {
                    const newState = [...pre];
                    newState[index] = {
                        url,
                        type:
                            file.type.split("/")[0] === "image"
                                ? "image"
                                : "video",
                        name: file.name,
                    };
                    console.log(newState);
                    return newState;
                });
            }
        });
    }, [filesList]);

    const getCaptionHandler = useCallback((value: string) => {
        setCaption(value);
    }, []);

    return (
        <div className="min-w-828px w-828px h-3/4 flex flex-col relative z-20 bg-lightDark rounded-lg">
            <Heading />
            <div className="h-90% w-full flex">
                {filesList.length === 0 ? (
                    <PhotoVideoInput
                        getFilesListsHandler={getFilesListHandler}
                    />
                ) : (
                    <PhotoVideoPreview
                        videoPhotoList={videoPhotoList}
                        getFilesListsHandler={getFilesListHandler}
                    />
                )}

                <StatusInput getCaptionHandler={getCaptionHandler} />
            </div>
        </div>
    );
};

export default CreatePostModal;
