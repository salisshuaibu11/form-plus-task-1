import { ArrowLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const GoBackToPreviousPage = () => {
    const router = useRouter();
    return <ArrowLeftIcon onClick={() => router.back()} width={30} style={{color: "#4653EF"}} />
}

export default GoBackToPreviousPage;