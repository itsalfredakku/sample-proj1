import Lottie from "lottie-react";
import emptyAnimation from "../../public/animations/empty.json";

export default function NoRecords() {
    return (
        <div className="grid place-items-center w-full min-h-[300px] p-6 m-6">
            <Lottie
                animationData={emptyAnimation}
                className="w-full max-w-md opacity-50 pointer-events-none"
                loop
            />
            <h3 className="text-gray-500 text-3xl font-semibold mt-4 opacity-50">No records found</h3> 
        </div>
    );
}