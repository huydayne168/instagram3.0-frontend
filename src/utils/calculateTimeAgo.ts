function calculateTimeAgo(time?: Date) {
    let timeAgo = "1h";

    if (time) {
        const currentTime = new Date().getTime();
        const postTime = new Date(time).getTime();
        const diffTime = currentTime - postTime;
        const diffTimeInHours = diffTime / (1000 * 60 * 60);

        if (diffTimeInHours < 1) {
            timeAgo = `${Math.floor(diffTime / (1000 * 60))}m`;
        } else if (diffTimeInHours < 24) {
            timeAgo = `${Math.floor(diffTimeInHours)}h`;
        } else {
            timeAgo = `${Math.floor(diffTimeInHours / 24)}d`;
        }
    } else {
        timeAgo = "long time ago";
    }

    return timeAgo;
}

export default calculateTimeAgo;
