// import Lottie from "lottie-react";
// import animationData from "../../public/animations/empty.json";
export default function NoRecords() {
    return (
        <div className="flex items-center justify-center w-full min-h-[300px]">
            {/* <Lottie
                animationData={animationData}
                className="flex justify-center items-center"
                loop={true}
            /> */}
            <h3 className="text-gray-500 text-3xl font-semibold">No records found</h3>
        </div>
    );
}